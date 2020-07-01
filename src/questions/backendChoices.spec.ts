import backendChoices from './backendChoices';

describe('Ask for backend choices', () => {
  it('should return correct question format', () => {
    const result = backendChoices;

    expect(result).toMatchObject({
      type: 'list',
      name: 'backend-choice',
    });
  });
});
