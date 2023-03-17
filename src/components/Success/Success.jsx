import React from 'react';
import logo from '../../assets/image/Subtract.png'
const Success = () => {
    return (
        <div className='flex justify-center items-center w-[100%] h-[100vh]'>
            <div>
                <img src={logo} alt="" className='mx-auto mb-5'/>
                <p className='font-semibold text-blue'>Success</p>
            </div>
        </div>
    );
};

export default Success;