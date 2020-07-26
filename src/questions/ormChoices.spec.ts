import ormChoices from './ormChoices';

describe('Ask for orm choices', () => {
  it('should return correct orm question format', () => {
    const result = ormChoices;

    expect(result).toMatchObject({
      type: 'list',
      name: 'orm-choice',
    });
  });
});
