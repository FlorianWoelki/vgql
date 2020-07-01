import languageChoices from './languageChoices';

describe('Ask for language choices', () => {
  it('should return correct question format', () => {
    const result = languageChoices;

    expect(result).toMatchObject({
      type: 'list',
      name: 'language-choice',
    });
  });
});
