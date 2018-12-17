/**
 * @description
 * @param {[]} source
 * @param {[]} destination
 * @param {*} droppableSource
 * @param {*} droppableDestination
 * @exports
 * @returns
 */
function move(source, destination, droppableSource, droppableDestination) {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

export default move;
