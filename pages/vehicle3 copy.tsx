import Link from 'next/link';

import Header from './Header';
import ProgressBar from './ProgressBar';

import SideBar from './SideBar';
const steps = [
  {
    name: 'Vehicles',
    description: 'Your sweet rides',
    href: '#',
    status: 'complete',
  },
  {
    name: 'Drivers',
    description: 'The people who drive them',
    href: '#',
    status: 'current',
  },
  {
    name: 'Your Quote',
    description: 'Penatibus eu quis ante.',
    href: '#',
    status: 'upcoming',
  },
];
export default function Example() {
  return (
    <>
      <div className='sticky top-0 z-10'>
        <Header></Header>
      </div>
      <div className='flex'>
        <SideBar></SideBar>

        <div className='fixed hidden w-1/3 h-screen bg-slate-50 lg:block'>
          <ProgressBar></ProgressBar>
        </div>
        <div className='w-full h-screen text-gray-700 bg-white'>
          <main className='flex-1'>
            <div className='lg:mt-16 xl:px-24 lg:ml-96'>
              <div className='px-6 mx-auto mb-12 max-w-7xl sm:px-20 lg:hidden'>
                <nav aria-label='Progress'>
                  <ol role='list' className='flex space-x-2 '>
                    {steps.map((step) => (
                      <li key={step.name} className='flex-1'>
                        {step.status === 'complete' ? (
                          <a
                            href={step.href}
                            className='flex flex-col py-2 pl-4 border-t-4 border-green-600 group hover:border-green-800 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0'
                          >
                            <span className=' font-medium text-green-600 group-hover:text-green-800'>
                              {step.id}
                            </span>
                            <span className=' font-medium'>{step.name}</span>
                          </a>
                        ) : step.status === 'current' ? (
                          <a
                            href={step.href}
                            className='flex flex-col py-2 pl-4 border-t-4 border-green-600 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0'
                            aria-current='step'
                          >
                            <span className=' font-medium text-green-600'>
                              {step.id}
                            </span>
                            <span className=' font-medium'>{step.name}</span>
                          </a>
                        ) : (
                          <a
                            href={step.href}
                            className='flex flex-col py-2 pl-4 border-t-4 border-gray-200 group hover:border-gray-300 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0'
                          >
                            <span className=' font-medium text-gray-500 group-hover:text-gray-700'>
                              {step.id}
                            </span>
                            <span className=' font-medium'>{step.name}</span>
                          </a>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>

              <div className='max-w-4xl px-6 mx-auto sm:px-20'>
                <h1 className='text-2xl font-Display md:text-4xl md:leading-snug'>
                  How often do you drive this car?
                </h1>

                <div className='py-12'>
                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='country'
                      className='block text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-300'
                    >
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
                <Link href='vehicle_summary1'>
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
