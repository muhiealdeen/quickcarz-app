'use client';
import { Fragment, useState } from 'react';
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
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options>
            <Combobox.Option value="VolkesWagen" />
            <Combobox.Option value="Toyota" />
            <Combobox.Option value="Mercedes" />
            <Combobox.Option value="BMW" />
          </Combobox.Options>
        </Transition>
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
