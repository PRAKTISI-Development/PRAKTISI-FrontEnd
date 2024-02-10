'use client'

import { faAdd, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'

export default function TaskTabs() {
  const [selectedTab, setSelectedTab] = useState(1)

  return (
    <>
      <div className="mb-7.5 flex flex-wrap gap-3 border-b border-stroke pb-5 dark:border-strokedark">
        <button
          type="button"
          className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${selectedTab == 1 ? 'bg-primary text-white' : 'bg-white dark:bg-meta-4 text-black dark:text-white'}`}
          onClick={() => setSelectedTab(1)}
        >
          Praktikan
        </button>
        <button
          type="button"
          className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${selectedTab == 2 ? 'bg-primary text-white' : 'bg-white dark:bg-meta-4 text-black dark:text-white'}`}
          onClick={() => setSelectedTab(2)}
        >
          Tugas
        </button>
        <button
          type="button"
          className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${selectedTab == 3 ? 'bg-primary text-white' : 'bg-white dark:bg-meta-4 text-black dark:text-white'}`}
          onClick={() => setSelectedTab(3)}
        >
          Penilaian
        </button>
      </div>

      {(() => {
        if (selectedTab == 1) {
          return (
            <div className="card">
              <div className="mb-6 flex justify-between items-center">
                <h4 className="text-title-sm2 font-bold text-black dark:text-white">
                  Praktikan
                </h4>
              </div>
              
              <div className="flex flex-col items-start overflow-x-scroll">
                <div
                  className="grid grid-cols-[minmax(120px,120px),repeat(2,minmax(530px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
                  <p className="font-medium">No</p>
                  <p className="font-medium">NIM</p>
                  <p className="font-medium">Nama</p>
                </div>

                <div
                  className="grid grid-cols-[minmax(120px,120px),repeat(2,minmax(530px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
                  <p className="text-sm text-black dark:text-white">
                    1
                  </p>
                  <p className="text-sm text-black dark:text-white">
                    2109116095
                  </p>
                  <p className="text-sm text-black dark:text-white">
                    Muhammad Novil Fahlevy
                  </p>
                </div>
              </div>
            </div>
          )
        }

        if (selectedTab == 2) {
          return (
            <div className="card mb-5">
              <div className="mb-6 flex justify-between items-center">
                <h4 className="text-title-sm2 font-bold text-black dark:text-white">
                  Tugas
                </h4>
                <button className="text-center text-gray font-medium bg-primary rounded py-2 px-5 w-full md:w-auto">
                  <FontAwesomeIcon icon={faAdd} />
                  <span className="ml-3">Buat Tugas</span>
                </button>
              </div>
              
              <div className="flex flex-col items-start overflow-x-scroll">
                <div
                  className="grid grid-cols-[minmax(80px,80px),repeat(6,minmax(300px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
                  <p className="font-medium">No</p>
                  <p className="font-medium">Jenis Tugas</p>
                  <p className="font-medium">Nama Tugas</p>
                  <p className="font-medium">Deskripsi</p>
                  <p className="font-medium">Tanggal Dibuat</p>
                  <p className="font-medium">Tanggal Pengumpulan</p>
                  <p className="font-medium">Aksi</p>
                </div>

                <div
                  className="grid grid-cols-[minmax(80px,80px),repeat(6,minmax(300px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
                  <p className="text-sm text-black dark:text-white">
                    1
                  </p>
                  <p className="text-sm text-black dark:text-white">
                    Post Test 1
                  </p>
                  <p className="text-sm text-black dark:text-white">
                    Mini Project 1
                  </p>
                  <p className="text-sm text-black dark:text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus optio dicta voluptatem possimus aliquid harum officiis ratione doloribus deserunt!
                  </p>
                  <p className="text-sm text-black dark:text-white">
                    23 Februari 2024 21:00
                  </p>
                  <p className="text-sm text-black dark:text-white">
                    28 Februari 2024 23:59
                  </p>
                  <div className="flex items-center space-x-3.5">
                    <Link href="/tugas/edit/1">
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        }

        return (
          <div className="card mb-5">
            <div className="mb-6 flex justify-between items-center">
              <h4 className="text-title-sm2 font-bold text-black dark:text-white">
                Penilaian
              </h4>
            </div>
            
            <div className="mb-6 flex items-start gap-5 border-b border-stroke dark:border-strokedark sm:gap-10 overflow-x-scroll">
              <a className="py-4 text-sm font-medium hover:text-primary md:text-base text-primary min-w-[200px]" href="#">
                Nilai Akhir
              </a>
              <a className="py-4 text-sm hover:text-primary md:text-base border-transparent min-w-[200px]" href="#">
                Mini Project 1
              </a>
              <a className="py-4 text-sm hover:text-primary md:text-base border-transparent min-w-[200px]" href="#">
                Mini Project 2
              </a>
              <a className="py-4 text-sm hover:text-primary md:text-base border-transparent min-w-[200px]" href="#">
                Mini Project 3
              </a>
              <a className="py-4 text-sm hover:text-primary md:text-base border-transparent min-w-[200px]" href="#">
                Mini Project 4
              </a>
              <a className="py-4 text-sm hover:text-primary md:text-base border-transparent min-w-[200px]" href="#">
                Mini Project 5
              </a>
              <a className="py-4 text-sm hover:text-primary md:text-base border-transparent min-w-[200px]" href="#">
                Mini Project 6
              </a>
            </div>
            
            <div className="flex flex-col items-start overflow-x-scroll">
              <div
                className="grid grid-cols-[minmax(80px,80px),repeat(9,minmax(300px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
                <p className="font-medium">No</p>
                <p className="font-medium">NIM</p>
                <p className="font-medium">Nama</p>
                <p className="font-medium">Mini Project 1</p>
                <p className="font-medium">Mini Project 2</p>
                <p className="font-medium">Mini Project 3</p>
                <p className="font-medium">Mini Project 4</p>
                <p className="font-medium">Mini Project 5</p>
                <p className="font-medium">Mini Project 6</p>
                <p className="font-medium">Nilai Akhir</p>
              </div>

              <div
                className="grid grid-cols-[minmax(80px,80px),repeat(9,minmax(300px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
                <p className="text-sm text-black dark:text-white">
                  1
                </p>
                <p className="text-sm text-black dark:text-white">
                  2109116095
                </p>
                <p className="text-sm text-black dark:text-white">
                  Muhammad Novil Fahlevy
                </p>
                <p className="text-sm text-black dark:text-white">
                  80
                </p>
                <p className="text-sm text-black dark:text-white">
                  80
                </p>
                <p className="text-sm text-black dark:text-white">
                  80
                </p>
                <p className="text-sm text-black dark:text-white">
                  80
                </p>
                <p className="text-sm text-black dark:text-white">
                  80
                </p>
                <p className="text-sm text-black dark:text-white">
                  80
                </p>
                <div className="flex space-x-3.5">
                  <input
                    type="number"
                    placeholder="Masukkan nilai disini"
                    className="w-full rounded-lg border-[1.5px] bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                  />
                </div>
              </div>
            </div>
          </div>
        )
      })()}
    </>
  )
}
