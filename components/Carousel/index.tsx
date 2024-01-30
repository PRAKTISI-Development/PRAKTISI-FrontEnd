'use client'

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
            {/* <div className="w-6 h-6 bg-green-500 rounded-full mr-4"></div> */}
            <h2 className="text-xl font-semibold text-primary">Success Alert</h2>
          </div>
          <p className="my-4 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla ut optio facere aperiam. Saepe ipsum rerum facere, non est harum dolor neque ut eum, autem nihil nobis expedita iste fugit corrupti, accusamus dolorem voluptatibus molestiae ex cumque ratione at officia? Sunt tenetur repudiandae laudantium nobis labore non fugit dolore autem illo, voluptatibus minus repellendus vero ducimus. Expedita obcaecati ad in molestiae consequuntur nihil, repudiandae vitae voluptas impedit necessitatibus optio, quibusdam quisquam deserunt, enim natus molestias ex odit quod! Doloremque quas cum consectetur nisi mollitia molestias hic provident non iure vel doloribus quae, in aperiam vero autem, unde dignissimos impedit.</p>
          <a href="https://si.ft.unmul.ac.id" target="_blank" className="mt-6 bg-green-500 text-primary py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 underline">https://si.ft.unmul.ac.id</a>
        </div>
      </ReactMultiCarousel>
    </div>
  )
}
