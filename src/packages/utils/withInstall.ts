/* eslint-disable @typescript-eslint/no-explicit-any */
import type { App } from 'vue'

type EventShim = {
  new (...args: any[]): {
    $props: {
      onClick?: (...args: any[]) => void
    }
  }
}

export type WithInstall<T> = T & {
  install(app: App): void
} & EventShim

export function withInstall<T>(options: T) {
  ;(options as Record<string, unknown>).install = (app: App) => {
    installComponent(app, options)
  }
  return options as WithInstall<T>
}

export function installComponent<T>(app: App, component: T) {
  const { name, __name } = component as unknown as { name: string; __name: string }
  if (name) {
    app.component(name, component)
  } else if (__name) {
    app.component(__name, component)
  }
}
