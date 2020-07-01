import extraChoices from './extraChoices';

describe('Ask for extra choices', () => {
  it('should return correct question format', () => {
    const result = extraChoices;

    expect(result).toMatchObject({
      type: 'checkbox',
      name: 'extra-choice',
    });
  });
});
