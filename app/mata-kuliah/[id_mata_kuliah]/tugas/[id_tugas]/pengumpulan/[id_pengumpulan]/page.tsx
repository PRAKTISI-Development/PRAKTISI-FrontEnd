import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import TaskTabs from '@/components/pages/subject/SubjectTabs'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'PRAKTISI | Tugas',
  description: ''
}

export default function TaskCollectionPage() {
  return (
    <>
      <Breadcrumb
        pageName="Muhammad Novil Fahlevy"
        pages={['Mata Kuliah', 'PPW A2 2022', 'Mini Project 1', 'Muhammad Novil Fahlevy']}
        previousPageUrl="/mata-kuliah/1/tugas/1"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[60%,40%] gap-5">
        <div className="card order-2 lg:order-1">
          <div className="mb-6 flex justify-between items-center">
            <h4 className="text-title-sm2 font-bold text-black dark:text-white">
              Hasil tugas
            </h4>
          </div>
          
          <embed src="https://novilfahlevy-storage.000webhostapp.com/uploads/Ceu0jv8gAQ.pdf" type="application/pdf" className="w-full" height="1200px"></embed>
        </div>

        <div className="order-1 lg:order-2">
          <div className="card lg:sticky lg:top-24">
            <div className="mb-6 flex justify-between items-center">
              <h4 className="text-title-sm2 font-bold text-black dark:text-white">
                Penilaian
              </h4>
            </div>
            
            <div className="mb-5">
              <p className="font-bold">Praktikan</p>
              <p>Muhammad Novil Fahlevy</p>
            </div>

            <div className="mb-5">
              <p className="font-bold">Tanggal pengumpulan</p>
              <p>20 Februari 2024 19:20</p>
            </div>

            <div className="mb-5">
              <p className="font-bold mb-3">Nilai</p>
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