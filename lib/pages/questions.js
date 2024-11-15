import { el } from '../elements.js';

export function renderQuestions(contentJsonFile) {
    

    if (!contentJsonFile || !contentJsonFile.questions) {
      return el('div', { class: 'questions' }, 'No questions available');
    }
    const questionContainer = el('div', { class: 'questions' });
  
    questionContainer.appendChild(el('h2', {}, contentJsonFile.title + ' - spurningar' ));
  
    for (const questionItem of contentJsonFile.questions) {
      const questionSection = el(
        'section',
        { class: 'question' },
        el('h3', {}, questionItem.question)
      );
  
      const answerList = el('ul', { class: 'answers' });
  
      for (const answer of questionItem.answers) {
        const answerItem = el(
          'li',
          { class: answer.correct ? 'answer correct' : 'answer' },
          answer.answer
        );
        answerList.appendChild(answerItem);
      }
  
      questionSection.appendChild(answerList);
      questionContainer.appendChild(questionSection);
    }
  
    return questionContainer;
  }
  