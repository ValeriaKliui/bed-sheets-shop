export const sortObjectKeys = (object: {}) => {
  const entries = Object.entries(object);

  return entries.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });
};
