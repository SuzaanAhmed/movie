export const fetchMovie = async (title) => {
  const res = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=d8c711ea`);
  return res.json();
};