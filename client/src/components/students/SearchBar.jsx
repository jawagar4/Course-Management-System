import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ data }) => {

    const navigate = useNavigate();
    const [input, setInput] = useState(data ? data : '')

    const onSearchHandler = (e) => {
        e.preventDefault();
        navigate("/course-list/" + input);
    }

    return (
        <>
        <div className='align-center item-center mx-10'>
        <form onSubmit={onSearchHandler} className="flex items-center border pl-4 mx-auto gap-2 bg-white border-gray-500/20 h-[46px] rounded-full overflow-hidden max-w-lg w-full  mt-2">
            <img src={assets.search_icon} alt="search" className="w-5 h-5" />
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} className="w-full h-full outline-none text-sm text-gray-500/80" placeholder='Search for courses...' />
            <button type="submit"  className="bg-indigo-500 w-32 h-9 rounded-full text-sm text-white mr-[5px] cursor-pointer">Search</button>
        </form>
        </div>
        </>
    );
};
export default SearchBar;