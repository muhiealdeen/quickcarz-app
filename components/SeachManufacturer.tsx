'use client';
import { useState } from 'react';
import Image from 'next/image';
import { searchManufacturerProps } from '@/types';
import { Combobox, Transition, ComboboxButton } from '@headlessui/react';
import React from 'react';

const SeachManufacturer = ({
  manufacturer,
  setManufacturer,
}: searchManufacturerProps) => {
  const [query, setQuery] = useState('');
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </ComboboxButton>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="VolkesWagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </Combobox>
      {/* <input
        type="text"
        value={manufacturer}
        onChange={(e) => setManufacturer(e.target.value)}
        placeholder="Search Manufacturer"
      /> */}
    </div>
  );
};

export default SeachManufacturer;
