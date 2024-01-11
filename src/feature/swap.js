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

  const duration = 500;
  const startTime = performance.now();

  const animate = (timestamp) => {
    const progress = (timestamp - startTime) / duration;

    if (progress < 1) {
      const intermediateCoordinates = newCoordinates.map((coord, idx) => {
        const startX = coordinates[idx].x;
        const startY = coordinates[idx].y;
        const endX = coord.x;
        const endY = coord.y;

        const currentX = startX + progress * (endX - startX);
        const currentY = startY + progress * (endY - startY);

        return { x: currentX, y: currentY };
      });

      setCoordinates(intermediateCoordinates);

      requestAnimationFrame(animate);
    } else {
      setCoordinates(newCoordinates);
      setCoordinateIndex(newCoordinateIndex);
    }
  };

  requestAnimationFrame(animate);
};
