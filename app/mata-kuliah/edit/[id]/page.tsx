import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import React from 'react'
import { Metadata } from 'next'
import Select from '@/components/Select'

export const metadata: Metadata = {
  title: 'PRAKTISI | Mata Kuliah',
  description: ''
}

export default function AddInformationPage() {
  return (
    <>
      <Breadcrumb
        pageName="Edit Mata Kuliah"
        pages={['Mata Kuliah', 'Edit mata kuliah']}
        previousPageUrl="/mata-kuliah"
      />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Nama Mata kuliah <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block text-black dark:text-white">
                  Dosen <span className="text-meta-1">*</span>
                </label>
                <Select
                  name="dosen"
                  placeholder="Dosen"
                  options={[
                    { value: '1', label: 'Putut Pamilih Widagdo' },
                    { value: '2', label: 'Hario Jati Setyadi' },
                  ]}
                />
              </div>

              <button type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                Edit Mata Kuliah
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
