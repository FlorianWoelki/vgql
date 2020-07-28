import typeormDbChoices from './typeormDbChoices';

describe('Ask for typeorm db choices', () => {
  it('should return correct orm question format', () => {
    const result = typeormDbChoices;

    expect(result).toMatchObject({
      type: 'list',
      name: 'typeorm-db-choice',
    });
  });
});
