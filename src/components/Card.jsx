import React from 'react';
// import img1 from '../assets/image-qr-code.png';

const Card = () => {
  return (
    <>
      <div
        className='parent bg-blue-200 w-full-flex min-h-screen items-center
      justify-center'
      >
        <div className='child bg-red-200'>
          <div className=''>
            <img src='/public/images/image-qr-code.png' alt='qr' />
          </div>
          <div className='Para'>p1</div>
          <div className='para2'>p2</div>
        </div>
      </div>
    </>
  );
};

export default Card;
