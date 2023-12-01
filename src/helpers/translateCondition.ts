export const translateCondition = (condition: string) => {
  switch (condition) {
    case 'new':
      return 'Novo';
    case 'used':
      return 'Usado';
    default:
      return condition;
  }
};
