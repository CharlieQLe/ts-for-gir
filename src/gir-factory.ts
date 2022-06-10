import type {
    GirFunctionElement,
    GirDocElement,
    GirVirtualMethodElement,
    GirCallableParamElement,
    GirConstructorElement,
    GirMethodElement,
    GirInstanceParameter,
    GirPropertyElement,
    GirAnnotation,
    TsFunction,
    TsMethod,
    TsParameter,
    TsGenericParameter,
    TsProperty,
    TsType,
    TsDoc,
    InjectionFunction,
    InjectionInstanceParameter,
    InjectionGenericParameter,
    InjectionType,
    InjectionParameter,
    InjectionProperty,
    Environment,
    TypeProperty,
    TypeGirElement,
    TypeTsElement,
    TypeGirFunction,
    TypeTsFunction,
    TypeTsProperty,
} from './types/index.js'

import { GENERIC_NAMES } from './constants.js'

/**
 * Creates new gir and ts objects
 */
export class GirFactory {
    newGenerics(generics: InjectionGenericParameter[]) {
        const tsGenerics: TsGenericParameter[] = []
        for (let i = 0; i < generics.length; i++) {
            const generic = generics[i]
            const tsGeneric: TsGenericParameter = {
                name: generic.name || GENERIC_NAMES[i],
                ...generic,
            }
            tsGenerics.push(tsGeneric)
        }
        return tsGenerics
    }

    girTypeNameToTsTypeName(girTypeName: 'alias', isStatic: boolean): 'type'
    girTypeNameToTsTypeName(girTypeName: 'enum' | 'bitfield', isStatic: boolean): 'enum'
    girTypeNameToTsTypeName(girTypeName: 'enum-member' | 'bitfield-member', isStatic: boolean): 'enum-member'
    girTypeNameToTsTypeName(girTypeName: 'callback', isStatic: boolean): 'interface'
    girTypeNameToTsTypeName(girTypeName: 'class' | 'interface' | 'union' | 'record', isStatic: boolean): 'class'
    girTypeNameToTsTypeName(girTypeName: 'constant', isStatic: boolean): 'constant'
    girTypeNameToTsTypeName(girTypeName: 'constructor', isStatic: boolean): 'static-function'
    girTypeNameToTsTypeName(girTypeName: 'method' | 'virtual', isStatic: boolean): 'method'
    girTypeNameToTsTypeName(girTypeName: 'signal' | 'method', isStatic: boolean): 'event-methods'
    girTypeNameToTsTypeName(girTypeName: 'static-function', isStatic: true): 'static-function'
    girTypeNameToTsTypeName(girTypeName: 'function', isStatic: true): 'static-function'
    girTypeNameToTsTypeName(girTypeName: 'function', isStatic: false): 'function'
    girTypeNameToTsTypeName(girTypeName: TypeProperty, isStatic: boolean): TypeTsProperty
    girTypeNameToTsTypeName(girTypeName: TypeProperty, isStatic: false): 'property' | 'constructor-property'
    girTypeNameToTsTypeName(girTypeName: TypeProperty, isStatic: true): 'static-property'
    girTypeNameToTsTypeName(girTypeName: TypeGirFunction, isStatic: boolean): TypeTsFunction
    girTypeNameToTsTypeName(girTypeName: TypeGirElement, isStatic: boolean): TypeTsElement {
        switch (girTypeName) {
            case 'alias':
                return 'type'
            case 'enum':
            case 'bitfield':
                return 'enum'
            case 'enum-member':
            case 'bitfield-member':
                return 'enum-member'
            case 'callback':
                return 'interface'
            case 'class':
            case 'interface':
            case 'union':
            case 'record':
                return 'class'
            case 'constant':
                return 'constant'
            case 'constructor':
                return 'static-function'
            case 'method':
            case 'virtual':
                return 'method'
            case 'signal':
                return 'event-methods'
            case 'static-function':
                return 'static-function'
            case 'function':
                if (typeof isStatic === 'undefined') {
                    throw new Error(
                        'You must specify if the function is static or not if you want to convert the type of a function!',
                    )
                }
                if (isStatic) {
                    return 'static-function'
                }
                return 'function'
            case 'field':
            case 'property':
                if (typeof isStatic === 'undefined') {
                    throw new Error(
                        'You must specify if the property is static or not if you want to convert the type of a function!',
                    )
                }
                if (isStatic) {
                    return 'static-property'
                }
                return 'property'
        }
        throw new Error(`Unknown gir type: "${String(girTypeName)}"!`)
    }

    newGirFunctions(injectFunctions: InjectionFunction[]) {
        const girFunctionElements: Array<
            GirConstructorElement & GirFunctionElement & GirMethodElement & GirVirtualMethodElement
        > = []
        for (const injectFunction of injectFunctions) {
            girFunctionElements.push(this.newGirFunction(injectFunction))
        }
        return girFunctionElements
    }

    newGirFunction(
        tsData: InjectionFunction,
    ): GirConstructorElement & GirFunctionElement & GirMethodElement & GirVirtualMethodElement {
        const _tsData = this.newTsFunction(tsData)
        return {
            $: this.newGirAttr(_tsData.name),
            ...this.newGirDocElement(),
            _tsData,
        }
    }

    newGirCallableParamElement(tsData: InjectionParameter): GirCallableParamElement {
        return {
            $: this.newGirAttr(),
            ...this.newGirDocElement(),
            _tsData: this.newTsParameter(tsData),
        }
    }

    newGirCallableParamElements(injectionParams: InjectionParameter[] = []): GirCallableParamElement[] {
        const result: GirCallableParamElement[] = []
        for (const injectionParam of injectionParams) {
            result.push(this.newGirCallableParamElement(injectionParam))
        }
        return result
    }

    newGirInstanceParameter(tsData: InjectionInstanceParameter): GirInstanceParameter {
        return {
            $: this.newGirAttr(),
            ...this.newGirDocElement(),
            _tsData: tsData,
        }
    }

    newGirInstanceParameters(injectionInstanceParams: InjectionInstanceParameter[] = []): GirInstanceParameter[] {
        const result: GirInstanceParameter[] = []
        for (const injectionInstanceParam of injectionInstanceParams) {
            result.push(this.newGirInstanceParameter(injectionInstanceParam))
        }
        return result
    }

    newGirProperty(tsData: InjectionProperty): GirPropertyElement {
        const _tsData = this.newTsProperty(tsData)
        if (!_tsData.name) throw new Error('The name property is required!')
        return {
            $: {
                ...this.newGirAttr(_tsData.name),
            },
            annotation: [],
            ...this.newGirDocElement(),
            _tsData,
        }
    }

    newTsFunction(tsData: InjectionFunction): TsFunction {
        const tsFunc: TsFunction & TsMethod = {
            ...tsData,
            returnTypes: this.newTsTypes(tsData.returnTypes || []),
            isArrowType: tsData.isArrowType || false,
            isStatic: tsData.isStatic || false,
            isGlobal: tsData.isGlobal || false,
            isVirtual: tsData.isVirtual || false,
            retTypeIsVoid: tsData.returnTypes?.length === 1 && tsData.returnTypes[0]?.type === 'void',
            inParams: this.newGirCallableParamElements(tsData.inParams),
            outParams: this.newGirCallableParamElements(tsData.outParams),
            instanceParameters: this.newGirInstanceParameters(tsData.instanceParameters),
            generics: this.newGenerics(tsData.generics || []),
            overloads: tsData.overloads || [],
            doc: this.newTsDoc(tsData.doc),
            tsTypeName: this.girTypeNameToTsTypeName(tsData.girTypeName, tsData.isStatic || false),
        }

        return tsFunc
    }

    newTsProperty(tsData: InjectionProperty): TsProperty {
        tsData.type ||= [this.newTsType()]
        const tsProp: TsProperty = {
            ...tsData,
            readonly: tsData.isStatic || false,
            isStatic: tsData.isStatic || false,
            type: this.newTsTypes(tsData.type || []),
            doc: this.newTsDoc(tsData.doc),
            tsTypeName: this.girTypeNameToTsTypeName(tsData.girTypeName, tsData.isStatic || false),
        }
        return tsProp
    }

    newTsType(tsData: InjectionType = {}): TsType {
        tsData.callbacks ||= []
        tsData.generics ||= []
        tsData.nullable ||= false
        tsData.optional ||= false

        const newTsData: TsType = {
            type: tsData.type || 'void',
            callbacks: tsData.callbacks || [],
            generics: tsData.generics || [],
            nullable: tsData.nullable || false,
            optional: tsData.optional || false,
            isArray: tsData.isArray || false,
            isCallback: tsData.isCallback || false,
            isFunction: tsData.isFunction || false,
        }

        return newTsData
    }

    newTsTypes(tsDataArr: InjectionType[]): TsType[] {
        const types: TsType[] = []
        for (const tsData of tsDataArr) {
            types.push(this.newTsType(tsData))
        }

        if (tsDataArr.length === 0) {
            types.push(this.newTsType({}))
        }

        return types
    }

    newTsParameter(tsData: InjectionParameter) {
        const types: TsType[] = []
        for (const type of tsData.type || []) {
            type.type = type.type || 'any'
            types.push(this.newTsType(type))
        }

        const newTsData: TsParameter = {
            type: types,
            name: tsData.name,
            isRest: tsData.isRest || false,
            girTypeName: 'callable-param',
            doc: this.newTsDoc(tsData.doc),
        }

        return newTsData
    }

    /**
     * Generates signal methods like `connect`, `connect_after` and `emit` on Gjs or `connect`, `on`, `once`, `off` and `emit` an node-gtk
     * for a default gir signal element
     * @param girSignal
     * @returns
     */
    newTsSignalMethods(
        signalName: string | undefined,
        callbackType: string | undefined,
        emitInParams: InjectionParameter[],
        environment: Environment,
        withDisconnect?: boolean,
    ) {
        const tsMethods: TsMethod[] = []
        const girTypeName: TypeGirFunction = 'signal'

        const sigNameInParam: InjectionParameter = {
            name: 'sigName',
            type: [
                this.newTsType({
                    type: signalName ? `"${signalName}"` : 'string',
                }),
            ],
            doc: this.newTsDoc(),
        }

        const anyArgsInParam = {
            name: '...args',
            type: [
                this.newTsType({
                    type: `any`,
                    isArray: true,
                }),
            ],
            doc: this.newTsDoc(),
        }

        emitInParams.push(anyArgsInParam)

        const callbackInParam: InjectionParameter = {
            name: 'callback',
            type: [
                this.newTsType({
                    type: callbackType || '(...args: any[]) => void',
                }),
            ],
            doc: this.newTsDoc(),
        }

        const numberReturnType = this.newTsType({
            type: 'number',
        })

        const connectTsFn = this.newTsFunction({
            name: 'connect',
            inParams: [sigNameInParam, callbackInParam],
            returnTypes: [numberReturnType],
            girTypeName,
        })
        tsMethods.push(connectTsFn)

        if (environment === 'gjs') {
            const connectAfterTsFn = this.newTsFunction({
                name: 'connect_after',
                inParams: [sigNameInParam, callbackInParam],
                returnTypes: [numberReturnType],
                girTypeName,
            })
            tsMethods.push(connectAfterTsFn)
        } else if (environment === 'node') {
            const afterInParam: InjectionParameter = {
                name: 'after',
                type: [
                    this.newTsType({
                        type: 'boolean',
                        optional: true,
                    }),
                ],
                doc: this.newTsDoc(),
            }

            const nodeEventEmitterReturnType = this.newTsType({
                type: 'NodeJS.EventEmitter',
            })

            const onTsFn = this.newTsFunction({
                name: 'on',
                inParams: [sigNameInParam, callbackInParam, afterInParam],
                returnTypes: [nodeEventEmitterReturnType],
                girTypeName,
            })
            const onceTsFn = this.newTsFunction({
                name: 'once',
                inParams: [sigNameInParam, callbackInParam, afterInParam],
                returnTypes: [nodeEventEmitterReturnType],
                girTypeName,
            })
            const offTsFn = this.newTsFunction({
                name: 'off',
                inParams: [sigNameInParam, callbackInParam],
                returnTypes: [nodeEventEmitterReturnType],
                girTypeName,
            })
            tsMethods.push(onTsFn, onceTsFn, offTsFn)
        }

        const emitTsFn = this.newTsFunction({
            name: 'emit',
            inParams: [sigNameInParam, ...emitInParams],
            girTypeName,
        })
        tsMethods.push(emitTsFn)

        if (withDisconnect && environment === 'gjs') {
            const idInParam: InjectionParameter = {
                name: 'id',
                type: [
                    this.newTsType({
                        type: 'number',
                    }),
                ],
                doc: this.newTsDoc(),
            }

            const emitTsFn = this.newTsFunction({
                name: 'disconnect',
                inParams: [idInParam],
                girTypeName,
            })
            tsMethods.push(emitTsFn)
        }

        return tsMethods
    }

    newGirAttr(
        name = '',
    ): (GirConstructorElement & GirFunctionElement & GirMethodElement & GirVirtualMethodElement)['$'] {
        return {
            name,
            'glib:set-property': '',
            'glib:get-property': '',
        }
    }

    newGirAnnotation(data: Partial<GirAnnotation['$']> = {}): GirAnnotation {
        data.name ||= ''
        data.value ||= []
        return {
            $: data as GirAnnotation['$'],
        }
    }

    newGirDocElement(text = '', filename = '', line = '', column = ''): GirDocElement {
        return {
            doc: [{ $: { filename, line, column }, _: text }],
            'doc-deprecated': [{ $: {}, _: '' }],
            'source-position': [{ filename: '', line: '', column: [''] }],
        }
    }

    newTsDoc(data: Partial<TsDoc> = {}): TsDoc {
        return {
            tags: data.tags || [],
            text: data.text || '',
            returns: data.returns || '',
        }
    }
}
