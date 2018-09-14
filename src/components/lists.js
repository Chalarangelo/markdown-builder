/**
 * Markdown Lists utilities
 * @flow
 */

import { UNORDERED_LIST_PREFIX, withPrefix } from '../util';

const ul = (items: Array<any>, callback: Function): string => {
	let list = '';
	for(let val of items) {
		list += withPrefix(UNORDERED_LIST_PREFIX, callback(val));
	}
	return list;
}

const ol = (items: Array<any>, callback: Function): string => {
	let list = '';
	let counter = 1;

	for(let val of items) {
		list += withPrefix(`${counter}.`, callback(val));
		counter++;
	}
	return list;
}

export {
	ul,
	ol
};