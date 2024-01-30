'use client'

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMultiCarousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

export default function Carousel() {
  return (
    <div className="mb-5">
      <ReactMultiCarousel
        responsive={responsive}
        arrows={false}
        showDots
        dotListClass="bg-white border-t border-gray !py-1"
      >
        <div className="bg-white p-8 mb-8 rounded-md shadow-md">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faInfoCircle} size="2x" className="mr-3" />
            <h2 className="text-xl font-semibold text-primary">Ingpo</h2>
          </div>
          <p className="my-4 text-primary">Posisi?</p>
          <a href="https://si.ft.unmul.ac.id" target="_blank" className="mt-6 bg-green-500 text-primary py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 underline">https://si.ft.unmul.ac.id</a>
        </div>
      </ReactMultiCarousel>
    </div>
  )
}
