import { reorderList } from '..';

describe('reorderList', () => {
  const list = [1, 2, 3, 4, 5];

  it('should move first item of the list to the end when passing 0 as initial index and last index as target', () => {
    const firstItemBeforeReordering = list[0];
    const lastIndex = list.length - 1;
    const result = reorderList(list, 0, lastIndex);
    const lastItemAfterReordering = result.slice(-1).pop();

    expect(lastItemAfterReordering).toStrictEqual(firstItemBeforeReordering);
  });

  it('should move last item of the list to the start when passing last index as initial index and first index as target', () => {
    const lastItemBeforeReordering = list.slice(-1).pop();
    const lastIndex = list.length - 1;
    const result = reorderList(list, lastIndex, 0);
    const firstItemAfterReordering = result[0];

    expect(firstItemAfterReordering).toStrictEqual(lastItemBeforeReordering);
  });

  it('should match snapshot', () => {
    const result = reorderList(list, 2, 3);

    expect(result).toMatchSnapshot();
  });

  it('should throw an error if not passed a list', () => {
    expect(() => reorderList(undefined, 1, 2)).toThrowError();
  });

  it('should throw an error if not passed an initial index', () => {
    expect(() => reorderList(list, undefined, 2)).toThrowError();
  });

  it('should throw an error if not passed a target index', () => {
    expect(() => reorderList(list, 1, undefined)).toThrowError();
  });
});
