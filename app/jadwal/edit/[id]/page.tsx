import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import React from 'react'
import { Metadata } from 'next'
import Editor from '@/components/Editor'
import Select from '@/components/Select'

export const metadata: Metadata = {
  title: 'PRAKTISI | Jadwal',
  description: ''
}

export default function AddInformationPage() {
  return (
    <>
      <Breadcrumb pageName="Edit Jadwal" />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Mata Kuliah <span className="text-meta-1">*</span>
                </label>
                <Select
                  name="matkul"
                  placeholder="Mata Kuliah"
                  options={[{
                    value: '1', label: 'Dasar-dasar Pemrograman',
                  }, {
                    value: '2', label: 'Algoritma dan Struktur Data'
                  }]}
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Tanggal <span className="text-meta-1">*</span>
                </label>
                <input
                  type="date"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Waktu mulai <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="time"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-2.5 block text-black dark:text-white">
                      Waktu selesai <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="time"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Kelas <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: A-2 2022"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Ruangan <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: D308 - Lab Network"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Materi <span className="text-meta-1">*</span>
                </label>
                <Editor />
              </div>

              <button type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                Edit Jadwal
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
