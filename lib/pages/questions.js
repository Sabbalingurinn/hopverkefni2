import { el } from '../elements.js';

export function renderQuestions(root, contentJsonFile) {
    // Create a div for questions content
    return el(
      'div',
      { class: 'questions' },
      'Here are some questions content!'
    );
  }