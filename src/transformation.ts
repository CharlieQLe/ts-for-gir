/**
 * This is where transformations take place for gjs and node-gtk.
 * For example a function names should be transformed to lowerCamelCase for node-gtk but should keep their original name for gjs
 */

import { Transformations, Environment, ConstructName, GType, GenerateConfig } from './types'
import Path from 'path'
import { Utils } from './utils'
import { Logger } from './logger'

export const POD_TYPE_MAP_ARRAY = (environment: Environment): { guint8: string; gint8: string; gunichar: string } => {
    return {
        guint8: environment === 'gjs' ? 'Uint8Array' : 'any', // TODO
        // Int8Array would probably be more appropriate for gint8, but Uint8Array is better supported
        gint8: environment === 'gjs' ? 'Uint8Array' : 'any', // TODO
        gunichar: 'string',
    }
}

/**
 * @see https://developer.gnome.org/glib/stable/glib-Basic-Types.html
 */
export const POD_TYPE_MAP = {
    utf8: 'string',
    none: 'void',
    double: 'number',
    'double*': 'number',
    guint: 'number',
    'guint*' : 'number',
    guint8: 'number',
    'guint8*': 'number',
    'guint8**': 'number',
    guint16: 'number',
    'guint16*' : 'number',
    gint16: 'number',
    'gint16*': 'number',
    guint32: 'number',
    'guint32*': 'number',
    guint64: 'number',
    'guint64*': 'number',
    gunichar: 'number',
    'gunichar*': 'number',
    gint: 'number',
    'gint*': 'number',
    gint8: 'number',
    'gint8*': 'number',
    gint32: 'number',
    'gint32*': 'number',
    gint64: 'number',
    'gint64*': 'number',
    gushort: 'number',
    'gushort*': 'number',
    gfloat: 'number',
    'gfloat*': 'number',
    gboolean: 'boolean',
    'gboolean*': 'boolean',
    gpointer: 'object',
    'gpointer*': 'object',
    gconstpointer: 'object',
    gchar: 'number',
    guchar: 'number',
    glong: 'number',
    gulong: 'number',
    gdouble: 'number',
    gssize: 'number',
    gsize: 'number',
    long: 'number',
    object: 'any',
    gshort: 'number',
    filename: 'string',
    va_list: 'any',
    guintptr: 'number',
}

export const C_TYPE_MAP = (value: string): string => {
    const cTypeMap = {
        'char*': 'string',
        'gchar*': 'string',
        'gchar**': 'string', // TODO CHECKME
        'const gchar*': 'string', // TODO CHECKME
        'const char*': 'string', // TODO CHECKME
        uint8: 'number',
        int8: 'number',
        int32: 'number',
        uint16: 'number',
        'int*': 'number',
        int: 'number',
        boolean: 'boolean'
    }
    return cTypeMap[value]
}

// Gjs is permissive for byte-array in parameters but strict for out/return
// See <https://discourse.gnome.org/t/gjs-bytearray-vs-glib-bytes/4900>
export const FULL_TYPE_MAP = (
    environment: Environment,
    packageName: string,
    value: string,
    out = true,
): string | undefined => {
    let ba: string
    let gb: string | undefined
    if (environment === 'gjs') {
        ba = 'Uint8Array'
        if (out === false) {
            ba += ' | Gjs.byteArray.ByteArray'
            gb = 'GLib.Bytes | Uint8Array | Gjs.byteArray.ByteArray'
        } else {
            gb = undefined // No transformation
        }
    } else {
        // TODO
        ba = 'any'
        gb = 'any'
    }

    if (value.endsWith('GType')) {
        value = 'GType'
    }

    const fullTypeMap = {
        'GObject.Value': 'any',
        'GObject.Closure': 'Function',
        'GLib.ByteArray': ba,
        'GLib.Bytes': gb,
        GType: packageName === 'GObject-2.0' ? 'Type' : 'GObject.Type',
    }

    return fullTypeMap[value]
}

export const RESERVED_VARIABLE_NAMES = [
    'in',
    'function',
    'true',
    'false',
    'break',
    'arguments',
    'eval',
    'default',
    'new',
    'extends',
    'with',
    'var',
    'class',
    'delete',
    'return',
    'this', // TODO check if this is used as we would use this in javascript, if so, this is only allowed as the first parameter
]

export const RESERVED_CLASS_NAMES = [
    'break',
    'boolean',
    'case',
    'catch',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'enum',
    'export',
    'extends',
    'false',
    'finally',
    'for',
    'function',
    'if',
    'implements',
    'import',
    'in',
    'instanceof',
    'interface',
    'let',
    'new',
    'number',
    'package',
    'private',
    'protected',
    'public',
    'return',
    'static',
    'super',
    'switch',
    'string',
    'this',
    'throw',
    'true',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'yield',
]

export const RESERVED_FUNCTION_NAMES = ['false', 'true', 'break']

export const RESERVED_NAMESPACE_NAMES = {}

export class Transformation {
    /**
     * Rules for the name conventions
     * For node-gtk naming conventions see https://github.com/romgrk/node-gtk#naming-conventions
     * For gjs see https://gjs-docs.gnome.org/ and https://wiki.gnome.org/Attic/Gjs
     */
    private transformations: Transformations = {
        functionName: {
            node: {
                transformation: 'lowerCamelCase',
            },
            gjs: {
                transformation: 'original',
            },
        },
        enumName: {
            node: {
                transformation: 'original',
            },
            gjs: {
                transformation: 'original',
            },
        },
        enumValue: {
            node: {
                transformation: 'upperCase',
            },
            gjs: {
                transformation: 'upperCase',
            },
        },
        signalName: {
            node: {
                transformation: 'original',
            },
            gjs: {
                transformation: 'original',
            },
        },
        // GJS always re-writes - to _ (I think?)
        propertyName: {
            node: {
                transformation: 'lowerCamelCase',
            },
            gjs: {
                transformation: 'underscores',
            },
        },
        parameterName: {
            node: {
                transformation: 'lowerCamelCase',
            },
            gjs: {
                transformation: 'underscores',
            },
        },
        fieldName: {
            node: {
                transformation: 'lowerCamelCase',
            },
            gjs: {
                transformation: 'underscores',
            },
        },
        constantName: {
            node: {
                transformation: 'original',
            },
            gjs: {
                transformation: 'original',
            },
        },
        importName: {
            node: {
                transformation: 'upperCamelCase',
            },
            gjs: {
                transformation: 'upperCamelCase',
            },
        },
    }

    private log: Logger

    constructor(moduleName = 'Transformation', private readonly config: GenerateConfig) {
        this.log = new Logger(config.environment, config.verbose, moduleName)
    }

    public transformModuleNamespaceName(name: string): string {
        name = this.transformNumericName(name)
        name = this.transform('importName', name)

        if (RESERVED_NAMESPACE_NAMES[name]) {
            name = `${name}_`
        }
        return name
    }

    public transformClassName(name: string): string {
        const originalName = `${name}`
        name = this.transformNumericName(name)

        if (RESERVED_CLASS_NAMES.includes(name)) {
            name = `${name}_`
        }
        if (originalName !== name) {
            this.log.warn(`Class name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    public transformEnumName(name: string): string {
        name = this.transform('enumName', name)
        const originalName = `${name}`

        // For an example enum starting with a number see https://gjs-docs.gnome.org/nm10~1.20.8/nm.80211mode
        name = this.transformNumericName(name)

        if (RESERVED_CLASS_NAMES.includes(name)) {
            name = `${name}_`
        }
        if (originalName !== name) {
            this.log.warn(`Enum name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    public transformFunctionName(name: string): string {
        name = this.transform('functionName', name)
        const originalName = `${name}`

        name = this.transformNumericName(name)

        if (RESERVED_FUNCTION_NAMES.includes(name)) {
            name = `${name}_TODO`
        }

        if (originalName !== name) {
            this.log.warn(`Function name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    /**
     * E.g. GstVideo-1.0 has a class `VideoScaler` with a method called `2d`
     * or NetworkManager-1.0 has methods starting with `80211`
     */
    public transformPropertyName(name: string, allowQuotes: boolean): string {
        name = this.transform('propertyName', name)
        const originalName = `${name}`

        if (RESERVED_VARIABLE_NAMES.includes(name)) {
            if (allowQuotes) name = `"${name}"`
            else name = `${name}_`
        }

        name = this.transformNumericName(name, allowQuotes)

        if (originalName !== name) {
            // this.log.warn(`Property name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    public transformConstantName(name: string, allowQuotes: boolean): string {
        name = this.transform('constantName', name)
        const originalName = `${name}`

        if (RESERVED_VARIABLE_NAMES.includes(name)) {
            if (allowQuotes) name = `"${name}"`
            else name = `${name}_`
        }

        name = this.transformNumericName(name, allowQuotes)
        if (originalName !== name) {
            this.log.warn(`Constant name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    public transformFieldName(name: string, allowQuotes: boolean): string {
        name = this.transform('fieldName', name)
        const originalName = `${name}`

        if (RESERVED_VARIABLE_NAMES.includes(name)) {
            if (allowQuotes) name = `"${name}"`
            else name = `${name}_`
        }

        name = this.transformNumericName(name, allowQuotes)
        if (originalName !== name) {
            this.log.warn(`Field name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    public transformParameterName(name: string, allowQuotes: boolean): string {
        // Such a variable name exists in `GConf-2.0.d.ts` class `Engine` method `change_set_from_current`
        if (name === '...') {
            return '...args'
        }
        name = this.transform('parameterName', name)
        const originalName = `${name}`
        if (RESERVED_VARIABLE_NAMES.includes(name)) {
            if (allowQuotes) name = `"${name}"`
            else name = `${name}_`
        }

        name = this.transformNumericName(name, allowQuotes)
        if (originalName !== name) {
            this.log.warn(`Parameter name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    /**
     * Fixes type names, e.g. Return types or enum definitions can not start with numbers
     * @param typeName
     */
    public transformTypeName(name: string): string {
        name = this.transformNumericName(name)
        return name
    }

    public transform(construct: ConstructName, transformMe: string): string {
        const transformations = this.transformations[construct][this.config.environment].transformation
        if (transformations === 'original') {
            return transformMe
        }
        if (transformations === 'lowerCamelCase') {
            return Utils.lowerCamelCase(transformMe)
        }
        if (transformations === 'upperCamelCase') {
            return Utils.upperCamelCase(transformMe)
        }
        if (transformations === 'upperCase') {
            return transformMe.toUpperCase()
        }
        if (transformations === 'lowerCase') {
            return transformMe.toLowerCase()
        }
        if (transformations === 'underscores') {
            return transformMe.replace(/-|_/g, '_')
        }
        return transformMe
    }

    /**
     * In JavaScript there can be no variables, methods, class names or enum names that start with a number.
     * This method converts such names.
     * TODO ala prepends an `@` to numeric starting names how does gjs and node-gtk do that?
     * @param name
     * @param allowQuotes
     */
    private transformNumericName(name: string, allowQuotes = false): string {
        if (Utils.isFirstCharNumeric(name)) {
            if (allowQuotes) name = `"${name}"`
            else name = `TODO_${name}`
        }
        return name
    }

    static getEnvironmentDir(environment: Environment, baseDir: string): string {
        if (!baseDir.endsWith(environment))
            if (environment === 'gjs' && !baseDir.endsWith('/Gjs')) {
                return Path.join(baseDir, 'Gjs')
            }
        if (environment === 'node' && !baseDir.endsWith('/node-gtk')) {
            return Path.join(baseDir, 'node-gtk')
        }
        return baseDir
    }

    getEnvironmentDir(baseDir: string): string {
        return Transformation.getEnvironmentDir(this.config.environment, baseDir)
    }
}
