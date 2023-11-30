export const translateCondition = (condition: string) => {
  switch (condition) {
    case 'new':
      return 'Produto novo';
    case 'used':
      return 'Produto usado';
    default:
      return condition;
  }
};
