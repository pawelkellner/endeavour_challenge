import { useEffect, useState } from 'react';
import useFetch from '../../useFetch';
import Art from '../Art/Art';
import Loader from '../Loader/Loader';
import PageChange from '../PageChange/PageChange';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

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
  ])

  console.log(userInputs)
  const [currentFetch, setCurrentFetch] = useState(`https://www.rijksmuseum.nl/api/nl/collection?key=woJOHsSM`);
  const {data, loading, error, refetch} = useFetch(currentFetch);

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
  }

  if (error) console.log(error);

  const renderArt = data?.artObjects.map((art, index) =>{
    return <Art key={index} art={art}/>
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
      if(input.id === 2){
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

  return (
    <div className='content__container'>
      <SearchBar submit={submit} />
      <PageChange pageCounter={userInputs} prevPage={prevPage} nextPage={nextPage}/>
      {renderArt}
    </div>
  );
}

export default App;
