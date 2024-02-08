import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import DeleteButton from '@/components/pages/schedule/DeleteButton'
import FilterButton from '@/components/pages/schedule/FilterButton'
import { faAdd, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import Link from 'next/link'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'PRAKTISI | Jadwal',
  description: ''
}

export default function InformationPage() {
  return (
    <>
      <Breadcrumb pageName="Jadwal" />

      <div className="flex flex-col gap-10">
        <div className="card">
          <div className="flex gap-3 justify-end items-center mb-5">
            <div className="flex justify-between gap-3">
              <FilterButton />
              <Link href="/jadwal/tambah" className="text-center text-gray font-medium bg-success rounded py-2 px-4 inline-block h-full">
                <FontAwesomeIcon icon={faAdd} />
                <span className="ml-2">Buat Jadwal</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start overflow-x-scroll">
            <div className="grid grid-cols-[minmax(80px,80px),repeat(7,minmax(200px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
              <p className="font-medium">No</p>
              <p className="font-medium">Mata Kuliah</p>
              <p className="font-medium">Kelas</p>
              <p className="font-medium">Tanggal</p>
              <p className="font-medium">Waktu</p>
              <p className="font-medium">Ruangan</p>
              <p className="font-medium">Materi</p>
              <p className="font-medium">Aksi</p>
            </div>
            
            <div className="grid grid-cols-[minmax(80px,80px),repeat(7,minmax(200px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
              <p className="text-sm text-black dark:text-white">
                1
              </p>
              <p className="text-sm text-black dark:text-white">
                Perancangan & Pemrograman Web
              </p>
              <p className="text-sm text-black dark:text-white">
                A-2 2022
              </p>
              <p className="text-sm text-black dark:text-white">
                19 Februari 2024
              </p>
              <p className="text-sm text-black dark:text-white">
                15:30 - 17:30
              </p>
              <p className="text-sm text-black dark:text-white">
                D308 - Lab Network
              </p>
              <p className="text-sm text-black dark:text-white">
                HyperText Markup Language (HTML)
              </p>
              <div className="flex space-x-3.5">
                <Link href="/jadwal/edit/1">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </Link>
                <DeleteButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}