import useFetch from '../../useFetch';
import Art from '../Art/Art';
import './App.css';

function App() {
  const {data, loading, error} = useFetch("https://www.rijksmuseum.nl/api/nl/collection?key=woJOHsSM");
  if(loading) return <h1>Loading...</h1>

  if (error) console.log(error);
  console.log(data)

  const renderTitles = data?.artObjects.map((art) =>{
    return <Art art={art}/>
  })
  
  return (
    <>
      {renderTitles}
    </>
  );
}

export default App;
