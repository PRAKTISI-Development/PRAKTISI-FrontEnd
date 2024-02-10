import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import DeleteButton from '@/components/pages/information/DeleteButton'
import { faAd, faAdd, faPencilAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'PRAKTISI | Informasi',
  description: ''
}

export default function InformationPage() {
  return (
    <>
      <Breadcrumb pageName="Informasi" />

      <div className="flex flex-col gap-10">
        <div className="card">
          <div className="grid grid-cols-1 sm:grid-cols-[50%,20%,1fr] md:grid-cols-[60%,10%,1fr] gap-3 items-center mb-5">
            <div>
              <input
                type="text"
                placeholder="Kata kunci"
                className="w-full rounded-lg border-[1.5px] bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
              />
            </div>
            <div>
              <button className="text-center text-gray font-medium bg-primary rounded py-2 w-full">
                <FontAwesomeIcon icon={faSearch} />
                <span className="ml-3">Cari</span>
              </button>
            </div>
            <div className="sm:justify-self-end">
              <Link href="/informasi/tambah" className="text-center text-gray font-medium bg-success rounded py-2 px-4 w-full sm:w-auto block">
                <FontAwesomeIcon icon={faAdd} />
                <span className="ml-3">Buat Informasi</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start overflow-x-scroll">
            <div className="grid grid-cols-[minmax(80px,80px),repeat(6,minmax(200px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
              <p className="font-medium">No</p>
              <p className="font-medium">Judul</p>
              <p className="font-medium">Deskripsi</p>
              <p className="font-medium">Tautan</p>
              <p className="font-medium">Tanggal</p>
              <p className="font-medium">Dibuat oleh</p>
              <p className="font-medium">Aksi</p>
            </div>
            
            <div className="grid grid-cols-[minmax(80px,80px),repeat(6,minmax(200px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
              <p className="text-sm text-black dark:text-white">
                1
              </p>
              <p className="text-sm text-black dark:text-white">
                Mini Project 1 Perancangan & Pemrogrograman Web sudah diunggah
              </p>
              <p className="text-sm text-black dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita odit accusantium voluptatum totam deserunt iusto reprehenderit adipisci debitis, reiciendis nobis cupiditate praesentium! Officia, id? Repudiandae eveniet ipsum ut aliquid mollitia!
              </p>
              <p className="text-sm text-black dark:text-white">
                -
              </p>
              <p className="text-sm text-black dark:text-white">
                02 Februari 2024
              </p>
              <p className="text-sm text-black dark:text-white">
                Muhammad Novil Fahlevy
              </p>
              <div className="flex space-x-3.5">
                <Link href="/informasi/edit/1">
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