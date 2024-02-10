import React from 'react'

export default function Students() {
  return (
    <div className="card">
      <div className="mb-6 flex justify-between items-center">
        <h4 className="text-title-sm2 font-bold text-black dark:text-white">
          Praktikan
        </h4>
      </div>
      
      <div className="flex flex-col items-start overflow-x-scroll">
        <div
          className="grid grid-cols-[50px,300px,300px] sm:grid-cols-[minmax(120px,120px),1fr,1fr] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5 sm:w-full">
          <p className="font-medium">No</p>
          <p className="font-medium">NIM</p>
          <p className="font-medium">Nama</p>
        </div>

        <div
          className="grid grid-cols-[50px,300px,300px] sm:grid-cols-[minmax(120px,120px),1fr,1fr] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5 sm:w-full">
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
