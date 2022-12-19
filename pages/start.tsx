import Link from 'next/link';
import Image from 'next/image';

function Avatar({ size, person }) {
  return (
    <Image
      src='https://images.unsplash.com/photo-1557244056-ac3033d17d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
      alt={person.name}
      width={size}
      height={size}
      className={'rounded-full w-auto h-auto'}
    />
  );
}

export default function Profile() {
  return (
    <div className='p-8 mx-auto'>
      <div className=''>
        <Avatar
          size={150}
          person={{
            name: 'Lin Lanying',
            imageId: '1bX5QH6',
          }}
        />
        <ol className='mt-4 space-y-2 '>
          <li className='p-2'>
            <Link href='vehicle1' className='p-3'>
              vehicle1.tsx
            </Link>
          </li>
          <li className='p-2'>
            <Link href='vehicle2' className='p-3'>
              vehicle2.tsx
            </Link>
          </li>
          <li className='p-2'>
            <Link href='vehicle3' className='p-3'>
              vehicle3.tsx
            </Link>
          </li>
          <li className='p-2'>
            <Link href='vehicle_summary1' className='p-3'>
              vehicle_summary1.tsx
            </Link>
          </li>
          <li className='p-2'>
            <Link href='vehicle1' className='p-3'>
              vehicle.tsx
            </Link>
          </li>
          <li className='p-2'>
            <Link href='driver1' className='p-3'>
              driver1.tsx
            </Link>
          </li>
          <li className='p-2'>
            <Link href='driver2' className='p-3'>
              driver2.tsx
            </Link>
          </li>
          <li className='p-2'>
            <Link href='driver3' className='p-3'>
              driver3.tsx
            </Link>
          </li>
          <li className='p-2'>
            <Link href='vehicle_summary2' className='p-3'>
              vehicle_summary2.tsx
            </Link>
          </li>
          <li className='p-2'>
            <Link href='quote' className='p-3'>
              quote.tsx
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
}
