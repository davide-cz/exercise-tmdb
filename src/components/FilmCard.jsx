import { Fragment, useState } from "react"

export default function ({film}){

    const [showOverwiew,setShowOverwiew]=useState(false)
    //film card per ogni elemento della lista 
    
    return (
        <div className='filmCard'>
            <figure>
                <h3 className="filmTitle textClass" >{film.title}</h3>
                <div className="imgContainer">
                    <img src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} alt="" />
                </div>
                <button onClick={()=>{setShowOverwiew(!showOverwiew)}}>Show Description</button>
                {showOverwiew && <div className="description textClass">{film.overview}</div>}
            </figure>

       
        </div>
    )
}