import { el } from '../elements.js';
import { updateContentParam } from '../components/updateContent.js';

export function renderButtons(content, onContentChange, type) {
  // Create a nav element to wrap the button container
  const nav = el('nav', { class: 'button__navigation' });

  // Create a ul element for the button list
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

  // Append the ul element to the nav element
  nav.appendChild(buttonContainer);

  return nav;
}
