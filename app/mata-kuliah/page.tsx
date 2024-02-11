import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import DeleteButton from '@/components/pages/subject/DeleteButton'
import { faAdd, faSearch } from '@fortawesome/free-solid-svg-icons'
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

      <div className="flex flex-col gap-5">
        <div className="card">
          <div className="grid grid-cols-1 sm:grid-cols-[50%,20%,1fr] md:grid-cols-[60%,10%,1fr] gap-3 items-center">
            <div>
              <input
                type="text"
                placeholder="Kata kunci"
                className="w-full rounded-lg border-[1.5px] bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
              />
            </div>
            <div>
              <button className="text-center text-gray font-medium bg-primary rounded py-2 w-full">
                <FontAwesomeIcon icon={faSearch} />
                <span className="ml-3">Cari</span>
              </button>
            </div>
            <div className="sm:justify-self-end">
              <Link href="/mata-kuliah/tambah" className="text-center text-gray font-medium bg-success rounded py-2 px-4 w-full sm:w-full block">
                <FontAwesomeIcon icon={faAdd} />
                <span className="ml-3">Buat mata kuliah</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="card">
            <h4 className="mb-3 text-xl font-semibold text-black line-clamp-2">PPW A2 2022</h4>
            <div className="flex items-center space-x-3.5">
              <Link className="hover:text-primary" href="/mata-kuliah/1/edit">
                Edit
              </Link>
              <DeleteButton />
              <Link className="hover:text-primary" href="/mata-kuliah/1">
                Lihat Lengkap
              </Link>
            </div>
          </div>
          <div className="card">
            <h4 className="mb-3 text-xl font-semibold text-black line-clamp-2">PPW A2 2022</h4>
            <div className="flex items-center space-x-3.5">
              <Link className="hover:text-primary" href="/mata-kuliah/1/edit">
                Edit
              </Link>
              <DeleteButton />
              <Link className="hover:text-primary" href="/mata-kuliah/1">
                Lihat Lengkap
              </Link>
            </div>
          </div>
          <div className="card">
            <h4 className="mb-3 text-xl font-semibold text-black line-clamp-2">PPW A2 2022</h4>
            <div className="flex items-center space-x-3.5">
              <Link className="hover:text-primary" href="/mata-kuliah/1/edit">
                Edit
              </Link>
              <DeleteButton />
              <Link className="hover:text-primary" href="/mata-kuliah/1">
                Lihat Lengkap
              </Link>
            </div>
          </div>
          <div className="card">
            <h4 className="mb-3 text-xl font-semibold text-black line-clamp-2">PPW A2 2022</h4>
            <div className="flex items-center space-x-3.5">
              <Link className="hover:text-primary" href="/mata-kuliah/1/edit">
                Edit
              </Link>
              <DeleteButton />
              <Link className="hover:text-primary" href="/mata-kuliah/1">
                Lihat Lengkap
              </Link>
            </div>
          </div>
          <div className="card">
            <h4 className="mb-3 text-xl font-semibold text-black line-clamp-2">PPW A2 2022</h4>
            <div className="flex items-center space-x-3.5">
              <Link className="hover:text-primary" href="/mata-kuliah/1/edit">
                Edit
              </Link>
              <DeleteButton />
              <Link className="hover:text-primary" href="/mata-kuliah/1">
                Lihat Lengkap
              </Link>
            </div>
          </div>
          <div className="card">
            <h4 className="mb-3 text-xl font-semibold text-black line-clamp-2">PPW A2 2022</h4>
            <div className="flex items-center space-x-3.5">
              <Link className="hover:text-primary" href="/mata-kuliah/1/edit">
                Edit
              </Link>
              <DeleteButton />
              <Link className="hover:text-primary" href="/mata-kuliah/1">
                Lihat Lengkap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}