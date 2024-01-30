'use client'

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";

import React from 'react'
import Select from 'react-select'

export const metadata: Metadata = {
  title: "PRAKTISI Pengguna",
  // other metadata
};

const UsersPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pengguna" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="grid grid-cols-3 gap-3 items-end py-6 px-4 md:px-6 xl:px-7.5">
            <div>
              <input
                type="text"
                placeholder="Kata kunci"
                className="w-full rounded-lg border-[1.5px] bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
              />
            </div>
            <div>
              <Select
                isMulti
                name="roles"
                placeholder="Peran"
                options={[
                  { value: 'PRAKTIKAN', label: 'PRAKTIKAN' },
                  { value: 'PRAKTISI', label: 'PRAKTISI' },
                ]}
                className="basic-multi-select"
                styles={{
                  control: (styles) => ({
                    ...styles,
                    paddingTop: '2px',
                    paddingBottom: '2px',
                    borderRadius: '8px',
                    border: '1.5px solid rgb(226, 232, 240)',
                  }),
                }}
                classNamePrefix="select"
              />
            </div>
            <div>
              <button className="flex justify-center rounded bg-primary py-2 px-5 font-medium text-gray">
                Cari
              </button>
            </div>
          </div>

          <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
            <div className="col-span-1 flex items-center">
              <p className="font-medium">No</p>
            </div>
            <div className="col-span-1 hidden items-center sm:flex">
              <p className="font-medium">NIM</p>
            </div>
            <div className="col-span-4 flex items-center">
              <p className="font-medium">Nama</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Peran</p>
            </div>
          </div>
          
          <div
            className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          >
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                1
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                2109116095
              </p>
            </div>
            <div className="col-span-4 flex items-center">
              <p className="text-sm text-black dark:text-white">
                Muhammad Novil Fahlevy
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <div className="flex gap-1">
                <span className="bg-white border border-primary text-primary py-1 px-3 rounded-md text-xs">PRAKTIKAN</span>
                <span className="bg-primary text-white py-1 px-3 rounded-md text-xs">PRAKTISI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
