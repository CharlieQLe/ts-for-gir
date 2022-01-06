/**
 * Atspi-2.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { DBus } from './DBus-1.0';

declare namespace Atspi {

enum CollectionMatchType {
    INVALID,
    ALL,
    ANY,
    NONE,
    EMPTY,
    LAST_DEFINED,
}
enum CollectionSortOrder {
    INVALID,
    CANONICAL,
    FLOW,
    TAB,
    REVERSE_CANONICAL,
    REVERSE_FLOW,
    REVERSE_TAB,
    LAST_DEFINED,
}
enum CollectionTreeTraversalType {
    RESTRICT_CHILDREN,
    RESTRICT_SIBLING,
    INORDER,
    LAST_DEFINED,
}
enum ComponentLayer {
    INVALID,
    BACKGROUND,
    CANVAS,
    WIDGET,
    MDI,
    POPUP,
    OVERLAY,
    WINDOW,
    LAST_DEFINED,
}
enum CoordType {
    SCREEN,
    WINDOW,
    PARENT,
}
enum EventType {
    KEY_PRESSED_EVENT,
    KEY_RELEASED_EVENT,
    BUTTON_PRESSED_EVENT,
    BUTTON_RELEASED_EVENT,
}
enum KeyEventType {
    PRESSED,
    RELEASED,
}
enum KeySynthType {
    PRESS,
    RELEASE,
    PRESSRELEASE,
    SYM,
    STRING,
    LOCKMODIFIERS,
    UNLOCKMODIFIERS,
}
enum LocaleType {
    MESSAGES,
    COLLATE,
    CTYPE,
    MONETARY,
    NUMERIC,
    TIME,
}
enum ModifierType {
    SHIFT,
    SHIFTLOCK,
    CONTROL,
    ALT,
    META,
    META2,
    META3,
    NUMLOCK,
}
enum RelationType {
    NULL,
    LABEL_FOR,
    LABELLED_BY,
    CONTROLLER_FOR,
    CONTROLLED_BY,
    MEMBER_OF,
    TOOLTIP_FOR,
    NODE_CHILD_OF,
    NODE_PARENT_OF,
    EXTENDED,
    FLOWS_TO,
    FLOWS_FROM,
    SUBWINDOW_OF,
    EMBEDS,
    EMBEDDED_BY,
    POPUP_FOR,
    PARENT_WINDOW_OF,
    DESCRIPTION_FOR,
    DESCRIBED_BY,
    DETAILS,
    DETAILS_FOR,
    ERROR_MESSAGE,
    ERROR_FOR,
    LAST_DEFINED,
}
enum Role {
    INVALID,
    ACCELERATOR_LABEL,
    ALERT,
    ANIMATION,
    ARROW,
    CALENDAR,
    CANVAS,
    CHECK_BOX,
    CHECK_MENU_ITEM,
    COLOR_CHOOSER,
    COLUMN_HEADER,
    COMBO_BOX,
    DATE_EDITOR,
    DESKTOP_ICON,
    DESKTOP_FRAME,
    DIAL,
    DIALOG,
    DIRECTORY_PANE,
    DRAWING_AREA,
    FILE_CHOOSER,
    FILLER,
    FOCUS_TRAVERSABLE,
    FONT_CHOOSER,
    FRAME,
    GLASS_PANE,
    HTML_CONTAINER,
    ICON,
    IMAGE,
    INTERNAL_FRAME,
    LABEL,
    LAYERED_PANE,
    LIST,
    LIST_ITEM,
    MENU,
    MENU_BAR,
    MENU_ITEM,
    OPTION_PANE,
    PAGE_TAB,
    PAGE_TAB_LIST,
    PANEL,
    PASSWORD_TEXT,
    POPUP_MENU,
    PROGRESS_BAR,
    PUSH_BUTTON,
    RADIO_BUTTON,
    RADIO_MENU_ITEM,
    ROOT_PANE,
    ROW_HEADER,
    SCROLL_BAR,
    SCROLL_PANE,
    SEPARATOR,
    SLIDER,
    SPIN_BUTTON,
    SPLIT_PANE,
    STATUS_BAR,
    TABLE,
    TABLE_CELL,
    TABLE_COLUMN_HEADER,
    TABLE_ROW_HEADER,
    TEAROFF_MENU_ITEM,
    TERMINAL,
    TEXT,
    TOGGLE_BUTTON,
    TOOL_BAR,
    TOOL_TIP,
    TREE,
    TREE_TABLE,
    UNKNOWN,
    VIEWPORT,
    WINDOW,
    EXTENDED,
    HEADER,
    FOOTER,
    PARAGRAPH,
    RULER,
    APPLICATION,
    AUTOCOMPLETE,
    EDITBAR,
    EMBEDDED,
    ENTRY,
    CHART,
    CAPTION,
    DOCUMENT_FRAME,
    HEADING,
    PAGE,
    SECTION,
    REDUNDANT_OBJECT,
    FORM,
    LINK,
    INPUT_METHOD_WINDOW,
    TABLE_ROW,
    TREE_ITEM,
    DOCUMENT_SPREADSHEET,
    DOCUMENT_PRESENTATION,
    DOCUMENT_TEXT,
    DOCUMENT_WEB,
    DOCUMENT_EMAIL,
    COMMENT,
    LIST_BOX,
    GROUPING,
    IMAGE_MAP,
    NOTIFICATION,
    INFO_BAR,
    LEVEL_BAR,
    TITLE_BAR,
    BLOCK_QUOTE,
    AUDIO,
    VIDEO,
    DEFINITION,
    ARTICLE,
    LANDMARK,
    LOG,
    MARQUEE,
    MATH,
    RATING,
    TIMER,
    STATIC,
    MATH_FRACTION,
    MATH_ROOT,
    SUBSCRIPT,
    SUPERSCRIPT,
    DESCRIPTION_LIST,
    DESCRIPTION_TERM,
    DESCRIPTION_VALUE,
    FOOTNOTE,
    CONTENT_DELETION,
    CONTENT_INSERTION,
    MARK,
    SUGGESTION,
    LAST_DEFINED,
}
enum ScrollType {
    TOP_LEFT,
    BOTTOM_RIGHT,
    TOP_EDGE,
    BOTTOM_EDGE,
    LEFT_EDGE,
    RIGHT_EDGE,
    ANYWHERE,
}
enum StateType {
    INVALID,
    ACTIVE,
    ARMED,
    BUSY,
    CHECKED,
    COLLAPSED,
    DEFUNCT,
    EDITABLE,
    ENABLED,
    EXPANDABLE,
    EXPANDED,
    FOCUSABLE,
    FOCUSED,
    HAS_TOOLTIP,
    HORIZONTAL,
    ICONIFIED,
    MODAL,
    MULTI_LINE,
    MULTISELECTABLE,
    OPAQUE,
    PRESSED,
    RESIZABLE,
    SELECTABLE,
    SELECTED,
    SENSITIVE,
    SHOWING,
    SINGLE_LINE,
    STALE,
    TRANSIENT,
    VERTICAL,
    VISIBLE,
    MANAGES_DESCENDANTS,
    INDETERMINATE,
    REQUIRED,
    TRUNCATED,
    ANIMATED,
    INVALID_ENTRY,
    SUPPORTS_AUTOCOMPLETION,
    SELECTABLE_TEXT,
    IS_DEFAULT,
    VISITED,
    CHECKABLE,
    HAS_POPUP,
    READ_ONLY,
    LAST_DEFINED,
}
enum TextBoundaryType {
    CHAR,
    WORD_START,
    WORD_END,
    SENTENCE_START,
    SENTENCE_END,
    LINE_START,
    LINE_END,
}
enum TextClipType {
    NONE,
    MIN,
    MAX,
    BOTH,
}
enum TextGranularity {
    CHAR,
    WORD,
    SENTENCE,
    LINE,
    PARAGRAPH,
}
enum Cache {
    NONE,
    PARENT,
    CHILDREN,
    NAME,
    DESCRIPTION,
    STATES,
    ROLE,
    INTERFACES,
    ATTRIBUTES,
    ALL,
    DEFAULT,
    UNDEFINED,
}
enum KeyListenerSyncType {
    NOSYNC,
    SYNCHRONOUS,
    CANCONSUME,
    ALL_WINDOWS,
}
export const COMPONENTLAYER_COUNT: number
export const COORD_TYPE_COUNT: number
export const DBUS_INTERFACE_ACCESSIBLE: string
export const DBUS_INTERFACE_ACTION: string
export const DBUS_INTERFACE_APPLICATION: string
export const DBUS_INTERFACE_CACHE: string
export const DBUS_INTERFACE_COLLECTION: string
export const DBUS_INTERFACE_COMPONENT: string
export const DBUS_INTERFACE_DEC: string
export const DBUS_INTERFACE_DEVICE_EVENT_LISTENER: string
export const DBUS_INTERFACE_DOCUMENT: string
export const DBUS_INTERFACE_EDITABLE_TEXT: string
export const DBUS_INTERFACE_EVENT_KEYBOARD: string
export const DBUS_INTERFACE_EVENT_MOUSE: string
export const DBUS_INTERFACE_EVENT_OBJECT: string
export const DBUS_INTERFACE_EVENT_SCREEN_READER: string
export const DBUS_INTERFACE_HYPERLINK: string
export const DBUS_INTERFACE_HYPERTEXT: string
export const DBUS_INTERFACE_IMAGE: string
export const DBUS_INTERFACE_REGISTRY: string
export const DBUS_INTERFACE_SELECTION: string
export const DBUS_INTERFACE_SOCKET: string
export const DBUS_INTERFACE_TABLE: string
export const DBUS_INTERFACE_TABLE_CELL: string
export const DBUS_INTERFACE_TEXT: string
export const DBUS_INTERFACE_VALUE: string
export const DBUS_NAME_REGISTRY: string
export const DBUS_PATH_DEC: string
export const DBUS_PATH_NULL: string
export const DBUS_PATH_REGISTRY: string
export const DBUS_PATH_ROOT: string
export const DBUS_PATH_SCREEN_READER: string
export const EVENTTYPE_COUNT: number
export const KEYEVENTTYPE_COUNT: number
export const KEYSYNTHTYPE_COUNT: number
export const LOCALE_TYPE_COUNT: number
export const MATCHTYPES_COUNT: number
export const MODIFIERTYPE_COUNT: number
export const RELATIONTYPE_COUNT: number
export const ROLE_COUNT: number
export const SCROLLTYPE_COUNT: number
export const SORTORDER_COUNT: number
export const STATETYPE_COUNT: number
export const TEXT_BOUNDARY_TYPE_COUNT: number
export const TEXT_CLIP_TYPE_COUNT: number
export const TREETRAVERSALTYPE_COUNT: number
function deregisterDeviceEventListener(listener: DeviceListener, filter?: object | null): boolean
function deregisterKeystrokeListener(listener: DeviceListener, keySet: KeyDefinition[] | null, modmask: KeyMaskType, eventTypes: KeyEventMask): boolean
function eventMain(): void
function eventQuit(): void
function exit(): number
function generateKeyboardEvent(keyval: number, keystring: string | null, synthType: KeySynthType): boolean
function generateMouseEvent(x: number, y: number, name: string): boolean
function getDesktop(i: number): Accessible
function getDesktopCount(): number
function getDesktopList(): Accessible[]
function init(): number
function isInitialized(): boolean
function registerDeviceEventListener(listener: DeviceListener, eventTypes: DeviceEventMask, filter?: object | null): boolean
function registerKeystrokeListener(listener: DeviceListener, keySet: KeyDefinition[] | null, modmask: KeyMaskType, eventTypes: KeyEventMask, syncType: KeyListenerSyncType): boolean
function roleGetName(role: Role): string
function setMainContext(cnx: GLib.MainContext): void
function setReferenceWindow(accessible: Accessible): void
function setTimeout(val: number, startupTime: number): void
interface DeviceListenerCB {
    (stroke: DeviceEvent): boolean
}
interface DeviceListenerSimpleCB {
    (stroke: DeviceEvent): boolean
}
interface EventListenerCB {
    (event: Event): void
}
interface EventListenerSimpleCB {
    (event: Event): void
}
interface KeyCallback {
    (device: Device, pressed: boolean, keycode: number, keysym: number, modifiers: number, keystring: string): void
}
class Action {
    /* Methods of Atspi-2.0.Atspi.Action */
    doAction(i: number): boolean
    getActionDescription(i: number): string
    getKeyBinding(i: number): string
    getLocalizedName(i: number): string
    getNActions(): number
    getActionName(i: number): string
    static name: string
}
class Collection {
    /* Methods of Atspi-2.0.Atspi.Collection */
    getActiveDescendant(): Accessible
    getMatches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[]
    getMatchesFrom(currentObject: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, count: number, traverse: boolean): Accessible[]
    getMatchesTo(currentObject: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, limitScope: boolean, count: number, traverse: boolean): Accessible[]
    isAncestorOf(test: Accessible): boolean
    static name: string
}
class Component {
    /* Methods of Atspi-2.0.Atspi.Component */
    contains(x: number, y: number, ctype: CoordType): boolean
    getAccessibleAtPoint(x: number, y: number, ctype: CoordType): Accessible | null
    getAlpha(): number
    getExtents(ctype: CoordType): Rect
    getLayer(): ComponentLayer
    getMdiZOrder(): number
    getPosition(ctype: CoordType): Point
    getSize(): Point
    grabFocus(): boolean
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean
    setPosition(x: number, y: number, ctype: CoordType): boolean
    setSize(width: number, height: number): boolean
    static name: string
}
class Document {
    /* Methods of Atspi-2.0.Atspi.Document */
    getDocumentAttributeValue(attribute: string): string
    getDocumentAttributes(): GLib.HashTable
    getCurrentPageNumber(): number
    getLocale(): string
    getPageCount(): number
    static name: string
}
class EditableText {
    /* Methods of Atspi-2.0.Atspi.EditableText */
    copyText(startPos: number, endPos: number): boolean
    cutText(startPos: number, endPos: number): boolean
    deleteText(startPos: number, endPos: number): boolean
    insertText(position: number, text: string, length: number): boolean
    pasteText(position: number): boolean
    setTextContents(newContents: string): boolean
    static name: string
}
class Hypertext {
    /* Methods of Atspi-2.0.Atspi.Hypertext */
    getLink(linkIndex: number): Hyperlink | null
    getLinkIndex(characterOffset: number): number
    getNLinks(): number
    static name: string
}
class Image {
    /* Methods of Atspi-2.0.Atspi.Image */
    getImageDescription(): string
    getImageExtents(ctype: CoordType): Rect
    getImageLocale(): string
    getImagePosition(ctype: CoordType): Point
    getImageSize(): Point
    static name: string
}
class Selection {
    /* Methods of Atspi-2.0.Atspi.Selection */
    clearSelection(): boolean
    deselectChild(childIndex: number): boolean
    deselectSelectedChild(selectedChildIndex: number): boolean
    getNSelectedChildren(): number
    getSelectedChild(selectedChildIndex: number): Accessible
    isChildSelected(childIndex: number): boolean
    selectAll(): boolean
    selectChild(childIndex: number): boolean
    static name: string
}
class Table {
    /* Methods of Atspi-2.0.Atspi.Table */
    addColumnSelection(column: number): boolean
    addRowSelection(row: number): boolean
    getAccessibleAt(row: number, column: number): Accessible
    getCaption(): Accessible
    getColumnAtIndex(index: number): number
    getColumnDescription(column: number): string
    getColumnExtentAt(row: number, column: number): number
    getColumnHeader(column: number): Accessible
    getIndexAt(row: number, column: number): number
    getNColumns(): number
    getNRows(): number
    getNSelectedColumns(): number
    getNSelectedRows(): number
    getRowAtIndex(index: number): number
    getRowColumnExtentsAtIndex(index: number): { returnType: boolean, row: number, col: number, rowExtents: number, colExtents: number, isSelected: boolean }
    getRowDescription(row: number): string
    getRowExtentAt(row: number, column: number): number
    getRowHeader(row: number): Accessible
    getSelectedColumns(): number[]
    getSelectedRows(): number[]
    getSummary(): Accessible
    isColumnSelected(column: number): boolean
    isRowSelected(row: number): boolean
    isSelected(row: number, column: number): boolean
    removeColumnSelection(column: number): boolean
    removeRowSelection(row: number): boolean
    static name: string
}
class TableCell {
    /* Methods of Atspi-2.0.Atspi.TableCell */
    getColumnHeaderCells(): Accessible[]
    getColumnIndex(): number
    getColumnSpan(): number
    getPosition(): { returnType: number, row: number, column: number }
    getRowColumnSpan(): { row: number, column: number, rowSpan: number, columnSpan: number }
    getRowHeaderCells(): Accessible[]
    getRowSpan(): number
    getTable(): Accessible
    static name: string
}
class Text {
    /* Methods of Atspi-2.0.Atspi.Text */
    addSelection(startOffset: number, endOffset: number): boolean
    getAttributeRun(offset: number, includeDefaults: boolean): { returnType: GLib.HashTable, startOffset: number, endOffset: number }
    getTextAttributeValue(offset: number, attributeName: string): string | null
    getTextAttributes(offset: number): { returnType: GLib.HashTable, startOffset: number, endOffset: number }
    getBoundedRanges(x: number, y: number, width: number, height: number, type: CoordType, clipTypeX: TextClipType, clipTypeY: TextClipType): TextRange[]
    getCaretOffset(): number
    getCharacterAtOffset(offset: number): number
    getCharacterCount(): number
    getCharacterExtents(offset: number, type: CoordType): Rect
    getDefaultAttributes(): GLib.HashTable
    getNSelections(): number
    getOffsetAtPoint(x: number, y: number, type: CoordType): number
    getRangeExtents(startOffset: number, endOffset: number, type: CoordType): Rect
    getSelection(selectionNum: number): Range
    getStringAtOffset(offset: number, granularity: TextGranularity): TextRange
    getText(startOffset: number, endOffset: number): string
    getTextAfterOffset(offset: number, type: TextBoundaryType): TextRange
    getTextAtOffset(offset: number, type: TextBoundaryType): TextRange
    getTextBeforeOffset(offset: number, type: TextBoundaryType): TextRange
    removeSelection(selectionNum: number): boolean
    scrollSubstringTo(startOffset: number, endOffset: number, type: ScrollType): boolean
    scrollSubstringToPoint(startOffset: number, endOffset: number, coords: CoordType, x: number, y: number): boolean
    setCaretOffset(newOffset: number): boolean
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    static name: string
}
class Value {
    /* Methods of Atspi-2.0.Atspi.Value */
    getCurrentValue(): number
    getMaximumValue(): number
    getMinimumIncrement(): number
    getMinimumValue(): number
    setCurrentValue(newValue: number): boolean
    static name: string
}
export interface Accessible_ConstructProps extends Object_ConstructProps {
}
class Accessible {
    /* Fields of Atspi-2.0.Atspi.Accessible */
    parent: Object
    accessibleParent: Accessible
    children: object[]
    role: Role
    interfaces: number
    name: string
    description: string
    states: StateSet
    attributes: GLib.HashTable
    cachedProperties: number
    priv: AccessiblePrivate
    /* Fields of Atspi-2.0.Atspi.Object */
    app: Application
    path: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.Accessible */
    clearCache(): void
    getAccessibleId(): string
    getActionIface(): Action
    getApplication(): Accessible
    getAtspiVersion(): string
    getAttributes(): GLib.HashTable
    getAttributesAsArray(): string[]
    getChildAtIndex(childIndex: number): Accessible
    getChildCount(): number
    getCollectionIface(): Collection
    getComponentIface(): Component
    getDescription(): string
    getDocumentIface(): Document
    getEditableTextIface(): EditableText
    getHyperlink(): Hyperlink
    getHypertextIface(): Hypertext
    getId(): number
    getImageIface(): Image
    getIndexInParent(): number
    getInterfaces(): string[]
    getLocalizedRoleName(): string
    getName(): string
    getObjectLocale(): string
    getParent(): Accessible | null
    getProcessId(): number
    getRelationSet(): Relation[]
    getRole(): Role
    getRoleName(): string
    getSelectionIface(): Selection
    getStateSet(): StateSet
    getTableIface(): Table
    getTableCell(): TableCell
    getTextIface(): Text
    getToolkitName(): string
    getToolkitVersion(): string
    getValueIface(): Value
    setCacheMask(mask: Cache): void
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
    /* Methods of Atspi-2.0.Atspi.Action */
    doAction(i: number): boolean
    getActionDescription(i: number): string
    getKeyBinding(i: number): string
    getLocalizedName(i: number): string
    getNActions(): number
    getActionName(i: number): string
    /* Methods of Atspi-2.0.Atspi.Collection */
    getActiveDescendant(): Accessible
    getMatches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[]
    getMatchesFrom(currentObject: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, count: number, traverse: boolean): Accessible[]
    getMatchesTo(currentObject: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, limitScope: boolean, count: number, traverse: boolean): Accessible[]
    isAncestorOf(test: Accessible): boolean
    /* Methods of Atspi-2.0.Atspi.Component */
    contains(x: number, y: number, ctype: CoordType): boolean
    getAccessibleAtPoint(x: number, y: number, ctype: CoordType): Accessible | null
    getAlpha(): number
    getExtents(ctype: CoordType): Rect
    getLayer(): ComponentLayer
    getMdiZOrder(): number
    getPosition(ctype: CoordType): Point
    getSize(): Point
    grabFocus(): boolean
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean
    setPosition(x: number, y: number, ctype: CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Methods of Atspi-2.0.Atspi.Document */
    getDocumentAttributeValue(attribute: string): string
    getDocumentAttributes(): GLib.HashTable
    getCurrentPageNumber(): number
    getLocale(): string
    getPageCount(): number
    /* Methods of Atspi-2.0.Atspi.EditableText */
    copyText(startPos: number, endPos: number): boolean
    cutText(startPos: number, endPos: number): boolean
    deleteText(startPos: number, endPos: number): boolean
    insertText(position: number, text: string, length: number): boolean
    pasteText(position: number): boolean
    setTextContents(newContents: string): boolean
    /* Methods of Atspi-2.0.Atspi.Hypertext */
    getLink(linkIndex: number): Hyperlink | null
    getLinkIndex(characterOffset: number): number
    getNLinks(): number
    /* Methods of Atspi-2.0.Atspi.Image */
    getImageDescription(): string
    getImageExtents(ctype: CoordType): Rect
    getImageLocale(): string
    getImagePosition(ctype: CoordType): Point
    getImageSize(): Point
    /* Methods of Atspi-2.0.Atspi.Selection */
    clearSelection(): boolean
    deselectChild(childIndex: number): boolean
    deselectSelectedChild(selectedChildIndex: number): boolean
    getNSelectedChildren(): number
    getSelectedChild(selectedChildIndex: number): Accessible
    isChildSelected(childIndex: number): boolean
    selectAll(): boolean
    selectChild(childIndex: number): boolean
    /* Methods of Atspi-2.0.Atspi.Table */
    addColumnSelection(column: number): boolean
    addRowSelection(row: number): boolean
    getAccessibleAt(row: number, column: number): Accessible
    getCaption(): Accessible
    getColumnAtIndex(index: number): number
    getColumnDescription(column: number): string
    getColumnExtentAt(row: number, column: number): number
    getColumnHeader(column: number): Accessible
    getIndexAt(row: number, column: number): number
    getNColumns(): number
    getNRows(): number
    getNSelectedColumns(): number
    getNSelectedRows(): number
    getRowAtIndex(index: number): number
    getRowColumnExtentsAtIndex(index: number): { returnType: boolean, row: number, col: number, rowExtents: number, colExtents: number, isSelected: boolean }
    getRowDescription(row: number): string
    getRowExtentAt(row: number, column: number): number
    getRowHeader(row: number): Accessible
    getSelectedColumns(): number[]
    getSelectedRows(): number[]
    getSummary(): Accessible
    isColumnSelected(column: number): boolean
    isRowSelected(row: number): boolean
    isSelected(row: number, column: number): boolean
    removeColumnSelection(column: number): boolean
    removeRowSelection(row: number): boolean
    /* Methods of Atspi-2.0.Atspi.TableCell */
    getColumnHeaderCells(): Accessible[]
    getColumnIndex(): number
    getColumnSpan(): number
    getPosition(): { returnType: number, row: number, column: number }
    getRowColumnSpan(): { row: number, column: number, rowSpan: number, columnSpan: number }
    getRowHeaderCells(): Accessible[]
    getRowSpan(): number
    getTable(): Accessible
    /* Methods of Atspi-2.0.Atspi.Text */
    addSelection(startOffset: number, endOffset: number): boolean
    getAttributeRun(offset: number, includeDefaults: boolean): { returnType: GLib.HashTable, startOffset: number, endOffset: number }
    getTextAttributeValue(offset: number, attributeName: string): string | null
    getTextAttributes(offset: number): { returnType: GLib.HashTable, startOffset: number, endOffset: number }
    getBoundedRanges(x: number, y: number, width: number, height: number, type: CoordType, clipTypeX: TextClipType, clipTypeY: TextClipType): TextRange[]
    getCaretOffset(): number
    getCharacterAtOffset(offset: number): number
    getCharacterCount(): number
    getCharacterExtents(offset: number, type: CoordType): Rect
    getDefaultAttributes(): GLib.HashTable
    getNSelections(): number
    getOffsetAtPoint(x: number, y: number, type: CoordType): number
    getRangeExtents(startOffset: number, endOffset: number, type: CoordType): Rect
    getSelection(selectionNum: number): Range
    getStringAtOffset(offset: number, granularity: TextGranularity): TextRange
    getText(startOffset: number, endOffset: number): string
    getTextAfterOffset(offset: number, type: TextBoundaryType): TextRange
    getTextAtOffset(offset: number, type: TextBoundaryType): TextRange
    getTextBeforeOffset(offset: number, type: TextBoundaryType): TextRange
    removeSelection(selectionNum: number): boolean
    scrollSubstringTo(startOffset: number, endOffset: number, type: ScrollType): boolean
    scrollSubstringToPoint(startOffset: number, endOffset: number, coords: CoordType, x: number, y: number): boolean
    setCaretOffset(newOffset: number): boolean
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    /* Methods of Atspi-2.0.Atspi.Value */
    getCurrentValue(): number
    getMaximumValue(): number
    getMinimumIncrement(): number
    getMinimumValue(): number
    setCurrentValue(newValue: number): boolean
    /* Signals of Atspi-2.0.Atspi.Accessible */
    connect(sigName: "mode-changed", callback: (($obj: Accessible, arg1: number, why: string) => void)): number
    on(sigName: "mode-changed", callback: (arg1: number, why: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mode-changed", callback: (arg1: number, why: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mode-changed", callback: (arg1: number, why: string) => void): NodeJS.EventEmitter
    emit(sigName: "mode-changed", arg1: number, why: string): void
    connect(sigName: "region-changed", callback: (($obj: Accessible, arg1: number, arg2: number) => void)): number
    on(sigName: "region-changed", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "region-changed", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "region-changed", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "region-changed", arg1: number, arg2: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Accessible, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Accessible_ConstructProps)
    _init (config?: Accessible_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Application_ConstructProps extends GObject.Object_ConstructProps {
}
class Application {
    /* Fields of Atspi-2.0.Atspi.Application */
    parent: GObject.Object
    hash: GLib.HashTable
    busName: string
    bus: DBus.Connection
    root: object
    cache: Cache
    toolkitName: string
    toolkitVersion: string
    atspiVersion: string
    timeAdded: object
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
}
class Device {
    /* Fields of Atspi-2.0.Atspi.Device */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.Device */
    addKeyGrab(kd: KeyDefinition, callback: KeyCallback | null): number
    addKeyWatcher(): void
    getGrabById(id: number): KeyDefinition
    getLockedModifiers(): number
    getModifier(keycode: number): number
    grabKeyboard(): boolean
    mapModifier(keycode: number): number
    notifyKey(pressed: boolean, keycode: number, keysym: number, state: number, text: string): boolean
    removeKeyGrab(id: number): void
    ungrabKeyboard(): void
    unmapModifier(keycode: number): void
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
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Device
    static $gtype: GObject.Type
}
export interface DeviceLegacy_ConstructProps extends Device_ConstructProps {
}
class DeviceLegacy {
    /* Fields of Atspi-2.0.Atspi.DeviceLegacy */
    parent: Device
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.Device */
    addKeyGrab(kd: KeyDefinition, callback: KeyCallback | null): number
    addKeyWatcher(): void
    getGrabById(id: number): KeyDefinition
    getLockedModifiers(): number
    getModifier(keycode: number): number
    grabKeyboard(): boolean
    mapModifier(keycode: number): number
    notifyKey(pressed: boolean, keycode: number, keysym: number, state: number, text: string): boolean
    removeKeyGrab(id: number): void
    ungrabKeyboard(): void
    unmapModifier(keycode: number): void
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
    connect(sigName: "notify", callback: (($obj: DeviceLegacy, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DeviceLegacy_ConstructProps)
    _init (config?: DeviceLegacy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceLegacy
    static $gtype: GObject.Type
}
export interface DeviceListener_ConstructProps extends GObject.Object_ConstructProps {
}
class DeviceListener {
    /* Fields of Atspi-2.0.Atspi.DeviceListener */
    parent: GObject.Object
    id: number
    callbacks: object[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.DeviceListener */
    addCallback(callback: DeviceListenerCB): void
    removeCallback(callback: DeviceListenerCB): void
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
    connect(sigName: "notify", callback: (($obj: DeviceListener, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DeviceListener_ConstructProps)
    _init (config?: DeviceListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(callback: DeviceListenerCB): DeviceListener
    static $gtype: GObject.Type
}
export interface DeviceX11_ConstructProps extends Device_ConstructProps {
}
class DeviceX11 {
    /* Fields of Atspi-2.0.Atspi.DeviceX11 */
    parent: Device
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.Device */
    addKeyGrab(kd: KeyDefinition, callback: KeyCallback | null): number
    addKeyWatcher(): void
    getGrabById(id: number): KeyDefinition
    getLockedModifiers(): number
    getModifier(keycode: number): number
    grabKeyboard(): boolean
    mapModifier(keycode: number): number
    notifyKey(pressed: boolean, keycode: number, keysym: number, state: number, text: string): boolean
    removeKeyGrab(id: number): void
    ungrabKeyboard(): void
    unmapModifier(keycode: number): void
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
    connect(sigName: "notify", callback: (($obj: DeviceX11, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DeviceX11_ConstructProps)
    _init (config?: DeviceX11_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceX11
    static $gtype: GObject.Type
}
export interface EventListener_ConstructProps extends GObject.Object_ConstructProps {
}
class EventListener {
    /* Fields of Atspi-2.0.Atspi.EventListener */
    parent: GObject.Object
    callback: EventListenerCB
    userData: object
    cbDestroyed: GLib.DestroyNotify
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.EventListener */
    deregister(eventType: string): boolean
    register(eventType: string): boolean
    registerFull(eventType: string, properties?: string[] | null): boolean
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
    connect(sigName: "notify", callback: (($obj: EventListener, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: EventListener_ConstructProps)
    _init (config?: EventListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(callback: EventListenerCB): EventListener
    static deregisterFromCallback(callback: EventListenerCB, eventType: string): boolean
    static registerFromCallback(callback: EventListenerCB, eventType: string): boolean
    static registerFromCallbackFull(eventType: string, properties: string[]): boolean
    static $gtype: GObject.Type
}
export interface Hyperlink_ConstructProps extends Object_ConstructProps {
}
class Hyperlink {
    /* Fields of Atspi-2.0.Atspi.Hyperlink */
    parent: Object
    /* Fields of Atspi-2.0.Atspi.Object */
    app: Application
    path: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.Hyperlink */
    getEndIndex(): number
    getIndexRange(): Range
    getNAnchors(): number
    getObject(i: number): Accessible
    getStartIndex(): number
    getUri(i: number): string
    isValid(): boolean
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
    connect(sigName: "notify", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Hyperlink_ConstructProps)
    _init (config?: Hyperlink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MatchRule_ConstructProps extends GObject.Object_ConstructProps {
}
class MatchRule {
    /* Fields of Atspi-2.0.Atspi.MatchRule */
    parent: GObject.Object
    states: StateSet
    statematchtype: CollectionMatchType
    attributes: GLib.HashTable
    attributematchtype: CollectionMatchType
    interfaces: object[]
    interfacematchtype: CollectionMatchType
    roles: number[]
    rolematchtype: CollectionMatchType
    invert: boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MatchRule, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MatchRule_ConstructProps)
    _init (config?: MatchRule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(states: StateSet, statematchtype: CollectionMatchType, attributes: GLib.HashTable, attributematchtype: CollectionMatchType, roles: Role[], rolematchtype: CollectionMatchType, interfaces: string[], interfacematchtype: CollectionMatchType, invert: boolean): MatchRule
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
}
class Object {
    /* Fields of Atspi-2.0.Atspi.Object */
    parent: GObject.Object
    app: Application
    path: string
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Relation_ConstructProps extends GObject.Object_ConstructProps {
}
class Relation {
    /* Fields of Atspi-2.0.Atspi.Relation */
    parent: GObject.Object
    relationType: RelationType
    targets: object[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.Relation */
    getNTargets(): number
    getRelationType(): RelationType
    getTarget(i: number): Accessible
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
    connect(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Relation_ConstructProps)
    _init (config?: Relation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StateSet_ConstructProps extends GObject.Object_ConstructProps {
}
class StateSet {
    /* Fields of Atspi-2.0.Atspi.StateSet */
    parent: GObject.Object
    accessible: object
    states: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.StateSet */
    add(state: StateType): void
    compare(set2: StateSet): StateSet
    contains(state: StateType): boolean
    equals(set2: StateSet): boolean
    getStates(): StateType[]
    isEmpty(): boolean
    remove(state: StateType): void
    setByName(name: string, enabled: boolean): void
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
    connect(sigName: "notify", callback: (($obj: StateSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StateSet_ConstructProps)
    _init (config?: StateSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(states: StateType[]): StateSet
    static $gtype: GObject.Type
}
abstract class AccessibleClass {
    /* Fields of Atspi-2.0.Atspi.AccessibleClass */
    parentClass: ObjectClass
    regionChanged: (accessible: Accessible, currentOffset: number, lastOffset: number) => void
    modeChanged: (accessible: Accessible, enabled: boolean) => void
    static name: string
}
class AccessiblePrivate {
    static name: string
}
abstract class ApplicationClass {
    /* Fields of Atspi-2.0.Atspi.ApplicationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class DeviceClass {
    /* Fields of Atspi-2.0.Atspi.DeviceClass */
    parentClass: GObject.ObjectClass
    addKeyGrab: (device: Device, kd: KeyDefinition) => void
    removeKeyGrab: (device: Device, id: number) => void
    mapModifier: (device: Device, keycode: number) => number
    unmapModifier: (device: Device, keycode: number) => void
    getModifier: (device: Device, keycode: number) => number
    grabKeyboard: (device: Device) => boolean
    ungrabKeyboard: (device: Device) => void
    getLockedModifiers: (device: Device) => number
    static name: string
}
class DeviceEvent {
    /* Fields of Atspi-2.0.Atspi.DeviceEvent */
    type: EventType
    id: number
    hwCode: number
    modifiers: number
    timestamp: number
    eventString: string
    isText: boolean
    static name: string
}
abstract class DeviceLegacyClass {
    /* Fields of Atspi-2.0.Atspi.DeviceLegacyClass */
    parentClass: DeviceClass
    static name: string
}
abstract class DeviceListenerClass {
    /* Fields of Atspi-2.0.Atspi.DeviceListenerClass */
    parentClass: GObject.ObjectClass
    deviceEvent: (listener: DeviceListener, event: DeviceEvent) => boolean
    static name: string
}
abstract class DeviceX11Class {
    /* Fields of Atspi-2.0.Atspi.DeviceX11Class */
    parentClass: DeviceClass
    static name: string
}
class Event {
    /* Fields of Atspi-2.0.Atspi.Event */
    type: string
    source: Accessible
    detail1: number
    detail2: number
    anyData: any
    sender: Accessible
    static name: string
    /* Static methods and pseudo-constructors */
    static main(): void
    static quit(): void
}
abstract class EventListenerClass {
    /* Fields of Atspi-2.0.Atspi.EventListenerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class EventListenerMode {
    /* Fields of Atspi-2.0.Atspi.EventListenerMode */
    synchronous: boolean
    preemptive: boolean
    global: boolean
    static name: string
}
abstract class HyperlinkClass {
    /* Fields of Atspi-2.0.Atspi.HyperlinkClass */
    parentClass: ObjectClass
    static name: string
}
class KeyDefinition {
    /* Fields of Atspi-2.0.Atspi.KeyDefinition */
    keycode: number
    keysym: number
    keystring: string
    modifiers: number
    static name: string
}
class KeySet {
    /* Fields of Atspi-2.0.Atspi.KeySet */
    keysyms: number
    keycodes: number
    keystrings: string
    len: number
    static name: string
}
abstract class MatchRuleClass {
    /* Fields of Atspi-2.0.Atspi.MatchRuleClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ObjectClass {
    /* Fields of Atspi-2.0.Atspi.ObjectClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class Point {
    /* Fields of Atspi-2.0.Atspi.Point */
    x: number
    y: number
    /* Methods of Atspi-2.0.Atspi.Point */
    copy(): Point
    static name: string
}
class Range {
    /* Fields of Atspi-2.0.Atspi.Range */
    startOffset: number
    endOffset: number
    /* Methods of Atspi-2.0.Atspi.Range */
    copy(): Range
    static name: string
}
class Rect {
    /* Fields of Atspi-2.0.Atspi.Rect */
    x: number
    y: number
    width: number
    height: number
    /* Methods of Atspi-2.0.Atspi.Rect */
    copy(): Rect
    static name: string
}
abstract class RelationClass {
    /* Fields of Atspi-2.0.Atspi.RelationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class StateSetClass {
    /* Fields of Atspi-2.0.Atspi.StateSetClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class TextRange {
    /* Fields of Atspi-2.0.Atspi.TextRange */
    startOffset: number
    endOffset: number
    content: string
    static name: string
}
type ControllerEventMask = number
type DeviceEventMask = number
type KeyEventMask = number
type KeyMaskType = number
type KeystrokeListener = void
}
export default Atspi