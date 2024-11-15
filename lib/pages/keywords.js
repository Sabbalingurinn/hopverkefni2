import { el } from '../elements.js';

export function renderKeywords(contentJsonFile) {

    const container = el('div', { class: 'keywords' });
  
    container.appendChild(el('h2', {}, contentJsonFile.title));
  
    contentJsonFile.keywords.forEach((keyword) => {
      const keywordContainer = el('div', { class: 'keyword-item' });
  
      keywordContainer.appendChild(el('h3', {}, keyword.title));
  
      if (keyword.english) {
        keywordContainer.appendChild(
          el('p', { class: 'keyword-english' }, `Enskt heiti: ${keyword.english}`)
        );
      }
  
      keywordContainer.appendChild(el('p', { class: 'keyword-content' }, keyword.content));
  

      container.appendChild(keywordContainer);
    });
  
    return container;
  }
  