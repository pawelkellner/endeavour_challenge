/* React */
import { useEffect, useState } from 'react';

/* Framer Motion */
import {motion as m, AnimatePresence} from "framer-motion";

/* Own */
import useFetch from '../../useFetch';
import Art from '../Art/Art';
import Loader from '../Loader/Loader';
import PageChange from '../PageChange/PageChange';
import SearchBar from '../SearchBar/SearchBar';
import PaintingCard from '../PaintingCard/PaintingCard';

/* CSS */
import './App.css';
import Filter from '../Filter/Filter';

function App() {
  const [userInputs, setUserInputs] = useState([
    {
      id: 1,
      type: "&p=",
      value: 1,
      using: false
    },
    {
      id: 2,
      type: "&involvedMaker=",
      value: "",
      using: false
    },
    {
      id: 3,
      type: "&type=",
      value: "",
      using: false
    },
    {
      id: 4,
      type: "&material=",
      value: "",
      using: false
    },
    {
      id: 5,
      type: "&technique=",
      value: "",
      using: false
    },
    {
      id: 6,
      type: "&f.dating.period=",
      value: null,
      using: false
    },
    {
      id: 7,
      type: "&f.normalized32Colors.hex=",
      value: null,
      using: false
    },
    {
      id: 8,
      type: "&imgonly=",
      value: false,
      using: false
    },
    {
      id: 9,
      type: "&toppieces=",
      value: false,
      using: false
    },
    {
      id: 10,
      type: "&s=",
      value: null,
      using: false
    },
    {
      id: 11,
      type: "&q=",
      value: "",
      using: false
    },
  ])
  const [currentFetch, setCurrentFetch] = useState(`https://www.rijksmuseum.nl/api/nl/collection?key=woJOHsSM`);
  const {data, loading, error, refetch} = useFetch(currentFetch);
  const [paintingWasClicked, setPaintingWasClicked] = useState(false);
  const [artId, setArtId] = useState(0)

  useEffect(() =>{
    setCurrentFetch(`https://www.rijksmuseum.nl/api/nl/collection?key=woJOHsSM`)
  }, [])

  if(loading){
    return (
      <div className='content__container'>
        <SearchBar />
        <PageChange pageCounter={userInputs} />
        <Loader />
      </div>
    )
  };

  if (error) console.log(error);

  const idRecieved = (id) =>{
    setArtId(id);
    setPaintingWasClicked(true);
  }

  const closePainting = () =>{
    setPaintingWasClicked(false);
  }

  const renderArt = data?.artObjects.map((art, index) =>{
    return <Art key={index} art={art} passId={idRecieved}/>
  })

  const changeFetch = () =>{
    const renderInputs = userInputs.map(call =>{
      console.log(call)
      if(call.using === true){
        const render = call.type + call.value
        return render
      }
    })
    const converToLink = renderInputs.toString().replaceAll(",","")
    console.log(converToLink)
    refetch(`https://www.rijksmuseum.nl/api/nl/collection?key=woJOHsSM${converToLink}`)
  }
  
  const submit = (searchWord) =>{
    const oldState = [...userInputs];
    console.log(oldState)
    const newState = oldState.map(input =>{
      if(input.id === 11){
        input.value = searchWord
        input.using = true
        return input;
      }else{
        return input;
      }
    })
    setUserInputs(newState);
    changeFetch();
  }

  const prevPage = () =>{
    const oldState = [...userInputs];
    console.log(oldState)
    const newState = oldState.map(input =>{
      if(input.id === 1){
        input.value = input.value - 1
        input.using = true
        return input;
      }else{
        return input;
      }
    })
    setUserInputs(newState);
    changeFetch();
  }

  const nextPage = () =>{
    const oldState = [...userInputs];
    console.log(oldState)
    const newState = oldState.map(input =>{
      if(input.id === 1){
        input.value = input.value + 1
        input.using = true
        return input;
      }else{
        return input;
      }
    })
    setUserInputs(newState);
    changeFetch();
  }
  
  const colorFilter = (colorHex) =>{
    const convertToUrl = colorHex.replace("#", "%23")

    console.log(convertToUrl)

    const oldState = [...userInputs];
    console.log(oldState)
    const newState = oldState.map(input =>{
      if(input.id === 7){
        input.value = convertToUrl
        input.using = true
        return input;
      }else{
        return input;
      }
    })
    setUserInputs(newState);
    changeFetch();
  }

  return (
    <>
          <PaintingCard artId={artId} paintingWasClicked={paintingWasClicked} closePainting={closePainting}/>
            <div className='content__container'>
              <Filter data={data?.facets} colorFilter={colorFilter}/>
              <SearchBar submit={submit} />
              <PageChange pageCounter={userInputs} prevPage={prevPage} nextPage={nextPage}/>
              {renderArt}
            </div>
    </>
  );
}

export default App;
