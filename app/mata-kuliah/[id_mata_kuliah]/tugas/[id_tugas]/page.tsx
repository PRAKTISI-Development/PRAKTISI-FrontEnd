import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import TaskTabs from '@/components/pages/subject/SubjectTabs'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'PRAKTISI | Mata Kuliah',
  description: ''
}

export default function InformationPage() {
  return (
    <>
      <Breadcrumb
        pageName="Mini Project 1"
        pages={['Mata Kuliah', 'PPW A2 2022', 'Mini Project 1']}
        previousPageUrl="/mata-kuliah/1"
      />

      <div className="card mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] gap-y-5">
          <b>Jenis tugas</b>
          <p>Post test</p>

          <b>Nama tugas</b>
          <p>Mini Project 1</p>

          <b>Deskripsi</b>
          <p>Telat/ga ngumpul = game over</p>

          <b>Tanggal diunggah</b>
          <p>19 Februari 2024 21:30</p>

          <b>Tenggat pengumpulan</b>
          <p>21 Februari 2024 23:59</p>
        </div>
      </div>

      <div className="card">
        <div className="mb-6 flex justify-between items-center">
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            Pengumpulan
          </h4>
        </div>

        <div className="flex flex-col items-start overflow-x-scroll xl:items-stretch xl:overflow-x-visible">
          <div className="grid grid-cols-[minmax(80px,80px),repeat(4,minmax(300px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
            <p className="font-medium">No</p>
            <p className="font-medium">NIM</p>
            <p className="font-medium">Nama</p>
            <p className="font-medium">Waktu pengumpulan</p>
            <p className="font-medium">Aksi</p>
          </div>
          
          <div className="grid grid-cols-[minmax(80px,80px),repeat(4,minmax(300px,1fr))] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
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
              20 Februari 2024 19:20
            </p>
            <div className="flex space-x-3.5">
              <Link href="/">
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}