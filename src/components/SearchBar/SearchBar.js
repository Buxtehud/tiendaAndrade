import {SearchIcon} from '@heroicons/react/solid';
import { useEffect, useState } from 'react';

function SearchBar(){
    const [keyword,setKeyword] = useState("");

    const changeHandler = (wordSearched) => {
        setKeyword(wordSearched);
    }

    useEffect(() => {
        console.log(keyword);
    },[keyword]);

    return(
    <div className='flex flex-row border-shopSecond border-2 p-1 rounded-md'>
        <SearchIcon className='h-6 w-6' />
        <input className='px-2 focus:outline-none bg-transparent' placeholder='Búsqueda' onKeyUp={(e) => changeHandler(e.target.value)}></input>
    </div>
    )
}

export default SearchBar;