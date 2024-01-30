'use client'

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";

import { Product } from "@/types/product";
import Image from "next/image";

import React from 'react'
import Select from 'react-select'

export const metadata: Metadata = {
  title: "PRAKTISI Pengguna",
  // other metadata
};

const productData: Product[] = [
  {
    image: "/images/product/product-01.png",
    name: "Apple Watch Series 7",
    category: "Electronics",
    price: 296,
    sold: 22,
    profit: 45,
  },
  {
    image: "/images/product/product-02.png",
    name: "Macbook Pro M1",
    category: "Electronics",
    price: 546,
    sold: 12,
    profit: 125,
  },
  {
    image: "/images/product/product-03.png",
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 443,
    sold: 64,
    profit: 247,
  },
  {
    image: "/images/product/product-04.png",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
];

const UsersPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pengguna" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="grid grid-cols-2 gap-3 py-6 px-4 md:px-6 xl:px-7.5">
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Kata kunci
              </label>
              <input
                type="text"
                placeholder="Cari"
                className="w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Peran
              </label>
              <Select
                isMulti
                name="colors"
                options={[
                  { value: 'PRAKTIKAN', label: 'PRAKTIKAN' },
                  { value: 'PRAKTISI', label: 'PRAKTISI' },
                ]}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
            <div className="col-span-2">
              <button className="flex justify-center rounded bg-primary py-3 px-8 ml-auto font-medium text-gray">
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
