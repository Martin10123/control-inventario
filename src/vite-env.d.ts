/// <reference types="vite/client" />

declare module 'uuid' {
    import { V4Options } from 'uuid';

    function v4(options?: V4Options | undefined): string;

    export { v4 as v4 };
}
