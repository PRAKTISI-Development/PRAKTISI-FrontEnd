import React from 'react'

export default function Grades() {
  return (
    <>
      <div className="card mb-5">
        <div className="mb-6 flex justify-between items-center">
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            Tugas-tugas
          </h4>
        </div>

        <div className="flex items-start gap-5 border-b border-stroke dark:border-strokedark sm:gap-10 overflow-x-scroll">
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
      </div>

      <div className="card mb-5">
        <div className="mb-6 flex justify-between items-center">
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            Nilai Akhir
          </h4>
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
    </>
  )
}
