import { el } from '../elements.js';

export function renderLecture(root, contentJson){
    return el(
        'div',
        { class: 'lecture' },
        'This is the lecture content!'
      );
    }