import { el } from '../elements.js';
import { updateContentParam } from '../components/updateContent.js';

export function renderButtons(content, onContentChange,type) {
  const buttonContainer = el('ul', { class: 'button__container' });

  for (const item of content) {
    const itemType = item.type; 

    const href = `/?type=${type}&content=${itemType}`; 

    const button = el(
      'li',
      { class: 'button' },
      el(
        'a',
        {
          href,
          class: 'data',
          onclick: (event) => {
            event.preventDefault();
            updateContentParam(itemType);
            onContentChange(itemType); 
          },
        },
        item.title 
      )
    );

    buttonContainer.appendChild(button);
  }

  return buttonContainer;
}
