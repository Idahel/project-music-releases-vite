import data from "./data.json";
import Album from "./Components/Album.jsx";
import {Header} from "./Components/Header.jsx";


const App = () => {
  const albums = data.albums.items;

  return (
    <div className="App">
      <Header />
      {albums.map((album, index) => (
        <Album key={index} album={album} />
      ))}
    </div>
  );
};

export default App;