import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  return (
    <div className="px-3 py-3 max-h-[50%]  my-2  bg-white max-w-sm rounded overflow-fidden shadow-lg">
    <img src={image.webformatURL} alt='prop' className='w-full'/>
    <div className='px-6 py-4'>
      <div className='font-bold text-blue-500 text-xl mb-2'>
        Photo by {image.user}
      </div>
      <ul>
        <li>
          <strong>Views: </strong>
          {image.views}
        </li>
        <li>
          <strong>Downloads: </strong>
          {image.downloads}
        </li>
        <li>
          <strong>Likes: </strong>
          {image.likes}
        </li>
      </ul>
    </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) =>(
                  <span key={index}  className=" text-white inline-block bg-blue-600 rounded-full px-3 py-1 m text-sm font-semibold  mx-2 my-2">
                  #{tag}
                </span>
        ))}
      </div>
  </div>
  )
}

export default ImageCard;