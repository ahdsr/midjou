import Image from 'next/image';
import Link from 'next/link';

import Header from './Header';
import ProgressBar from './ProgressBar';
import SideBar from './SideBar';
import Bars from './Bars';

const people = [
  {
    name: 'VEHICLE 1',
    email: '23leslie.alexander@example.com',
    role: '2022 Audi RS5 Sportback 2.9 TFSI Quatra',
    imageUrl:
      'data:image/png;base64,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',
  },
  {
    name: 'Add Vehicle',
    email: 'leslie.alexander@example.com',
    role: '2022 Audi RS5 Sportback 2.9 TFSI Quatra',
    imageUrl:
      'data:image/png;base64,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',
  },

  // More people...
];

const cars = [
  {
    name: 'DRIVER 1',
    email: 'leslie.alexander@example.com',
    role: 'Walter White',
    imageUrl:
      'https://visualpharm.com/assets/182/Driver-595b40b65ba036ed117d1b66.svg',
  },

  // More people...
];

export default function Example() {
  return (
    <>
      <Header></Header>

      <div className='flex'>
        <SideBar></SideBar>

        <div className='fixed hidden w-1/3 h-screen bg-slate-50 lg:block'>
          <ProgressBar step='two'></ProgressBar>
        </div>
        <div className='w-full h-screen text-gray-700 bg-white'>
          <main className='flex-1'>
            <div className='lg:mt-16 xl:px-24 lg:ml-96'>
              <div className='px-6 pt-4 mx-auto mb-12 max-w-7xl lg:hidden bg-slate-50'>
                <div>
                  <div className='mb-1 text-sm font-bold tracking-wide uppercase text-slate-400'>
                    Step 2 of 3
                  </div>
                  <div className='mb-1 text-lg font-semibold'>Drivers</div>

                  <div className='w-full h-1.5 bg-gray-200 rounded-full dark:bg-slate-200'>
                    <div className='bg-green-600 h-1.5 rounded-full w-[80%]'></div>
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
                  Would you like to add more vehicles or continue to drivers?
                </h1>

                <div className='py-12'>
                  <div className='grid grid-cols-1 gap-2 mb-4 sm:grid-cols-2'>
                    {people.map((person) => (
                      <div
                        key={person.email}
                        className='relative flex items-center px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-1 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400'
                      >
                        <div className='hidden flex-shrink-1 sm:block'>
                          <Image
                            className='w-10 h-10 rounded-full'
                            src={person.imageUrl}
                            alt=''
                          />
                        </div>
                        <div className='flex-1 min-w-0'>
                          <a href='#' className='focus:outline-none'>
                            <span
                              className='absolute inset-0'
                              aria-hidden='true'
                            />
                            <p className='font-medium text-gray-900 '>
                              {person.name}
                            </p>
                            <p className='text-gray-500'>{person.role}</p>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href='vehicle1'>
                    <button
                      type='button'
                      className='inline-flex items-center px-5 py-3 text-sm text-gray-800 border rounded-full shadow-sm border-slate-300 bg-white-600 hover:bg-slate-50 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-green-500'
                    >
                      Add vehicle
                    </button>
                  </Link>
                </div>

                <div className='py-12'>
                  <div className='grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2'>
                    {cars.map((car) => (
                      <div
                        key={car.email}
                        className='relative flex items-center px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-1 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400'
                      >
                        <div className='flex-shrink-0'>
                          <Image
                            className='w-10 h-10 rounded-full'
                            src={car.imageUrl}
                            alt=''
                          />
                        </div>
                        <div className='flex-1 min-w-0'>
                          <a href='#' className='focus:outline-none'>
                            <span
                              className='absolute inset-0'
                              aria-hidden='true'
                            />
                            <p className='font-medium text-gray-900 '>
                              {car.name}
                            </p>
                            <p className='text-gray-500 truncate '>
                              {car.role}
                            </p>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href='driver3'>
                    <button
                      type='button'
                      className='inline-flex items-center px-5 py-3 text-sm text-gray-800 border rounded-full shadow-sm border-slate-300 bg-white-600 hover:bg-slate-50 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-green-500'
                    >
                      Add driver
                    </button>
                  </Link>
                </div>

                {/* Back Next */}
                <div className='flex flex-row'>
                  <div className='flex-none'>
                    <Link href='driver3'>
                      <button
                        type='button'
                        className='inline-flex items-center px-8 py-5 text-sm text-gray-800 border rounded-full shadow-sm border-slate-300 bg-white-600 hover:bg-slate-50 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-green-500'
                      >
                        Back
                      </button>
                    </Link>
                  </div>
                  <div className='grow'></div>
                  <div className='flex-none'>
                    <Link href='quote'>
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
