const steps = [
  {
    id: '1',
    step: 'one',
    name: 'Vehicles',
    status: 'current',
    href: '',
  },
  {
    id: '2',
    step: 'two',
    name: 'Drivers',
    status: 'upcoming',
    href: '',
  },
  {
    id: '3',
    step: 'three',
    name: 'Your Quote',
    status: 'upcoming',
    href: '',
  },
];

export default function Bars(props) {
  return (
    <div className=''>
      <nav aria-label='Progress'>
        <div className='mb-1 text-sm font-medium uppercase'>{props.step}</div>
        <div className='mb-1 text-lg font-Display'>{props.name}</div>
        <ol role='list' className='flex space-x-2 '>
          {steps.map((step) => (
            <li key={step.name} className='flex-1'>
              {step.status === 'complete' ? (
                <a
                  href={step.href}
                  className='flex flex-col py-2 pl-4 border-t-4 border-green-600 group hover:border-green-800 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0'
                >
                  <span className='text-sm font-medium text-green-600 group-hover:text-green-800'>
                    {/* {step.id} */}
                  </span>
                </a>
              ) : step.status === 'current' ? (
                <a
                  href={step.href}
                  className='flex flex-col py-2 pl-4 border-t-4 border-green-600 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0'
                  aria-current='step'
                >
                  <span className='text-sm font-medium text-green-600'>
                    {/* {step.id} */}
                  </span>
                  <span className='text-sm font-medium'>
                    {/* {step.name} */}
                  </span>
                </a>
              ) : (
                <a
                  href={step.href}
                  className='flex flex-col py-2 pl-4 border-t-4 border-gray-200 group hover:border-gray-300 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0'
                >
                  <span className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
                    {/* {step.id} */}
                  </span>
                  <span className='text-sm font-medium'>
                    {/* {step.name} */}
                  </span>
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
