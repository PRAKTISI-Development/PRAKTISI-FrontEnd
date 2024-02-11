import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import SubjectTabs from '@/components/pages/subject/SubjectTabs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PRAKTISI | Mata Kuliah',
  description: ''
}

export default function InformationPage() {
  return (
    <>
      <Breadcrumb
        pageName="PPW A2 2022"
        pages={['Mata Kuliah', 'PPW A2 2022' ]}
        previousPageUrl="/mata-kuliah"
      />

      <div className="card mb-5">
        <h4 className="mb-3 text-xl font-semibold text-black">Dosen</h4>
        <div className="flex gap-3">
          <div className="inline-flex rounded border border-[#637381] px-2 py-1 text-sm font-medium text-[#637381] hover:opacity-80">
            Putut Pamilih Widagdo
          </div>
        </div>
      </div>

      <SubjectTabs />
    </>
  )
}