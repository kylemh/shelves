/**
 * @description used within onDragEnd to determine if an item's source differs from its destination
 * @exports
 * @param {{ droppableId: string, index: number }} source
 * @param {{ droppableId: string, index: number }} destination
 * @returns {boolean}
 */
function didSomethingMove(source, destination) {
  // Dropped outside of a droppable location
  if (!destination) {
    return false;
  }

  const didMoveInSameDroppable = destination.droppableId === source.droppableId;

  // Dnd an item onto it's original location
  if (didMoveInSameDroppable && destination.index === source.index) {
    return false;
  }

  return true;
}

export default didSomethingMove;
