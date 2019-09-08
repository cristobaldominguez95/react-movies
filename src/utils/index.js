export const chunkArray = (array, size) => {
  let chunk = [];
  for (let i = 0; i < array.length; i += size) {
    chunk.push(array.slice(i, i + size));
  }
  return chunk;
};

export const getTMDBImageUrl = (img) => {
  return `https://image.tmdb.org/t/p/w780${img}`;
};
