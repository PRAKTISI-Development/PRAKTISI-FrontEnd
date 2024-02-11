import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import DeleteButton from '@/components/pages/task/DeleteButton'

export default function Tasks() {
  return (
    <>
      <div className="card mb-5">
        <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center">
          <h4 className="text-title-sm2 font-bold text-black dark:text-white mb-5 sm:mb-0">
            Tugas baru (1), tugas selesai (3)
          </h4>
          <Link className="text-center text-gray font-medium bg-success rounded py-2 px-5 w-auto block" href="/mata-kuliah/1/tugas/tambah">
            <FontAwesomeIcon icon={faAdd} />
            <span className="ml-3">Buat Tugas</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="card flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-start mb-5 sm:mb-0">
            <h4 className="text-xl font-semibold text-black line-clamp-2">Proyek Akhir</h4>
            <small>Diunggah pada 19 Februari 2024 21:30</small>
          </div>
          <div className="flex items-center space-x-3.5">
            <Link className="hover:text-primary" href="/mata-kuliah/1/tugas/1/edit">
              Edit
            </Link>
            <DeleteButton />
            <Link className="hover:text-primary" href="/mata-kuliah/1/tugas/1">
              Lihat Lengkap
            </Link>
          </div>
        </div>
        <div className="card flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-start mb-5 sm:mb-0">
            <h4 className="text-xl font-semibold text-black line-clamp-2">Mini Project 3</h4>
            <small>Diunggah pada 19 Februari 2024 21:30</small>
          </div>
          <div className="flex items-center space-x-3.5">
            <Link className="hover:text-primary" href="/mata-kuliah/1/tugas/1/edit">
              Edit
            </Link>
            <DeleteButton />
            <Link className="hover:text-primary" href="/mata-kuliah/1/tugas/1">
              Lihat Lengkap
            </Link>
          </div>
        </div>
        <div className="card flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-start mb-5 sm:mb-0">
            <h4 className="text-xl font-semibold text-black line-clamp-2">Mini Project 2</h4>
            <small>Diunggah pada 19 Februari 2024 21:30</small>
          </div>
          <div className="flex items-center space-x-3.5">
            <Link className="hover:text-primary" href="/mata-kuliah/1/tugas/1/edit">
              Edit
            </Link>
            <DeleteButton />
            <Link className="hover:text-primary" href="/mata-kuliah/1/tugas/1">
              Lihat Lengkap
            </Link>
          </div>
        </div>
        <div className="card flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-start mb-5 sm:mb-0">
            <h4 className="text-xl font-semibold text-black line-clamp-2">Mini Project 1</h4>
            <small>Diunggah pada 19 Februari 2024 21:30</small>
          </div>
          <div className="flex items-center space-x-3.5">
            <Link className="hover:text-primary" href="/mata-kuliah/1/tugas/1/edit">
              Edit
            </Link>
            <DeleteButton />
            <Link className="hover:text-primary" href="/mata-kuliah/1/tugas/1">
              Lihat Lengkap
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
