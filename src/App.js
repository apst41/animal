import SearchBar from "./components/SearchBar";
import {useState} from "react";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
  const [images,setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  }

  return (
    <div>
    <SearchBar onsubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  );
}

export default App;
