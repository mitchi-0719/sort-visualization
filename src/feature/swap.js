export const swap = (
  coordinates,
  setCoordinates,
  i1,
  i2,
  coordinateIndex,
  setCoordinateIndex
) => {
  const newCoordinates = [...coordinates];
  let temp = newCoordinates[coordinateIndex[i1]];
  newCoordinates[coordinateIndex[i1]] = newCoordinates[coordinateIndex[i2]];
  newCoordinates[coordinateIndex[i2]] = temp;

  const newCoordinateIndex = [...coordinateIndex];
  temp = newCoordinateIndex[i1];
  newCoordinateIndex[i1] = newCoordinateIndex[i2];
  newCoordinateIndex[i2] = temp;

  setCoordinateIndex(newCoordinateIndex);
  setCoordinates(newCoordinates);
};
