import { useEffect, useState } from 'react'
import './App.scss'
import FilmListComponent from './components/FilmCard'
import SearchBar from './components/SearchBar'
import FilmCard from './components/FilmCard'

const apiKey=import.meta.env.VITE_API_KEY

const queryRequest= new URLSearchParams({
  api_key:apiKey,
}) 
/* 
const queryResearch= new URLSearchParams({
  api_key:apiKey,
  query:searchValue
}) 
 */
function App() {

  const [error,setError]=useState('')
  const [searchValue,setSearchValue]=useState('')
  const [filmList,setFilmList]=useState([])
  const [serchList,setSerchList]=useState([])
  const [selectedValue,setSelectedValue]=useState('')

  const request =async()=>{
    const response=await fetch(`https://api.themoviedb.org/3/movie/popular?${queryRequest.toString()}`)
    const obj= await response.json()
    setFilmList(obj.results)
  }
    
  useEffect(()=>{request()},[])

  const research =async(searchValue)=>{
    const queryRequest2= new URLSearchParams({
      api_key:apiKey,
      query:searchValue
    });
    if(selectedValue==='movie')
    {
      const response=await fetch( `https://api.themoviedb.org/3/search/movie?${queryRequest2.toString()}`)
      const obj= await response.json()
      setSerchList(obj.results)

    }else if(selectedValue==='series')
    {
      const response=await fetch( `https://api.themoviedb.org/3/search/tv?${queryRequest2.toString()}`)
      const obj= await response.json()
      setSerchList(obj.results)
      
    }else if(selectedValue==='person')
    {
      const response=await fetch( `https://api.themoviedb.org/3/search/person?${queryRequest2.toString()}`)
      const obj= await response.json()
      setSerchList(obj.results)
    }
  }

  console.log(filmList)
  
  return (
    <>
      <div className='Popular'>
        <h2>Popular Film</h2>
        <div className='filmList'>
          {filmList.map((film)=>{
            return (
              <FilmCard key={film.id}
              film={film}
              />
            )
          })}
        </div>
      </div>
        <div>
          <SearchBar
            onSearch={(searchValue)=>{setSearchValue(searchValue)
                                      research(searchValue)}}
          onSelect={(selectedValue)=>{setSelectedValue(selectedValue)}}
                                    />
          <div className='result'>
            {serchList.length!==0 &&
            <div>
              <h2 className='searchbarTitle'>Result</h2>
              <div className='filmList'>
                {serchList.map((film=>{
                  return (
                    <FilmCard key={film.id}
                      film={film}
                    />
                  )
                }))}
            </div>
            </div>
            }
          </div>
       
        </div> 
      
    </>
  )
}

export default App
