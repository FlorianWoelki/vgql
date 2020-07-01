import frontendChoices from './frontendChoices';

describe('Ask for frontend choices', () => {
  it('should return correct question format', () => {
    const result = frontendChoices;

    expect(result).toMatchObject({
      type: 'list',
      name: 'frontend-choice',
    });
  });
});
