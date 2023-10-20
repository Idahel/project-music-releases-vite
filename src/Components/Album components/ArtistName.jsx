const ArtistName = ({ artists }) => {
  const artistNames = artists.map((artist) => artist.name);
  const artistNamesString = artistNames.join(", "); // Join artist names with a comma and space

  return (
    <a href={artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer">
      {artistNamesString}
    </a>
  );
};

export default ArtistName;