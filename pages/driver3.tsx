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
                    Step 2 of 3
                  </div>
                  <div className='mb-1 text-lg font-semibold'>Walter White</div>

                  <div className='w-full h-1.5 bg-gray-200 rounded-full dark:bg-slate-200'>
                    <div className='bg-green-600 h-1.5 rounded-full w-[55%]'></div>
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
                  A few simple questions about your drivers license
                </h1>

                <div className='py-12'>
                  <div className='pb-8'>
                    <p className='mb-3 '>
                      What is your current license class??
                    </p>
                    <div className='py-1'>
                      <input
                        type='radio'
                        value='Male'
                        name='1'
                        className='w-6 h-6 mr-2 align-middle '
                      />{' '}
                      G1
                    </div>
                    <div className='py-1'>
                      <input
                        type='radio'
                        value='Male'
                        name='1'
                        className='w-6 h-6 mr-2 align-middle '
                      />{' '}
                      G2
                    </div>
                    <div className='py-1'>
                      <input
                        type='radio'
                        value='Male'
                        name='1'
                        className='w-6 h-6 mr-2 align-middle '
                      />{' '}
                      G
                    </div>
                  </div>
                  <div className='pb-8'>
                    <p className='mb-3 '>
                      Did you get your license in Ontario?
                    </p>
                    <div className='py-1'>
                      <input
                        type='radio'
                        value='Male'
                        name='3'
                        className='w-6 h-6 mr-2 align-middle '
                      />{' '}
                      Yes
                    </div>
                    <div className='py-1'>
                      <input
                        type='radio'
                        value='Male'
                        name='3'
                        className='w-6 h-6 mr-2 align-middle '
                      />{' '}
                      No
                    </div>
                  </div>
                  <div className='pb-8'>
                    {' '}
                    <label for='first'>
                      At what age did you recieve this license?{' '}
                    </label>
                    <input
                      type='text'
                      id='first'
                      name='4'
                      className='block w-full py-2 pl-4 mt-2 border border-gray-300 rounded-lg focus:border focus:border-indigo-500 focus:ring-indigo-500'
                    />
                  </div>
                  <div className='pb-8'>
                    <p className='mb-3 '>
                      Did you complete driver training in the last 3 years?
                    </p>
                    <div className='py-1'>
                      <input
                        type='radio'
                        value='Male'
                        name='5'
                        className='w-6 h-6 mr-2 align-middle '
                      />{' '}
                      Yes
                    </div>
                    <div className='py-1'>
                      <input
                        type='radio'
                        value='Male'
                        name='5'
                        className='w-6 h-6 mr-2 align-middle '
                      />{' '}
                      No
                    </div>
                  </div>
                </div>

                {/* Back Next */}
                <div className='flex flex-row'>
                  <div className='flex-none'>
                    <Link href='driver2'>
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
                    <Link href='vehicle_summary2'>
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
