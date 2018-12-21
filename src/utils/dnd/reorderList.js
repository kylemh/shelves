/**
 * @description Moves an item existing in a list at "initialIndex" and moves it to "targetIndex"
 * @exports
 * @param {[]} list
 * @param {number} initialIndex
 * @param {number} targetIndex
 * @returns {[]} result
 */
function reorderList(list, initialIndex, targetIndex) {
  if (initialIndex >= 0 && targetIndex >= 0) {
    const result = Array.from(list);
    const [removed] = result.splice(initialIndex, 1);
    result.splice(targetIndex, 0, removed);

    return result;
  }

  throw new Error(
    'initialIndex and targetIndex are required parameters. Pass a positive number to each!'
  );
}

export default reorderList;
