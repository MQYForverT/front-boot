/// <reference types="vite/client" />

declare module '@mqy/components-internal/dist/mqy-component-internal'

declare namespace JSX {
	interface IntrinsicElements {
		[elemName: `mqy-${string}`]: any
	}
}
