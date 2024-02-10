import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import React from 'react';
import { Metadata } from 'next';
import Editor from '@/components/Editor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'PRAKTISI | Informasi',
  description: ''
}

export default function AddInformationPage() {
  return (
    <>
      <Breadcrumb
        pageName="Edit Informasi"
        pages={['Informasi', 'Edit informasi']}
        previousPageUrl="/informasi"
      />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Judul <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block text-black dark:text-white">
                  Isi <span className="text-meta-1">*</span>
                </label>
                <Editor />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Tautan <span className="text-meta-1">*</span>
                </label>
                <input
                  type="url"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <button type="submit" className="flex w-full justify-center items-center rounded bg-primary p-3 font-medium text-gray">
                <FontAwesomeIcon icon={faPencil} />
                <span className="ml-3">Edit Informasi</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
