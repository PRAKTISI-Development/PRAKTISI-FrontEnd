import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import DeleteButton from '@/components/pages/informasi/DeleteButton'
import { faEye, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'PRAKTISI | Mata Kuliah',
  description: ''
}

export default function SubjectPage() {
  return (
    <>
      <Breadcrumb pageName="Mata Kuliah" />

      <div className="flex flex-col gap-10">
        <div className="card">
          <div className="grid grid-cols-1 xs:grid-cols-[minmax(40%,1fr),minmax(10%,1fr),minmax(20%,1fr)] sm:grid-cols-[minmax(50%,1fr),minmax(10%,1fr),minmax(30%,1fr)] lg:grid-cols-[minmax(60%,1fr),minmax(10%,1fr),minmax(10%,1fr)] gap-3 items-center mb-5">
            <div>
              <input
                type="text"
                placeholder="Kata kunci"
                className="w-full rounded-lg border-[1.5px] bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
              />
            </div>
            <div>
              <button className="text-center text-gray font-medium bg-primary rounded py-2 w-full">
                Cari
              </button>
            </div>
            <div className="sm:justify-self-end">
              <Link href="/mata-kuliah/tambah" className="text-center text-gray font-medium bg-success rounded py-2 px-4 w-full sm:w-full">
                Buat Mata Kuliah
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start overflow-x-scroll">
            <div className="grid grid-cols-[minmax(80px,80px),repeat(2,minmax(400px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
              <p className="font-medium">No</p>
              <p className="font-medium">Mata Kuliah</p>
              <p className="font-medium">Aksi</p>
            </div>
            
            <div className="grid grid-cols-[minmax(80px,80px),repeat(2,minmax(400px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
              <p className="text-sm text-black dark:text-white">
                1
              </p>
              <p className="text-sm text-black dark:text-white">
                PPW A2 2022
              </p>
              <div className="flex items-center space-x-3.5">
                <Link href="/mata-kuliah/edit/1">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </Link>
                <DeleteButton />
                <Link href="/mata-kuliah/detail/1">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}