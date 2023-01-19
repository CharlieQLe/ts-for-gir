import type * as DbusUtils from './misc/dbusUtils.js';
import type * as ExtensionUtils from './misc/extensionUtils.js';
import type * as FileUtils from './misc/fileUtils.js';
import type * as GnomeSession from './misc/gnomeSession.js';
import type * as Signals from './misc/signals.js';

// TODO: https://gitlab.gnome.org/GNOME/gnome-shell/-/tree/main/js/misc
export namespace misc {
    export const dbusUtils: typeof DbusUtils;
    export const extensionUtils: typeof ExtensionUtils;
    export const fileUtils: typeof FileUtils;
    export const gnomeSession: typeof GnomeSession;
    export const history: any;
    export const ibusManager: any;
    export const inputMethod: any;
    export const introspect: any;
    export const jsParse: any;
    export const keyboardManager: any;
    export const loginManager: any;
    export const modemManager: any;
    export const objectManager: any;
    export const params: any;
    export const parentalControlsManager: any;
    export const permissionStore: any;
    export const signalTracker: any;
    export const signals: typeof Signals;
    export const smartcardManager: any;
    export const systemActions: any;
    export const util: any;
    export const weather: any;
}

import type * as PanelMenu from './ui/panelMenu.js';
import type * as PopupMenu from './ui/popupMenu.js';
import type * as UserWidget from './ui/userWidget.js';

// TODO: https://gitlab.gnome.org/GNOME/gnome-shell/-/tree/main/js/ui
export namespace ui {
    export const components: any;
    export const status: any;
    export const accessDialog: any;
    export const altTab: any;
    export const animation: any;
    export const appDisplay: any;
    export const appFavorites: any;
    export const appMenu: any;
    export const audioDeviceSelection: any;
    export const background: any;
    export const backgroundMenu: any;
    export const barLevel: any;
    export const boxpointer: any;
    export const calendar: any;
    export const checkBox: any;
    export const closeDialog: any;
    export const ctrlAltTab: any;
    export const dash: any;
    export const dateMenu: any;
    export const dialog: any;
    export const dnd: any;
    export const edgeDragAction: any;
    export const endSessionDialog: any;
    export const environment: any;
    export const extensionDownloader: any;
    export const extensionSystem: any;
    export const focusCaretTracker: any;
    export const grabHelper: any;
    export const ibusCandidatePopup: any;
    export const iconGrid: any;
    export const inhibitShortcutsDialog: any;
    export const init: any;
    export const kbdA11yDialog: any;
    export const keyboard: any;
    export const layout: any;
    export const lightbox: any;
    export const locatePointer: any;
    export const lookingGlass: any;
    export const magnifier: any;
    export const main: any;
    export const messageList: any;
    export const messageTray: any;
    export const modalDialog: any;
    export const mpris: any;
    export const notificationDaemon: any;
    export const osdMonitorLabeler: any;
    export const osdWindow: any;
    export const overview: any;
    export const overviewControls: any;
    export const padOsd: any;
    export const pageIndicators: any;
    export const panel: any;
    export const panelMenu: typeof PanelMenu;
    export const pointerA11yTimeout: any;
    export const pointerWatcher: any;
    export const popupMenu: typeof PopupMenu;
    export const quickSettings: any;
    export const remoteSearch: any;
    export const ripples: any;
    export const runDialog: any;
    export const screenShield: any;
    export const screenshot: any;
    export const scripting: any;
    export const search: any;
    export const searchController: any;
    export const sessionMode: any;
    export const shellDBus: any;
    export const shellEntry: any;
    export const shellMountOperation: any;
    export const slider: any;
    export const swipeTracker: any;
    export const switchMonitor: any;
    export const switcherPopup: any;
    export const unlockDialog: any;
    export const userWidget: typeof UserWidget;
    export const welcomeDialog: any;
    export const windowAttentionHandler: any;
    export const windowManager: any;
    export const windowMenu: any;
    export const windowPreview: any;
    export const workspace: any;
    export const workspaceAnimation: any;
    export const workspaceSwitcherPopup: any;
    export const workspaceThumbnail: any;
    export const workspacesView: any;
    export const xdndHandler: any;
}
