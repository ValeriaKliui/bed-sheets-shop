import { sortObjectKeys } from "./sortObjectKeys";

export const getSortedAndStringifiedObject = (object: {}) => {
  return JSON.stringify(sortObjectKeys(object));
};
