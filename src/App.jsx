import data from "./data.json";
import Album from "./Components/Album components/Album.jsx";
import {Header} from "./Components/Header.jsx";


const App = () => {
  const albums = data.albums.items; // Correct the variable name here

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