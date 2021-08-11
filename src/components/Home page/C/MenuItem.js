import React from "react";

function MenuItem({ image, name, price }) {
  const imageAddress = `${image}`
  // const profileLink = `${link}`
  // console.log(link)
  // console.log(profileLink)
  return (
    <div className="menuItem" >
      {/* <a href={profileLink} style={{ textDecoration: 'none', color: 'black' }}> */}
      <div className="w-max p-5 rounded-md relative flex flex-col gap-y-3">

        <div>
          <img src={imageAddress} className='w-60 overflow-hidden bg-cover rounded-xl shadow-xl' alt='team' />
        </div>
        {/* <div style={{ backgroundImage: `url(${image})` }}> </div> */}

        <p className='font-semibold text-center text-2xl'> {name} </p>
        <p className='text-center lg:text-xl'> {price} </p>

      </div>
      {/* </a> */}
    </div>
  );
}

export default MenuItem;
