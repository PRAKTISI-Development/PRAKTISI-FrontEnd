import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import TaskTabs from '@/components/pages/task/TaskTabs'
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
      <TaskTabs />
    </>
  )
}