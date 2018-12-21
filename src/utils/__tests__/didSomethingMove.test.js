import { didSomethingMove } from '..';

describe('didSomethingMove', () => {
  it('should return false if no destination is passed', () => {
    const source = { droppableId: 'source-id', index: 3 };

    const result = didSomethingMove(source, undefined);
    expect(result).toStrictEqual(false);
  });

  it('should return false if source and destination are identical', () => {
    const index = 1;
    const droppableId = 'some-unique-id';
    const source = { droppableId, index };
    const destination = { droppableId, index };

    const result = didSomethingMove(source, destination);
    expect(result).toStrictEqual(false);
  });

  it('should return true if source index and destination index dont match', () => {
    const droppableId = 'deja-vu';
    const source = { droppableId, index: 0 };
    const destination = { droppableId, index: 1 };

    const result = didSomethingMove(source, destination);
    expect(result).toStrictEqual(true);
  });

  it('should return true if source droppableId and destination droppableId dont match', () => {
    const index = 0;
    const source = { droppableId: 'test1', index };
    const destination = { droppableId: 'test2', index };

    const result = didSomethingMove(source, destination);
    expect(result).toStrictEqual(true);
  });
});
