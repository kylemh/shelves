/**
 * @description
 * @param {[]} sourceItems
 * @param {[]} destinationItems
 * @param {*} source
 * @param {*} destination
 * @exports
 * @returns
 */
function move(sourceItems, destinationItems, source, destination) {
  const sourceItemsClone = Array.from(sourceItems);
  const destinationItemsClone = Array.from(destinationItems);
  const [removed] = sourceItemsClone.splice(source.index, 1);

  destinationItemsClone.splice(destination.index, 0, removed);

  const result = [
    sourceItemsClone,
    destinationItemsClone,
  ];

  return result;
}

export default move;
