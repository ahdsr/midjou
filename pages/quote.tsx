import Link from 'next/link';

import { useState } from 'react';

import Header from './Header';
import ProgressBar from './ProgressBar';
import SideBar from './SideBar';
import LottieAnim from './LottieLoader';
import Bars from './Bars';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const actions = [
  {
    title: 'Bodily Injury',
    href: '#',
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
    description:
      'This one protects you and other drivers listed on your policy in the event someone else is injured or killed in an accident. ',
  },
  {
    title: 'Property Damage',
    href: '#',
    icon: CheckBadgeIcon,
    iconForeground: 'text-slate-700',
    iconBackground: 'bg-slate-50',
    description:
      "This coverage* protects you if someone else's property is damaged as a result of an automobile accident.",
  },
  {
    title: 'Direct Compensation - Property Damage',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
    description:
      "With this coverage, if you're in an accident that's not your fault, or not completely your fault.",
  },
  {
    title: 'Payroll',
    href: '#',
    icon: BanknotesIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
    description:
      'Bodily Injury coverage* protects you and other drivers listed on your policy in the event someone else is injured or killed in an accident, and you are held legally responsible.',
  },
  {
    title: 'Submit an expense',
    href: '#',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
    description:
      'Bodily Injury coverage* protects you and other drivers listed on your polic.',
  },

  {
    title: 'Training',
    href: '#',
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
    description:
      'Bodily Injury coverage* protects you and other drivers listed on your policy in the event someone else is injured or killed in an accident, and you are held legally responsible, as well as any legal fees you may incur. Unless your vehicle is being stored, liability coverage is required by law.',
  },
];

const people = [
  {
    name: 'VEHICLE 1',
    email: 'leslie.alexander@example.com',
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

const plans = [
  {
    name: 'Monthly',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Annually',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selected, setSelected] = useState(plans[0]);
  return (
    <>
      <Header></Header>

      <div className='flex'>
        <SideBar></SideBar>

        <div className='hidden w-1/3 h-screen bg-slate-50 lg:block'>
          <ProgressBar></ProgressBar>
        </div>
        <div className='w-full h-screen text-gray-700 bg-white s lg:w-2/3'>
          <main className='flex-1'>
            <div className='px-2 mt-16 sm:px-4 md:px-12 lg:px-16 xl:px-24 2xl:px-40'>
              {/* <div className='px-6 pt-4 mx-auto mb-12 max-w-7xl lg:hidden bg-slate-50'>
                <Bars></Bars>
              </div> */}
              <div className='px-6 mt-8'>
                <h1 className='px-2 text-4xl font-Display md:text-4xl md:leading-snug'>
                  Walter, here's a detailed summary of your quote
                </h1>
                <div className='py-12 text-4xl font-semibold font-Display'>
                  $247.58 <div className='text-sm'>per month</div>
                </div>

                <div className='flex-none'>
                  <Link href='quote'>
                    <button
                      type='button'
                      className='inline-flex items-center py-4 mb-8 text-lg font-medium text-white bg-green-600 border border-transparent rounded-full shadow-sm px-7 hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-green-500'
                    >
                      Buy Online
                    </button>
                  </Link>
                </div>

                <div>Or call us at 1-877-277-7482</div>
                <LottieAnim></LottieAnim>
                <div className='py-12'>
                  <div className='w-full mx-auto bg-white rounded-2xl'>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className='flex justify-between w-full py-4 text-left border-t text-slate-900 border-t-slate-300 '>
                            <span>What's Included</span>
                            <ChevronUpIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-slate-500`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className='pt-4 pb-2 text-gray-500 bg-slate-50'>
                            <div className='overflow-hidden divide-y sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 '>
                              {actions.map((action, actionIdx) => (
                                <div
                                  key={action.title}
                                  className={classNames(
                                    actionIdx === 0 ? '' : '',
                                    actionIdx === 1 ? '' : '',
                                    actionIdx === actions.length - 2 ? '' : '',
                                    actionIdx === actions.length - 1 ? '' : '',
                                    'relative group p-6 focus-within:ring-1 focus-within:ring-inset focus-within:ring-slate-100 bg-slate-50'
                                  )}
                                >
                                  <div>
                                    <span
                                      className={classNames(
                                        action.iconBackground,
                                        action.iconForeground,
                                        'rounded-lg p-3 ring-4 ring-white align-middle hidden 2xl:inline-flex'
                                      )}
                                    >
                                      <action.icon
                                        className='w-6 h-6'
                                        aria-hidden='true'
                                      />
                                    </span>
                                    {action.title}
                                  </div>
                                  <div className='mt-8'>
                                    <h3 className='text-lg font-medium'>
                                      <div>
                                        <div className=''>
                                          <div className='mt-2 mb-4'>
                                            <select
                                              id='country'
                                              name='country'
                                              autoComplete='country-name'
                                              className='block w-full py-2 pl-2 text-base border border-gray-300 rounded-lg'
                                            >
                                              <option>$1,000,000 Limit</option>
                                              <option>$2,000,000 Limit</option>
                                              <option>$4,000,000 Limit</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </h3>
                                    <div>{action.description}</div>
                                    <p className='mt-2 text-gray-500'></p>
                                  </div>
                                  <span
                                    className='absolute text-gray-300 pointer-events-none top-6 right-6 group-hover:text-gray-400'
                                    aria-hidden='true'
                                  >
                                    <svg
                                      className='w-6 h-6'
                                      xmlns='http://www.w3.org/2000/svg'
                                      fill='currentColor'
                                      viewBox='0 0 24 24'
                                    >
                                      <path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
                                    </svg>
                                  </span>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure as='div' className=''>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className='flex justify-between w-full py-4 text-left border-t text-slate-900 border-t-slate-300 focus:bg-white'>
                            <span>Optional coverages</span>
                            <ChevronUpIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-slate-500`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                            <div className='grid grid-cols-2 gap-4'>
                              <div>1</div>
                              <div>2</div>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>

                <div className='py-12'></div>

                {/* Back Next */}
                <div className='flex flex-row'>
                  <div className='flex-none'></div>
                  <div className='grow'></div>
                  <div className='flex-none'>
                    <Link href='vehicle1'>
                      <button
                        type='button'
                        className='inline-flex items-center py-5 mb-8 font-medium text-white bg-green-600 border border-transparent rounded-full shadow-sm px-7 hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-green-500'
                      >
                        Buy
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

function CheckIcon(props) {
  return (
    <svg viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
      <path
        d='M7 13l3 3 7-7'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
