/**
 * Zpj-0.0
 */

import "node"
import type { Soup } from './Soup-2.4';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Rest } from './Rest-0.7';
import type { Json } from './Json-1.0';

declare namespace Zpj {

enum Error {
    REQUEST_URL_INVALID,
    UNKNOWN,
}
enum SkydriveEntryType {
    FILE,
    FOLDER,
    PHOTO,
    VIDEO,
    INVALID,
}
enum ThumbnailSize {
    SMALL,
    NORMAL,
}
export const SKYDRIVE_FOLDER_MY_DOCUMENTS: string
export const SKYDRIVE_FOLDER_MY_PHOTOS: string
export const SKYDRIVE_FOLDER_PUBLIC_DOCUMENTS: string
export const SKYDRIVE_FOLDER_SKYDRIVE: string
function errorQuark(): GLib.Quark
class Authorizer {
    /* Methods of Zpj-0.0.Zpj.Authorizer */
    isAuthorizedForDomain(domain: AuthorizationDomain): boolean
    processCall(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void
    processMessage(domain: AuthorizationDomain | null, message: Soup.Message): void
    refreshAuthorization(cancellable?: Gio.Cancellable | null): boolean
    refreshAuthorizationAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshAuthorizationFinish(res: Gio.AsyncResult): boolean
    static name: string
}
export interface AuthorizationDomain_ConstructProps extends GObject.Object_ConstructProps {
    scope?: string
    serviceName?: string
}
class AuthorizationDomain {
    /* Fields of Zpj-0.0.Zpj.AuthorizationDomain */
    parentInstance: GObject.Object
    priv: AuthorizationDomainPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zpj-0.0.Zpj.AuthorizationDomain */
    getScope(): string
    getServiceName(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthorizationDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthorizationDomain_ConstructProps)
    _init (config?: AuthorizationDomain_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GoaAuthorizer_ConstructProps extends GObject.Object_ConstructProps {
}
class GoaAuthorizer {
    /* Fields of Zpj-0.0.Zpj.GoaAuthorizer */
    parentInstance: GObject.Object
    priv: GoaAuthorizerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Zpj-0.0.Zpj.Authorizer */
    isAuthorizedForDomain(domain: AuthorizationDomain): boolean
    processCall(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void
    processMessage(domain: AuthorizationDomain | null, message: Soup.Message): void
    refreshAuthorization(cancellable?: Gio.Cancellable | null): boolean
    refreshAuthorizationAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshAuthorizationFinish(res: Gio.AsyncResult): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GoaAuthorizer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GoaAuthorizer_ConstructProps)
    _init (config?: GoaAuthorizer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Skydrive_ConstructProps extends GObject.Object_ConstructProps {
    authorizer?: Authorizer
}
class Skydrive {
    /* Properties of Zpj-0.0.Zpj.Skydrive */
    authorizer: Authorizer
    /* Fields of Zpj-0.0.Zpj.Skydrive */
    parentInstance: GObject.Object
    priv: SkydrivePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zpj-0.0.Zpj.Skydrive */
    createFolder(folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): boolean
    createFolderFromName(name: string, parentId: string, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryId(entryId: string, cancellable?: Gio.Cancellable | null): boolean
    downloadFileIdToPath(fileId: string, path: string, cancellable?: Gio.Cancellable | null): boolean
    downloadFileIdToStream(fileId: string, cancellable?: Gio.Cancellable | null): Gio.InputStream
    downloadFileIdToStreamAsync(fileId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    downloadFileIdToStreamFinish(res: Gio.AsyncResult): Gio.InputStream
    downloadFileToPath(file: SkydriveFile, path: string, cancellable?: Gio.Cancellable | null): boolean
    downloadFileToStream(file: SkydriveFile, cancellable?: Gio.Cancellable | null): Gio.InputStream
    downloadFileToStreamAsync(file: SkydriveFile, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    downloadFileToStreamFinish(res: Gio.AsyncResult): Gio.InputStream
    getAuthorizer(): Authorizer
    listFolder(folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): SkydriveEntry[]
    listFolderId(folderId: string, cancellable?: Gio.Cancellable | null): SkydriveEntry[]
    listFolderIdAsync(folderId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    listFolderIdFinish(res: Gio.AsyncResult): SkydriveEntry[]
    queryInfoFromId(id: string, cancellable?: Gio.Cancellable | null): SkydriveEntry
    queryInfoFromIdAsync(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryInfoFromIdFinish(res: Gio.AsyncResult): SkydriveEntry
    setAuthorizer(authorizer: Authorizer): void
    thumbnailFileIdToStream(fileId: string, size: ThumbnailSize, cancellable?: Gio.Cancellable | null): Gio.InputStream
    uploadPathToFolder(path: string, folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): boolean
    uploadPathToFolderId(path: string, folderId: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Skydrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: Skydrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: Skydrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Skydrive_ConstructProps)
    _init (config?: Skydrive_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer: Authorizer): Skydrive
    static $gtype: GObject.Type
}
export interface SkydriveEntry_ConstructProps extends GObject.Object_ConstructProps {
    json?: Json.Node
}
class SkydriveEntry {
    /* Properties of Zpj-0.0.Zpj.SkydriveEntry */
    readonly createdTime: GLib.DateTime
    readonly description: string
    readonly fromId: string
    readonly fromName: string
    readonly id: string
    readonly name: string
    readonly parentId: string
    readonly type: SkydriveEntryType
    readonly updatedTime: GLib.DateTime
    /* Fields of Zpj-0.0.Zpj.SkydriveEntry */
    parentInstance: GObject.Object
    priv: SkydriveEntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zpj-0.0.Zpj.SkydriveEntry */
    getCreatedTime(): GLib.DateTime
    getDescription(): string
    getFromId(): string
    getFromName(): string
    getId(): string
    getName(): string
    getParentId(): string
    getUpdatedTime(): GLib.DateTime
    isFolder(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::created-time", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-name", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SkydriveEntry_ConstructProps)
    _init (config?: SkydriveEntry_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SkydriveFile_ConstructProps extends SkydriveEntry_ConstructProps {
}
class SkydriveFile {
    /* Properties of Zpj-0.0.Zpj.SkydriveFile */
    readonly size: number
    /* Properties of Zpj-0.0.Zpj.SkydriveEntry */
    readonly createdTime: GLib.DateTime
    readonly description: string
    readonly fromId: string
    readonly fromName: string
    readonly id: string
    readonly name: string
    readonly parentId: string
    readonly type: SkydriveEntryType
    readonly updatedTime: GLib.DateTime
    /* Fields of Zpj-0.0.Zpj.SkydriveFile */
    parentInstance: SkydriveEntry
    priv: SkydriveFilePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zpj-0.0.Zpj.SkydriveFile */
    getSize(): number
    /* Methods of Zpj-0.0.Zpj.SkydriveEntry */
    getCreatedTime(): GLib.DateTime
    getDescription(): string
    getFromId(): string
    getFromName(): string
    getId(): string
    getName(): string
    getParentId(): string
    getUpdatedTime(): GLib.DateTime
    isFolder(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::created-time", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-name", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SkydriveFile_ConstructProps)
    _init (config?: SkydriveFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node: Json.Node): SkydriveFile
    static $gtype: GObject.Type
}
export interface SkydriveFolder_ConstructProps extends SkydriveEntry_ConstructProps {
}
class SkydriveFolder {
    /* Properties of Zpj-0.0.Zpj.SkydriveEntry */
    readonly createdTime: GLib.DateTime
    readonly description: string
    readonly fromId: string
    readonly fromName: string
    readonly id: string
    readonly name: string
    readonly parentId: string
    readonly type: SkydriveEntryType
    readonly updatedTime: GLib.DateTime
    /* Fields of Zpj-0.0.Zpj.SkydriveFolder */
    parentInstance: SkydriveEntry
    /* Fields of Zpj-0.0.Zpj.SkydriveEntry */
    priv: SkydriveEntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zpj-0.0.Zpj.SkydriveEntry */
    getCreatedTime(): GLib.DateTime
    getDescription(): string
    getFromId(): string
    getFromName(): string
    getId(): string
    getName(): string
    getParentId(): string
    getUpdatedTime(): GLib.DateTime
    isFolder(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::created-time", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-name", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SkydriveFolder_ConstructProps)
    _init (config?: SkydriveFolder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node: Json.Node): SkydriveFolder
    static $gtype: GObject.Type
}
export interface SkydrivePhoto_ConstructProps extends SkydriveFile_ConstructProps {
}
class SkydrivePhoto {
    /* Properties of Zpj-0.0.Zpj.SkydriveFile */
    readonly size: number
    /* Properties of Zpj-0.0.Zpj.SkydriveEntry */
    readonly createdTime: GLib.DateTime
    readonly description: string
    readonly fromId: string
    readonly fromName: string
    readonly id: string
    readonly name: string
    readonly parentId: string
    readonly type: SkydriveEntryType
    readonly updatedTime: GLib.DateTime
    /* Fields of Zpj-0.0.Zpj.SkydrivePhoto */
    parentInstance: SkydriveFile
    /* Fields of Zpj-0.0.Zpj.SkydriveFile */
    priv: SkydriveFilePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zpj-0.0.Zpj.SkydriveFile */
    getSize(): number
    /* Methods of Zpj-0.0.Zpj.SkydriveEntry */
    getCreatedTime(): GLib.DateTime
    getDescription(): string
    getFromId(): string
    getFromName(): string
    getId(): string
    getName(): string
    getParentId(): string
    getUpdatedTime(): GLib.DateTime
    isFolder(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::created-time", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-name", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SkydrivePhoto_ConstructProps)
    _init (config?: SkydrivePhoto_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node: Json.Node): SkydrivePhoto
    static $gtype: GObject.Type
}
export interface SkydriveVideo_ConstructProps extends SkydriveFile_ConstructProps {
}
class SkydriveVideo {
    /* Properties of Zpj-0.0.Zpj.SkydriveVideo */
    readonly bitrate: number
    readonly duration: number
    readonly height: number
    readonly width: number
    /* Properties of Zpj-0.0.Zpj.SkydriveFile */
    readonly size: number
    /* Properties of Zpj-0.0.Zpj.SkydriveEntry */
    readonly createdTime: GLib.DateTime
    readonly description: string
    readonly fromId: string
    readonly fromName: string
    readonly id: string
    readonly name: string
    readonly parentId: string
    readonly type: SkydriveEntryType
    readonly updatedTime: GLib.DateTime
    /* Fields of Zpj-0.0.Zpj.SkydriveVideo */
    parentInstance: SkydriveFile
    priv: SkydriveVideoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Zpj-0.0.Zpj.SkydriveVideo */
    getBitrate(): number
    getDuration(): number
    getHeight(): number
    getWidth(): number
    /* Methods of Zpj-0.0.Zpj.SkydriveFile */
    getSize(): number
    /* Methods of Zpj-0.0.Zpj.SkydriveEntry */
    getCreatedTime(): GLib.DateTime
    getDescription(): string
    getFromId(): string
    getFromName(): string
    getId(): string
    getName(): string
    getParentId(): string
    getUpdatedTime(): GLib.DateTime
    isFolder(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bitrate", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::created-time", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-name", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SkydriveVideo_ConstructProps)
    _init (config?: SkydriveVideo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node: Json.Node): SkydriveVideo
    static $gtype: GObject.Type
}
abstract class AuthorizationDomainClass {
    /* Fields of Zpj-0.0.Zpj.AuthorizationDomainClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class AuthorizationDomainPrivate {
    static name: string
}
abstract class AuthorizerInterface {
    /* Fields of Zpj-0.0.Zpj.AuthorizerInterface */
    parentIface: GObject.TypeInterface
    isAuthorizedForDomain: (iface: Authorizer, domain: AuthorizationDomain) => boolean
    processCall: (iface: Authorizer, domain: AuthorizationDomain | null, call: Rest.ProxyCall) => void
    processMessage: (iface: Authorizer, domain: AuthorizationDomain | null, message: Soup.Message) => void
    refreshAuthorization: (iface: Authorizer, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
abstract class GoaAuthorizerClass {
    /* Fields of Zpj-0.0.Zpj.GoaAuthorizerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class GoaAuthorizerPrivate {
    static name: string
}
abstract class SkydriveClass {
    /* Fields of Zpj-0.0.Zpj.SkydriveClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class SkydriveEntryClass {
    /* Fields of Zpj-0.0.Zpj.SkydriveEntryClass */
    parentClass: GObject.ObjectClass
    parseJsonNode: (self: SkydriveEntry, node: Json.Node) => void
    static name: string
}
class SkydriveEntryPrivate {
    static name: string
}
abstract class SkydriveFileClass {
    /* Fields of Zpj-0.0.Zpj.SkydriveFileClass */
    parentClass: SkydriveEntryClass
    static name: string
}
class SkydriveFilePrivate {
    static name: string
}
abstract class SkydriveFolderClass {
    /* Fields of Zpj-0.0.Zpj.SkydriveFolderClass */
    parentClass: SkydriveEntryClass
    static name: string
}
abstract class SkydrivePhotoClass {
    /* Fields of Zpj-0.0.Zpj.SkydrivePhotoClass */
    parentClass: SkydriveFileClass
    static name: string
}
class SkydrivePrivate {
    static name: string
}
abstract class SkydriveVideoClass {
    /* Fields of Zpj-0.0.Zpj.SkydriveVideoClass */
    parentClass: SkydriveFileClass
    static name: string
}
class SkydriveVideoPrivate {
    static name: string
}
}
export default Zpj