/**
 * xrandr-1.3
 */

/// <reference types="node" />
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace xrandr {

export class ScreenSize {
    static name: string
}
export class ScreenChangeNotifyEvent {
    static name: string
}
export class NotifyEvent {
    static name: string
}
export class ScreenResources {
    static name: string
}
export class OutputChangeNotifyEvent {
    static name: string
}
export class CrtcChangeNotifyEvent {
    static name: string
}
export class OutputPropertyNotifyEvent {
    static name: string
}
}