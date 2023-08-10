import React, {useState, useEffect} from 'react';
import ImageCard from './components/ImageCard';
import Loading_icon from "./images/Loading_icon.gif";
import ImageSearch from './components/ImageSearch';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect (()=> {
    fetch(`https://pixabay.com/api/?key=38663877-1d23ab7b359a482c25a7d0504&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, [term]);

  return (
    <div className='container mx-auto mb-[100px] p-5'>
      <h1 className='text-4xl font-courgette text-white text-center my-10'>React Pixabay Gallery</h1>
      <ImageSearch searchText={(text) => setTerm(text)}/>

      {!isLoading && images.length===0 && <h1 className="text-5xl text-white text-center mx-auto">No image results</h1>}
      {isLoading ? <img src={Loading_icon} alt="loading" className="mx-auto h-screen w-full"/> : <div className="justify-center grid m-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2 gap-4 lg:gap-6">
          {images.map(image =>(
            <ImageCard key={image.id} image={image}/>
          ))}
      </div>}
      <div className='flex justify-center items-center text-center'><p className='font-courgette my-[10px] text-white'>Powered by <b>PIXABAY</b> | 2023</p></div>
    </div>
  );
}

export default App;
