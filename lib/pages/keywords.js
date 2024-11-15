import { el } from '../elements.js';

export function renderKeywords(contentJsonFile) {
    const container = el('div', { class: 'keywords' });

    container.appendChild(el('h2', { class: 'undir-h2' }, contentJsonFile.title));

    contentJsonFile.keywords.forEach((keyword) => {
        const keywordContainer = el('div', { class: 'undir-item' });

        keywordContainer.appendChild(el('h3', { class: 'undir-h3' }, keyword.title));

        if (keyword.english) {
            keywordContainer.appendChild(
                el(
                    'p',
                    { class: 'undir-english' },
                    `Enskt heiti: ${keyword.english}`
                )
            );
        }

        keywordContainer.appendChild(
            el('p', { class: 'undir-content' }, keyword.content)
        );

        container.appendChild(keywordContainer);
    });

    return container;
}
