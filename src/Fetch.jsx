// Fetch.jsx
// export const Fetch = () => {
//     return  fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${import.meta.env.VITE_YT_API_KEY}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error("Error fetching data:", error);
//     });
// }

export const FetchYouTubeData = (searchValue) => {
  const apiKey = import.meta.env.VITE_REACT_YT_API_KEY;
  const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchValue}&part=snippet&type=video&maxResults=8`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
