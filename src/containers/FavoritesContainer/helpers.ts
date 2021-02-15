import { SearchItem } from '../../api';

export const reorder = (list: SearchItem[], startIndex: number, endIndex: number): SearchItem[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
