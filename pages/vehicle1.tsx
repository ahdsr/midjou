import Link from 'next/link';

import React, { useState } from 'react';

import Header from './Header';
import ProgressBar from './ProgressBar';
import SideBar from './SideBar';
import Bars from './Bars';

const variants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0.1, scale: 0.5 },
};

export default function Example() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Header></Header>

      <div className='flex'>
        <SideBar></SideBar>

        <div className='fixed hidden w-1/3 h-screen bg-slate-50 lg:block'>
          <ProgressBar></ProgressBar>
        </div>
        <div className='w-full h-screen text-gray-700 bg-white'>
          <main className='flex-1'>
            <div className='lg:mt-16 xl:px-24 lg:ml-96'>
              <div className='px-6 pt-4 mx-auto mb-12 max-w-7xl lg:hidden bg-slate-50'>
                <div>
                  <div className='mb-1 text-sm font-bold tracking-wide uppercase text-slate-400'>
                    Step 1 of 3
                  </div>
                  <div className='mb-1 text-lg font-semibold'>Vehicles</div>

                  <div className='w-full h-1.5 bg-gray-200 rounded-full dark:bg-slate-200'>
                    <div className='bg-green-600 h-1.5 rounded-full w-[5%]'></div>
                  </div>
                </div>
                {/* <Bars
                  step='Step 2 of 3'
                  name='Drivers'
                  status='upcoming'
                ></Bars> */}
              </div>
              <div className='max-w-4xl px-6 mx-auto sm:px-20'>
                {/* <motion.nav
                  animate={isOpen ? 'open' : 'closed'}
                  variants={variants}
                >
                  <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                    <h1 className='text-3xl bg-slate-400'>asdasd</h1>
                  </div>
                </motion.nav> */}
                <h1 className='text-2xl font-Display md:text-4xl md:leading-snug'>
                  OK, which vehicles are you looking to get insured?
                </h1>

                <div className='py-12'>
                  <div className=''>
                    <label
                      htmlFor='country'
                      className='block text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-300'
                    >
                      Vehicle
                    </label>
                    <div className='mt-2'>
                      <select
                        id='country'
                        name='country'
                        autoComplete='country-name'
                        className='block w-full py-2 pl-2 border border-gray-300 rounded-lg'
                      >
                        <option>2022 Audi RS 5</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                  <div className='p-4 mt-4 bg-gray-50'>
                    If your vehicle doesn&apos;t show up in the list above, give
                    us a call at 1-888-231-2334 or start a chat with our
                    customer rep.
                  </div>
                </div>

                {/* Back Next */}
                <div className='flex flex-row'>
                  <div className='grow'></div>
                  <div className='flex-none'>
                    <Link href='vehicle2'>
                      <button
                        type='button'
                        className='inline-flex items-center px-8 py-4 mb-8 font-medium text-white bg-green-600 border border-transparent rounded-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-green-500'
                      >
                        Next
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Back Next */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
