export default {
  name: 'project-name',
  type: 'input',
  message: 'Project name:',
  validate: (input: string): string | boolean => {
    if (/^([a-z\-_\d])+$/.test(input)) return true;
    return 'Project name may only include letters, numbers, underscores and characters';
  },
};
