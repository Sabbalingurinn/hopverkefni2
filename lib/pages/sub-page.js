import { renderNavigation } from '../components/navigation.js';
import { el } from '../elements.js';
import { fetcher } from '../fetcher.js';
import { updateContentParam } from '../components/updateContent.js';

export async function renderSubpage(root, indexJson, type) {
  const headerElement = el('header', {}, el('h1', {}, indexJson.title));

  headerElement.appendChild(renderNavigation(indexJson.navigation));

  let foundType = null;

  if (indexJson.navigation.find((i) => i.slug === type)) {
    foundType = type;
  }

  let mainElement;
  if (!foundType) {
    mainElement = el('main', {}, el('p', {}, 'Fannst ekki'));
  } else {
    const contentJsonFile = `data/${type}/index.json`;
    const contentJson = await fetcher(contentJsonFile);

    const content = contentJson.content;
    const contentElement = document.createElement('div');

    for (const item of content) {
      const itemElement = document.createElement('section');

      const button = document.createElement('button');
      button.textContent = item.title;
      itemElement.appendChild(button);
      button.addEventListener('click', (e) => {
        const itemType = item.type; 
        updateContentParam(itemType); 

        const contentDiv = e.target.parentElement.querySelector('div');
        contentDiv.classList.toggle('hidden');
      });

      const itemText = document.createElement('div');
      itemText.textContent = item.text;
      itemText.classList.add('hidden');

      itemElement.appendChild(button);
      itemElement.appendChild(itemText);

      contentElement.appendChild(itemElement);
    }

    mainElement = el('main', {}, contentElement);
  }

  const footerElement = el('footer', {}, indexJson.footer);

  root.appendChild(headerElement);
  root.appendChild(mainElement);
  root.appendChild(footerElement);
}
