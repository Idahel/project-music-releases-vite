const ArtistName = ({ artists }) => {
  const artistNames = artists.map ((artist) => artist.name);
  const artistNamesString = artistNames.join (", ");

  return (
    <div className = "artist-name"> 
    <a href = {artists[0].external_urls.spotify} target = "_blank" rel = "noopener noreferrer">
      {artistNamesString}
    </a>
    </div>
  );
};

export default ArtistName;