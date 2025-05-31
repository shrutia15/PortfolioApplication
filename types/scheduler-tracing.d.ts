declare module "scheduler/tracing" {
  export interface Interaction {
    id: number;
    name: string;
    timestamp: number;
  }

  export function unstable_clear(callback: Function): void;
  export function unstable_getCurrent(): Set<Interaction> | null;
  export function unstable_getThreadID(): number;
  export function unstable_subscribe(callback: Function): void;
  export function unstable_trace(
    name: string,
    timestamp: number,
    callback: Function
  ): void;
  export function unstable_unsubscribe(callback: Function): void;
  export function unstable_wrap(callback: Function): Function;
}
