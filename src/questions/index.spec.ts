import questions from './';

describe('Questions', () => {
  it('should export questions', () => {
    const questionsNameOrder = Object.keys(questions);
    expect(questionsNameOrder).toEqual(['projectNameQuestion', 'allQuestions']);
  });
});
