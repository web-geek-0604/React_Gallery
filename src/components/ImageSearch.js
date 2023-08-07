import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit =(e) => {
        e.preventDefault();
        searchText(text);
    }

  return (
    <div className='flex w-[50%] md:w-[30%] lg:w-[50%] xl:w-[30%]  overflow-hidden mx-auto my-10'>

        <div className='flex items-center px-2 py-3'>
            <form  onSubmit={onSubmit} class="w-full max-w-sm">
  <div className="flex items-center border-b border-[#C0-500 py-2">
    <input onChange={e =>setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search for image..." />
    <button className="flex-shrink-0 bg-blue-800 hover:bg-gray-700  text-sm  text-white py-2 px-2" type="submit">
      Search
    </button>
  </div>
</form>
        </div>
    </div>
  )
}

export default ImageSearch;