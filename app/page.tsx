import { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import Calendar from '@/components/Calender'
import Carousel from '@/components/Carousel'

export const metadata: Metadata = {
  title: 'PRAKTISI | Dasbor'
}

export default function Home() {
  return (
    <>
      <Breadcrumb pageName="Dasbor" />
      <Carousel />
      <Calendar />
    </>
  )
}
