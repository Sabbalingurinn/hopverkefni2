import { el } from '../elements.js';

export function renderKeywords(root, contentJsonFile){
    return el(
        'div',
        { class: 'keywords' },
        'These are the keywords content!'
      );
    }