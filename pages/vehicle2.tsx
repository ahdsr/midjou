import Link from 'next/link';

import Header from './Header';
import ProgressBar from './ProgressBar';
import SideBar from './SideBar';
import Bars from './Bars';

import React, { useState } from 'react';

import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';

export default function Example() {
  const [selectedDay, setSelectedDay] = useState(null);
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
                    <div className='bg-green-600 h-1.5 rounded-full w-[10%]'></div>
                  </div>
                </div>
                {/* <Bars
                  step='Step 2 of 3'
                  name='Drivers'
                  status='upcoming'
                ></Bars> */}
              </div>
              <div className='max-w-4xl px-6 mx-auto sm:px-20'>
                <h1 className='text-2xl font-Display md:text-4xl md:leading-snug'>
                  Tell me more about your brand new Audi.
                </h1>

                <div className='py-12'>
                  <div className='pb-8 '>
                    <p className='mb-3 '>Condition at purchases</p>
                    <div className='py-1'>
                      <input
                        type='radio'
                        value='Male'
                        name='gender'
                        className='w-6 h-6 mr-2 align-middle '
                      />{' '}
                      New
                    </div>
                    <div className='py-1'>
                      <input
                        type='radio'
                        value='Male'
                        name='gender'
                        className='w-6 h-6 mr-2 align-middle '
                      />{' '}
                      Used
                    </div>
                  </div>

                  <div className='pb-8'>
                    <p className='mb-3 '>Do you own or lease?</p>
                    <div className='py-1'>
                      <input
                        type='radio'
                        value='Male'
                        name='gender'
                        className='w-6 h-6 mr-2 align-middle '
                      />{' '}
                      Own
                    </div>
                    <div className='py-1'>
                      <input
                        type='radio'
                        value='Male'
                        name='gender'
                        className='w-6 h-6 mr-2 align-middle '
                      />{' '}
                      Own (Finance)
                    </div>
                    <div className='py-1'>
                      <input
                        type='radio'
                        value='Male'
                        name='gender'
                        className='w-6 h-6 mr-2 align-middle '
                      />{' '}
                      Lease
                    </div>
                  </div>

                  <div className='pb-8'>
                    <label
                      htmlFor='country'
                      className='block text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-300'
                    >
                      When did you lease this car?
                    </label>
                    <div className='mt-2'>
                      <DatePicker
                        value={selectedDay}
                        onChange={setSelectedDay}
                        inputPlaceholder='Select a day'
                        shouldHighlightWeekends
                      />
                    </div>
                  </div>

                  <div>
                    <div className='p-2 border border-solid rounded-md border-slate-300'>
                      <input
                        id='comments'
                        aria-describedby='comments-description'
                        name='comments'
                        type='checkbox'
                        className='w-6 h-6 mr-2 align-middle bg-green-700'
                      />
                      <span className='ml-2'>
                        This car is equiped with winter tires?
                      </span>{' '}
                    </div>
                  </div>
                </div>
                {/* Back Next */}
                <div className='flex flex-row'>
                  <div className='flex-none'>
                    <Link href='vehicle1'>
                      <button
                        type='button'
                        className='inline-flex items-center px-8 py-4 mb-8 font-medium bg-white border rounded-full shadow-sm border-slate-500 text-slate-700 hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-green-500'
                      >
                        Back
                      </button>
                    </Link>
                  </div>
                  <div className='grow'></div>
                  <div className='flex-none'>
                    <Link href='vehicle3'>
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
