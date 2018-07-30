/**
 * Markdown Emphasis utilities
 * @flow
 */

import { surround } from '../util';
import {
  EMPHASIS_ITALICS,
  EMPHASIS_BOLD,
  EMPHASIS_STRIKETHROUGH,
} from '../util/constants';

const italic = (text: string) => surround(EMPHASIS_ITALICS, text);

const bold = (text: string) => surround(EMPHASIS_BOLD, text);

const strikethrough = (text: string) => surround(EMPHASIS_STRIKETHROUGH, text);

export { italic, bold, strikethrough };
