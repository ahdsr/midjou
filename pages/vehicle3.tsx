import Link from 'next/link';

import Header from './Header';
import ProgressBar from './ProgressBar';
import SideBar from './SideBar';
import Bars from './Bars';

export default function Example() {
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
                    <div className='bg-green-600 h-1.5 rounded-full w-[20%]'></div>
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
                  How often do you drive this car?
                </h1>
                <div className='py-12'>
                  <div className='sm:col-span-3'>
                    <label className='block text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-300'>
                      Estimated Annual KMs
                    </label>
                    <div className='mt-2'>
                      <select
                        id='country'
                        name='country'
                        autoComplete='country-name'
                        className='block w-full py-2 pl-2 border border-gray-300 rounded-lg'
                      >
                        <option>0-2,000 KM</option>
                        <option>2,001-8,000 KM</option>
                        <option>8,001-16,000 KM</option>
                      </select>
                    </div>
                  </div>
                  <form action='/send-data-here' method='post'>
                    <div className='pt-8 '>
                      {' '}
                      <label for='first'>One way work commute distance </label>
                      <input
                        type='text'
                        id='first'
                        name='first'
                        className='block w-full py-2 pl-4 mt-2 border border-gray-300 rounded-lg focus:border focus:border-indigo-500 focus:ring-indigo-500'
                      />
                    </div>
                  </form>
                </div>
                {/* Back Next */}
                <div className='flex flex-row'>
                  <div className='flex-none'>
                    <Link href='vehicle2'>
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
                    <Link href='vehicle_summary1'>
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
