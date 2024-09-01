import Link from 'next/link';

import { Button } from '../ui/button';

const mainNavItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Blogs', path: '/blogs' },
];

export default function MainNav() {
  return (
    <div className='mr-4 hidden gap-2 md:flex'>
      {mainNavItems.map((item, index) => (
        <Button key={index} variant='link'>
          <Link href={item?.path}>{item?.label}</Link>
        </Button>
      ))}
    </div>
  );
}
