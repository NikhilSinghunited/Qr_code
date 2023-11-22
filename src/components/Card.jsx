import React from 'react';
// import img1 from '../assets/image-qr-code.png';

const Card = () => {
  return (
    <div
      className='parent bg-sky-200 w-full flex min-h-screen items-center
      justify-center '
    >
      <div className='child bg-white w-[400px] rounded-xl'>
        <div className=' flex justify-center items-center w-full bg-white rounded-xl mx-auto '>
          <img
            className='rounded-xl p-2 w-full  mx-auto'
            src='/public/images/image-qr-code.png'
            alt='qr'
          />
        </div>
        <div className='text-xl font-medium text-black >'>
          <h3 className='text-center text-2xl '>
            This is smart barcode scanner code
          </h3>
        </div>
        <div className='text-xl mx-auto'>
          <p className='text-center text-4xl mt-4'>
            scan the qr code to visited fronted mentor
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
