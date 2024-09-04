// components/SeachManufacturer.tsx
'use client';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import { searchManufacturerProps } from '@/types';
import { Combobox, Transition, ComboboxButton } from '@headlessui/react';
import { manufacturers } from '@/constants';
import React from 'react';

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: searchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((manufacturer) =>
          manufacturer
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );
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
            {
              // filteredManufacturers.length === 0 && query !== '' ? (
              //   <Combobox.Option
              //     value={query}
              //     className="search-manufacturer__option"
              //   >
              //     Sorry, we couldn't find any cars for:{' '}
              //     <span className="font-bold">"{query}"</span>
              //   </Combobox.Option>
              // ) : (
              filteredManufacturers.map(
                (manufacturer) => (
                  <Combobox.Option
                    key={manufacturer}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? `bg-primary-blue text-white` : `text-gray-900`
                      }`
                    }
                    value={manufacturer}
                  >
                    {manufacturer}
                  </Combobox.Option>
                ),
                // )
              )
            }
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
