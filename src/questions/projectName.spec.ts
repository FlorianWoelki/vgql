import projectName from './projectName';

describe('Ask for project name', () => {
  it('should return correct question format', () => {
    const result = projectName;

    expect(result).toMatchObject({
      type: 'input',
      name: 'project-name',
    });
  });
});
