import { el } from '../elements.js';

export function renderLectures(contentJsonFile) {

    if (!contentJsonFile || !contentJsonFile.title || !contentJsonFile.lectures) {
      return el('div', {}, 'Invalid content data. Please check the file structure.');
    }
  
    const container = el('div', { class: 'lectures' });
  
    container.appendChild(el('h2', {class: 'undir-h2'}, contentJsonFile.title));
  

    contentJsonFile.lectures.forEach((lecture) => {

      if (!lecture.title || !lecture.content) {
        console.warn('Skipping invalid lecture:', lecture);
        return;
      }

      const lectureContainer = el('div', { class: 'lecture-item' });
  
      lectureContainer.appendChild(el('h3', {class: 'undir-h3'}, lecture.title));
  
      lecture.content.forEach((contentItem) => {
        if (!contentItem.type || !contentItem.data) {
          console.warn('Skipping invalid content item:', contentItem);
          return;
        }
  
        let contentElement;
  
        switch (contentItem.type) {
          case 'quote':
            contentElement = el(
              'blockquote',
              {class: 'undir-blockquote'},
              contentItem.data,
              contentItem.attribute ? el('cite', {class: 'undir-cite'}, `— ${contentItem.attribute}`) : null
            );
            break;
  
          case 'text':
            contentElement = el('p', {}, contentItem.data);
            break;
  
          case 'heading':
            contentElement = el('h4', {class: 'undir-h4'}, contentItem.data);
            break;
  
          case 'list':
            if (Array.isArray(contentItem.data)) {
              const listItems = contentItem.data.map((item) => el('li', {class: 'undir-li'}, item));
              contentElement = el('ul', {class: 'undir-ul'}, ...listItems);
            } else {
              console.warn('Skipping invalid list content:', contentItem);
            }
            break;
  
          case 'code':
            contentElement = el('pre', {}, el('code', {}, contentItem.data));
            break;
  
          case 'image':
            contentElement = el(
              'figure',
              {class: 'under-figure'},
              el('img', { src: contentItem.data, alt: contentItem.caption, class: 'under-img' || '' }),
              contentItem.caption ? el('figcaption', {}, contentItem.caption) : null
            );
            break;
  
          default:
            console.warn('Unknown content type:', contentItem.type);
            contentElement = el('p', {}, `Unsupported content type: ${contentItem.type}`);
        }

        if (contentElement) lectureContainer.appendChild(contentElement);
      });
  
      container.appendChild(lectureContainer);
    });
  
    return container;
  }
  