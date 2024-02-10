import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import { Metadata } from 'next'
import Select from '@/components/Select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'PRAKTISI Pengguna',
  description: ''
}

export default function UsersPage() {
  return (
    <>
      <Breadcrumb pageName="Pengguna" />

      <div className="flex flex-col gap-10">
        <div className="card">
          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 gap-3 items-center mb-5">
            <div className="sm:col-span-2 md:col-span-1">
              <input
                type="text"
                placeholder="Kata kunci"
                className="w-full rounded-lg border-[1.5px] bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
              />
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <Select
                name="roles"
                placeholder="Peran"
                options={[
                  { value: 'PRAKTIKAN', label: 'PRAKTIKAN' },
                  { value: 'PRAKTISI', label: 'PRAKTISI' },
                ]}
              />
            </div>
            <div className="sm:col-span-4 md:col-span-1">
              <button className="text-center text-gray font-medium bg-primary rounded py-2 px-5 w-full md:w-auto">
                <FontAwesomeIcon icon={faSearch} />
                <span className="ml-3">Cari</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start overflow-x-scroll lg:items-stretch lg:overflow-x-visible">
            <div className="grid grid-cols-[repeat(4,minmax(200px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
              <p className="font-medium">No</p>
              <p className="font-medium">NIM</p>
              <p className="font-medium">Nama</p>
              <p className="font-medium">Peran</p>
            </div>
            
            <div className="grid grid-cols-[repeat(4,minmax(200px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
              <p className="text-sm text-black dark:text-white">
                1
              </p>
              <p className="text-sm text-black dark:text-white">
                2109116095
              </p>
              <p className="text-sm text-black dark:text-white">
                Muhammad Novil Fahlevy
              </p>
              <div className="flex gap-1">
                <span className="bg-white border border-primary text-primary py-1 px-3 rounded-md text-xs">PRAKTIKAN</span>
                <span className="bg-primary text-white py-1 px-3 rounded-md text-xs">PRAKTISI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
