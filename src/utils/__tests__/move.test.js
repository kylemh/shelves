import { move } from '..';

describe('move', () => {
  it('should move an item in a filled array to an empty array', () => {
    const sourceList = [1, 2, 3, 4, 5];
    const destinationList = [];
    const source = { droppableId: 'source-id', index: 3 };
    const destination = { droppableId: 'destination-id', index: 0 };

    const [newSourceList, newDestinationList] = move(
      sourceList,
      destinationList,
      source,
      destination
    );
    expect(newSourceList).toStrictEqual([1, 2, 3, 5]);
    expect(newDestinationList).toStrictEqual([4]);
  });

  it('should move an item bewteen 2 filled arrays', () => {
    const sourceList = ['yabba', 'dabba', 'doo'];
    const destinationList = ['scooby', 'dooby'];
    const source = { droppableId: 'flintstones', index: 2 };
    const destination = { droppableId: 'scooby doo', index: 2 };

    const [newSourceList, newDestinationList] = move(
      sourceList,
      destinationList,
      source,
      destination
    );
    expect(newSourceList).toStrictEqual(['yabba', 'dabba']);
    expect(newDestinationList).toStrictEqual(['scooby', 'dooby', 'doo']);
  });
});
