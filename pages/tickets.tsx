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
                <Bars></Bars>
              </div>
              <div className='max-w-4xl px-6 mx-auto sm:px-20'>
                <h1 className='text-2xl font-Display md:text-4xl md:leading-snug'>
                  Any tickets or minor violations?
                </h1>

                <div className='py-12'>
                  <div className='pb-8'>
                    <p className='mb-2'>
                      Have you had any in the last 3 years?
                    </p>
                    <div>
                      <input type='radio' value='Male' name='gender' /> Yes
                    </div>
                    <div>
                      <input type='radio' value='Male' name='gender' /> No
                    </div>
                  </div>
                  <div className='pb-8'>
                    <p className='mb-2'>
                      Have you had any suspensions in the last 6 years?
                    </p>
                    <div>
                      <input type='radio' value='Male' name='gender' /> Yes
                    </div>
                    <div>
                      <input type='radio' value='Male' name='gender' /> No
                    </div>
                  </div>
                  <div className='pb-8'>
                    <p className='mb-2'>Has your insurance been cancelled?</p>
                    <div>
                      <input type='radio' value='Male' name='gender' /> Yes
                    </div>
                    <div>
                      <input type='radio' value='Male' name='gender' /> No
                    </div>
                  </div>
                </div>

                <Link href='vehicle_summary2'>
                  <button
                    type='button'
                    className='mb-8 inline-flex items-center px-5 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-green-500'
                  >
                    Next
                  </button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
