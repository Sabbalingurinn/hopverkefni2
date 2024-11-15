import { renderNavigation } from '../components/navigation.js';
import { el } from '../elements.js';
import { fetcher } from '../fetcher.js';
import { renderButtons } from '../components/buttons.js';

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

    const contentElement = renderButtons(content, (itemType) => {
      console.log(`Button with type ${itemType} clicked`);
    }, type);

    mainElement = el(
      'main',
      {},
      el('h2', {}, contentJson.title),
      el('div', {}, contentJson.text),
      el('div', {}, contentElement)
    );
  }

  const footerElement = el('footer', {}, indexJson.footer);

  root.appendChild(headerElement);
  root.appendChild(mainElement);
  root.appendChild(footerElement);
}
