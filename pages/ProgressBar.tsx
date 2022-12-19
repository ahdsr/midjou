import { CheckIcon } from '@heroicons/react/24/outline';
const steps = [
  {
    name: 'Vehicles',
    description: 'Your sweet rides',
    href: '#',
    status: 'current',
  },
  {
    name: 'Drivers',
    description: 'The people who drive them',
    href: '#',
    status: 'upcoming',
  },
  {
    name: 'Your Quote',
    description: 'Penatibus eu quis ante.',
    href: '#',
    status: 'upcoming',
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProgressBar() {
  return (
    <div className='w-32 pt-16 mx-auto'>
      {' '}
      <nav aria-label='Progress'>
        <ol role='list' className='py-4 overflow-hidden'>
          {steps.map((step, stepIdx) => (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== steps.length - 1 ? 'pb-10' : '',
                'relative'
              )}
            >
              {step.status === 'complete' ? (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className='absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-green-600'
                      aria-hidden='true'
                    />
                  ) : null}
                  <a
                    href={step.href}
                    className='relative flex items-start group'
                  >
                    <span className='flex items-center h-6'>
                      <span className='relative z-10 flex items-center justify-center w-8 h-8 bg-green-600 rounded-full group-hover:bg-green-800'>
                        <CheckIcon
                          className='w-5 h-5 text-white'
                          aria-hidden='true'
                        />
                      </span>
                    </span>
                    <span className='flex flex-col min-w-0 ml-4'>
                      <span className='text-sm font-medium'>{step.name}</span>
                      <span className='text-sm text-gray-500'></span>
                    </span>
                  </a>
                </>
              ) : step.status === 'current' ? (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className='absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300'
                      aria-hidden='true'
                    />
                  ) : null}
                  <a
                    href={step.href}
                    className='relative flex items-start group'
                    aria-current='step'
                  >
                    <span className='flex items-center h-6' aria-hidden='true'>
                      <span className='relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-green-600 rounded-full'>
                        <span className='h-2.5 w-2.5 rounded-full bg-green-600' />
                      </span>
                    </span>
                    <span className='flex flex-col min-w-0 ml-4'>
                      <span className='text-sm font-medium text-green-600'>
                        {step.name}
                      </span>
                      <span className='text-sm text-gray-500'></span>
                    </span>
                  </a>
                </>
              ) : (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className='absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300'
                      aria-hidden='true'
                    />
                  ) : null}
                  <a
                    href={step.href}
                    className='relative flex items-start group'
                  >
                    <span className='flex items-center h-6' aria-hidden='true'>
                      <span className='relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400'>
                        <span className='h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300' />
                      </span>
                    </span>
                    <span className='flex flex-col min-w-0 ml-4'>
                      <span className='text-sm font-medium text-gray-500'>
                        {step.name}
                      </span>
                      <span className='text-sm text-gray-500'></span>
                    </span>
                  </a>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
