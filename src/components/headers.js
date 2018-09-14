/**
 * Markdown Header utilities
 * @flow
 */

import { HEADER_PREFIX, withPrefix } from '../util';

const hX = (headerLevel: number, text: string) =>
  headerLevel > 6
    ? h6(text)
    : withPrefix(HEADER_PREFIX.repeat(headerLevel), text);

const h1 = (text: string) => hX(1, text);
const h2 = (text: string) => hX(2, text);
const h3 = (text: string) => hX(3, text);
const h4 = (text: string) => hX(4, text);
const h5 = (text: string) => hX(5, text);
const h6 = (text: string) => hX(6, text);

export { hX as default, h1, h2, h3, h4, h5, h6 };
