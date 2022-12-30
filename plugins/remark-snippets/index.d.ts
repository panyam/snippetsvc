import { Content, Parent, Root } from 'mdast';
import { Plugin } from 'unified';
/**
 * A markdown plugin for transforming code metadata.
 *
 * @returns A unified transformer.
 */
declare const remarkMdxCodeMeta: Plugin<[any], Root>;
export default remarkMdxCodeMeta;
export declare class Snippet {
    readonly id: string;
    readonly node: Content;
    readonly parent: Parent;
    code: string;
    prev: Snippet | null;
    setupCode: string;
    hidden: boolean;
    hideOutput: boolean;
    index: number;
    promise: null | Promise<any>;
    constructor(id: string, node: Content, parent: Parent, code?: string);
    get codeBlocks(): string[];
    /**
     * A snippet is executed in a secure sandbox and its output is returned back
     * to the caller.
     *
     * @param code  Code string to be executed
     * @param envdir  Name of the directory where the environment exists and has all
     *                the necessary packages installed.
     * @param snippetid ID of the snippet being executed.  This is used to compute Name
     *                  of the directory where the environment exists and has all
     *                  the necessary packages installed.
     */
    execute(envdir: string): Promise<any[]>;
}
