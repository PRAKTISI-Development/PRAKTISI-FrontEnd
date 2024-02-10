'use client'

import React, { useState } from 'react'
import Students from './Students'
import Tasks from './Tasks'
import Grades from './Grades'

export default function TaskTabs() {
  const [selectedTab, setSelectedTab] = useState(1)

  return (
    <>
      <div className="mt-12 flex flex-wrap gap-3 pb-5 dark:border-strokedark">
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
        if (selectedTab == 1) return <Students />
        if (selectedTab == 2) return <Tasks />
        return <Grades />
      })()}
    </>
  )
}

{/* <div className="flex flex-col items-start overflow-x-scroll">
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
</div> */}