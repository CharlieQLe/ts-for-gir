/**
 * GstTag-0.10
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { Gst } from './Gst-0.10';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace GstTag {

export enum DemuxResult {
    BROKEN_TAG,
    AGAIN,
    OK,
}
export enum ImageType {
    NONE,
    UNDEFINED,
    FRONT_COVER,
    BACK_COVER,
    LEAFLET_PAGE,
    MEDIUM,
    LEAD_ARTIST,
    ARTIST,
    CONDUCTOR,
    BAND_ORCHESTRA,
    COMPOSER,
    LYRICIST,
    RECORDING_LOCATION,
    DURING_RECORDING,
    DURING_PERFORMANCE,
    VIDEO_CAPTURE,
    FISH,
    ILLUSTRATION,
    ARTIST_LOGO,
    PUBLISHER_STUDIO_LOGO,
}
export const CDDA_CDDB_DISCID: string
export const CDDA_CDDB_DISCID_FULL: string
export const CDDA_MUSICBRAINZ_DISCID: string
export const CDDA_MUSICBRAINZ_DISCID_FULL: string
export const CMML_CLIP: string
export const CMML_HEAD: string
export const CMML_STREAM: string
export const MUSICBRAINZ_ALBUMARTISTID: string
export const MUSICBRAINZ_ALBUMID: string
export const MUSICBRAINZ_ARTISTID: string
export const MUSICBRAINZ_TRACKID: string
export const MUSICBRAINZ_TRMID: string
export function freeformStringToUtf8(data: string, size: any, envVars: string[]): string
export function fromId3Tag(id3Tag: string): string
export function fromId3UserTag(type: string, id3UserTag: string): string
export function fromVorbisTag(vorbisTag: string): string
export function getLanguageCodeIso6391(langCode: string): string
export function getLanguageCodeIso6392B(langCode: string): string
export function getLanguageCodeIso6392T(langCode: string): string
export function getLanguageCodes(): string[]
export function getLanguageName(languageCode: string): string
export function gstVorbisTagAdd(list: Gst.TagList, tag: string, value: string): void
export function id3GenreCount(): any
export function id3GenreGet(id: any): string
export function imageDataToImageBuffer(imageData: any[], imageDataLen: any, imageType: ImageType): Gst.Buffer
export function listAddId3Image(tagList: Gst.TagList, imageData: any[], imageDataLen: any, id3PictureType: any): any
export function listFromVorbiscommentBuffer(buffer: Gst.Buffer, idData: any[], idDataLength: any, vendorString: string[]): Gst.TagList
export function listFromXmpBuffer(buffer: Gst.Buffer): Gst.TagList
export function listNewFromId3v1(data: any[]): Gst.TagList
export function listToVorbiscommentBuffer(list: Gst.TagList, idData: any[], idDataLength: any, vendorString: string): Gst.Buffer
export function listToXmpBuffer(list: Gst.TagList, readOnly: any): Gst.Buffer
export function parseExtendedComment(extComment: string, key: string[], lang: string[], value: string[], failIfNoKey: any): any
export function registerMusicbrainzTags(): void
export function toId3Tag(gstTag: string): string
export function toVorbisTag(gstTag: string): string
export interface Demux_ConstructProps extends Gst.Element_ConstructProps {
}
export class Demux {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GstTag-0.10.GstTag.Demux */
    element: Gst.Element
    priv: DemuxPrivate
    reserved: any[]
    /* Fields of Gst-0.10.Gst.Element */
    object: Gst.Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Gst.Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Gst.Clock
    getClock(): Gst.Clock
    setClock(clock: Gst.Clock): any
    setBaseTime(time: Gst.ClockTime): void
    getBaseTime(): Gst.ClockTime
    setStartTime(time: Gst.ClockTime): void
    getStartTime(): Gst.ClockTime
    isIndexable(): any
    setIndex(index: Gst.Index): void
    getIndex(): Gst.Index
    setBus(bus: Gst.Bus): void
    getBus(): Gst.Bus
    addPad(pad: Gst.Pad): any
    removePad(pad: Gst.Pad): any
    noMorePads(): void
    getPad(name: string): Gst.Pad
    getStaticPad(name: string): Gst.Pad
    getRequestPad(name: string): Gst.Pad
    releaseRequestPad(pad: Gst.Pad): void
    iteratePads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    sendEvent(event: Gst.Event): any
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, curType: Gst.SeekType, cur: any, stopType: Gst.SeekType, stop: any): any
    getQueryTypes(): Gst.QueryType
    query(query: Gst.Query): any
    postMessage(message: Gst.Message): any
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State, pending: Gst.State }
    setState(state: Gst.State): Gst.StateChangeReturn
    abortState(): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): Gst.ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): any
    linkFiltered(dest: Gst.Element, filter: Gst.Caps): any
    unlink(dest: Gst.Element): void
    linkPads(srcpadname: string, dest: Gst.Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): any
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: any): any
    queryPosition(format: Gst.Format): { returnType: any, cur: any }
    queryDuration(format: Gst.Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Gst.Format, srcVal: any, destFormat: Gst.Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Gst.Pad, list: Gst.TagList): void
    foundTags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Gst.Object): any
    getParent(): Gst.Object
    unparent(): void
    hasAncestor(ancestor: Gst.Object): any
    replace(newobj: Gst.Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Demux) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Demux, object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Demux, object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Demux, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Demux, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Demux, object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Demux, object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Demux, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Demux, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Demux, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Demux_ConstructProps)
    _init (config?: Demux_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class DemuxClass {
    /* Fields of GstTag-0.10.GstTag.DemuxClass */
    parentClass: Gst.ElementClass
    minStartSize: any
    minEndSize: any
    identifyTag: (demux: Demux, buffer: Gst.Buffer, startTag: any) => { returnType: any, tagSize: any }
    parseTag: (demux: Demux, buffer: Gst.Buffer, startTag: any, tags: Gst.TagList) => { returnType: DemuxResult, tagSize: any }
    mergeTags: (demux: Demux, startTags: Gst.TagList, endTags: Gst.TagList) => Gst.TagList
    reserved: any[]
    static name: string
}
export class DemuxPrivate {
    static name: string
}
}