import React, { useState,useEffect} from 'react'
import axios from 'axios';
function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://child.onrender.com/api/sciencefiction')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className=' relative rounded-r-md overflow-hidden flex justify-center flex-wrap gap-10 w-full p-14 truncate h-auto bg-gradient-to-r from-blue-300 to-blue-900'>
      {data.map(item => (
        <div key={item._id} className="w-64 pl-[22px] py-5 h-72  rounded-lg bg-gradient-to-r from-blue-700 to-blue-300"> 
        <div className=" cardImage"><img className='rounded-lg h-44 w-[215px]' src={` https://ik.imagekit.io/dev24/${item.Image}`} alt={item.Title} />
        </div> 
        <div className="title mt-2 mb-3 whitespace-nowrap w-52 truncate">
        {item.Title}</div>
        
        <div className='flex justify-center align-middle p-1 mr-5 border-2 bg-white text-black rounded-[18px]'>{item.Status}</div>
        </div>
        
      ))}   
      
      </div>
    
  )
}

export default Card;