import { useState } from "react"

export default function ({onSearch, onSelect}){

    const [value,setValue]=useState('')
    const [selectValue,setSelectValue]=useState('')

    return (

        <>
            <h2 className="searchbarTitle">Find Movies, Series or Persons</h2>
            <select name="options" id="SelectContent" value={selectValue} 
                onChange={e=>{setSelectValue(e.target.value)}}>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="person">Person</option>
            </select>
            <input type="text" value={value} onChange={e=>setValue(e.target.value)}/>
            <button 
            onClick={()=>{
                onSelect(selectValue)
                onSearch(value)
                }}>search</button>
        </>
    )
}