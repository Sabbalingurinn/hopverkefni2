import { el } from '../elements.js';

export function renderLecture(contentJsonFile) {
    const container = el('div', { class: 'lectures' });

    container.appendChild(el('h2', { class: 'undir-h2' }, contentJsonFile.title));

    contentJsonFile.lectures.forEach((lecture) => {
        const lectureContainer = el('div', { class: 'lecture-item' });

        lectureContainer.appendChild(el('h3', { class: 'undir-h3' }, lecture.title));

        lecture.content.forEach((contentItem) => {
            let contentElement;

            switch (contentItem.type) {
                case 'quote':
                    contentElement = el(
                        'blockquote',
                        { class: 'undir-blockquote' },
                        contentItem.data,
                        contentItem.attribute
                            ? el('cite', { class: 'undir-cite' }, `— ${contentItem.attribute}`)
                            : null
                    );
                    break;

                case 'text':
                    contentElement = el('p', { class: 'undir-p' }, contentItem.data);
                    break;

                case 'heading':
                    contentElement = el('h4', { class: 'undir-h4' }, contentItem.data);
                    break;

                case 'list':
                    const listItems = contentItem.data.map((item) =>
                        el('li', { class: 'undir-li' }, item)
                    );
                    contentElement = el('ul', { class: 'undir-ul' }, ...listItems);
                    break;

                case 'code':
                    contentElement = el(
                        'pre',
                        {},
                        el('code', { class: 'undir-code' }, contentItem.data)
                    );
                    break;

                default:
                    contentElement = el('p', {}, 'Unknown content type');
            }

            if (contentElement) lectureContainer.appendChild(contentElement);
        });

        container.appendChild(lectureContainer);
    });

    return container;
}
