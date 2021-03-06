/**
 * @description
 * @exports
 * @param {[]} sourceItems
 * @param {[]} destinationItems
 * @param {{ droppableId: string, index: number }} source
 * @param {{ droppableId: string, index: number }} destination
 * @returns
 */
function move(sourceItems, destinationItems, source, destination) {
  const sourceItemsClone = Array.from(sourceItems);
  const destinationItemsClone = Array.from(destinationItems);
  const [removed] = sourceItemsClone.splice(source.index, 1);

  destinationItemsClone.splice(destination.index, 0, removed);

  const result = [sourceItemsClone, destinationItemsClone];

  return result;
}

export default move;
