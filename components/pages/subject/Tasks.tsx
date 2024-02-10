import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import DeleteButton from '@/components/pages/task/DeleteButton'

export default function Tasks() {
  return (
    <>
      <div className="card mb-5">
        <div className="flex justify-between items-center">
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            Tugas
          </h4>
          <button className="text-center text-gray font-medium bg-primary rounded py-2 px-5 w-auto">
            <FontAwesomeIcon icon={faAdd} />
            <span className="ml-3">Buat Tugas</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="card">
          <h4 className="mb-3 text-xl font-semibold text-black line-clamp-2">Mini Project 1</h4>
          <div className="flex items-center space-x-3.5">
            <Link className="hover:text-primary" href="/mata-kuliah/edit/1">
              Edit
            </Link>
            <DeleteButton />
            <Link className="hover:text-primary" href="/mata-kuliah/detail/1">
              Lihat Lengkap
            </Link>
          </div>
        </div>
        <div className="card">
          <h4 className="mb-3 text-xl font-semibold text-black line-clamp-2">Mini Project 2</h4>
          <div className="flex items-center space-x-3.5">
            <Link className="hover:text-primary" href="/mata-kuliah/edit/1">
              Edit
            </Link>
            <DeleteButton />
            <Link className="hover:text-primary" href="/mata-kuliah/detail/1">
              Lihat Lengkap
            </Link>
          </div>
        </div>
        <div className="card">
          <h4 className="mb-3 text-xl font-semibold text-black line-clamp-2">Mini Project 3</h4>
          <div className="flex items-center space-x-3.5">
            <Link className="hover:text-primary" href="/mata-kuliah/edit/1">
              Edit
            </Link>
            <DeleteButton />
            <Link className="hover:text-primary" href="/mata-kuliah/detail/1">
              Lihat Lengkap
            </Link>
          </div>
        </div>
        <div className="card">
          <h4 className="mb-3 text-xl font-semibold text-black line-clamp-2">Proyek Akhir</h4>
          <div className="flex items-center space-x-3.5">
            <Link className="hover:text-primary" href="/mata-kuliah/edit/1">
              Edit
            </Link>
            <DeleteButton />
            <Link className="hover:text-primary" href="/mata-kuliah/detail/1">
              Lihat Lengkap
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
