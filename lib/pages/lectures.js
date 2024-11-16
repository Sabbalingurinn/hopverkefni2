import { el } from '../elements.js';

export function renderLectures(contentJsonFile) {

    if (!contentJsonFile || !contentJsonFile.title || !contentJsonFile.lectures) {
      return el('div', {}, 'Invalid content data. Please check the file structure.');
    }
  
    const container = el('div', { class: 'lectures' });
  
    container.appendChild(el('h2', {}, contentJsonFile.title));
  

    contentJsonFile.lectures.forEach((lecture) => {

      if (!lecture.title || !lecture.content) {
        console.warn('Skipping invalid lecture:', lecture);
        return;
      }

      const lectureContainer = el('div', { class: 'lecture-item' });
  
      lectureContainer.appendChild(el('h3', {}, lecture.title));
  
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
              {},
              contentItem.data,
              contentItem.attribute ? el('cite', {}, `— ${contentItem.attribute}`) : null
            );
            break;
  
          case 'text':
            contentElement = el('p', {}, contentItem.data);
            break;
  
          case 'heading':
            contentElement = el('h4', {}, contentItem.data);
            break;
  
          case 'list':
            if (Array.isArray(contentItem.data)) {
              const listItems = contentItem.data.map((item) => el('li', {}, item));
              contentElement = el('ul', {}, ...listItems);
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
              {},
              el('img', { src: contentItem.data, alt: contentItem.caption || '' }),
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
  