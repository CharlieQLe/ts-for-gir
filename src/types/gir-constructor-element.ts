import { GirInfoAttrs, GirCallableAttrs, GirCallableParams, GirCallableReturn, PartOfClass, DescFunction } from '.'

export interface GirConstructorElement extends PartOfClass {
    /** A constructor of a class */
    $: GirInfoAttrs & GirCallableAttrs

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    // CUSTOM
    _type: 'constructor'
    _desc?: DescFunction
}
