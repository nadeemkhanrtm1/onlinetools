'use client';
import { Menu as MenuIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const mobileItems = ['A', 'B', 'C'];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side='left'>
        <div className='flex flex-col items-start'>
          {mobileItems.map((item, index) => (
            <Button
              key={index}
              variant='link'
              onClick={() => {
                setOpen(false);
              }}
            >
              {item}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
