import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import CheckboxTwo from '@/components/Checkboxes/CheckboxTwo'
import DeleteButton from '@/components/pages/schedule/DeleteButton'
import FilterButton from '@/components/pages/schedule/FilterButton'
import { faAdd, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'PRAKTISI | Jadwal',
  description: ''
}

export default function InformationPage() {
  return (
    <>
      <Breadcrumb
        pageName="Jadwal"
        pages={['Jadwal', 'Detail']}
      />

      <div className="card mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] gap-y-5">
          <b>Mata Kuliah</b>
          <p>Dasar-dasar Pemrograman A2 2022</p>

          <b>Kelas</b>
          <p>A-2 2022</p>

          <b>Tanggal</b>
          <p>19 Februari 2024</p>

          <b>Waktu</b>
          <p>07:30 - 09:30</p>

          <b>Ruangan</b>
          <p>D308 - Lab Network</p>

          <b>Materi</b>
          <p>Pengenalan Data Mining</p>
        </div>
      </div>

      <div className="card">
        <div className="flex flex-col items-start overflow-x-scroll lg:items-stretch lg:overflow-x-visible">
          <div className="grid grid-cols-[minmax(80px,80px),minmax(300px,1fr),minmax(300px,1fr),minmax(300px,1fr)] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
            <p className="font-medium">No</p>
            <p className="font-medium">NIM</p>
            <p className="font-medium">Nama</p>
            <p className="font-medium">Status</p>
          </div>
          
          <div className="grid grid-cols-[minmax(80px,80px),minmax(300px,1fr),minmax(300px,1fr),minmax(300px,1fr)] border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
            <p className="text-sm text-black dark:text-white">
              1
            </p>
            <p className="text-sm text-black dark:text-white">
              2109116095
            </p>
            <p className="text-sm text-black dark:text-white">
              Muhammad Novil Fahlevy
            </p>
            <div className="flex space-x-3.5">
              <CheckboxTwo />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}