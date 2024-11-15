import { renderKeywords } from './keywords';
import { renderLecture } from './lectures';
import { renderQuestions } from './questions';
import { renderNavigation } from '../components/navigation';
import { el } from '../elements';
import { fetcher } from '../fetcher.js';

export async function renderContentPage(root, indexJson, contentJson, typeJson) {
  const contentJsonFile = await fetcher(`data/${typeJson}/lectures.json`);
  console.log('rendering content page', root, indexJson.title);

  const headerElement = el('header', {}, el('h1', {}, indexJson.title));

  headerElement.appendChild(renderNavigation(indexJson.navigation));
  let contentElement;
  if (contentJson === 'lectures') {
    contentElement = renderLecture(root, contentJsonFile);
  } else if (contentJson === 'questions') {
    contentElement = renderQuestions(root, contentJsonFile);
  } else if (contentJson === 'keywords') {
    contentElement = renderKeywords(root, contentJsonFile);
  } else {
    contentElement = el('p', {}, 'No valid content found.');
  }
  console.log('contentElement:', contentElement);
  const mainElement = el(
    'main',
    {},
    el(
      'section',
      {},
      el('p', {}, indexJson.description),
      el(
        'p',
        {},
        `Ég er content page, þetta er contentið mitt ${JSON.stringify(contentJson)} fyrir ${JSON.stringify(typeJson)}`
      )
    ),
    el('section', {}, contentElement)
  );
  const footerElement = el('footer', {}, indexJson.footer);

  root.appendChild(headerElement);
  root.appendChild(mainElement);
  root.appendChild(footerElement);
}
