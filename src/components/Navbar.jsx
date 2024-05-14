import React from 'react'

function Navbar() {
  return (
    <div className='w-full fixed z-[999] px-20 py-8 flex justify-between'>
      <div className="logo">
        BrainlyLingo
      </div>
      <div className="links w-1/4  flex gap-10">
        {["Home","LeaderBoard","Daily Quiz","genre"].map((item,index)=>(
          <a key={index} className='text-sm font-light capitalize'>{item}</a>
        ))}
      </div>
      <button className="justify-end border-[1px] border-none rounded-[25px] px-6 py-2 bg-gradient-to-r from-blue-900 to-blue-100 text-[12px] ">Sign Out</button>
    </div>
  )
}

export default Navbar;