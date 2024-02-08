'use client'

import Modal from '@/components/Modal'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import FilterScheduleModal from '@/components/pages/schedule/FilterScheduleModal'

export default function FilterButton() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="text-center text-gray font-medium bg-primary rounded py-2 px-4"
        onClick={() => setIsOpen(true)}
      >
        <FontAwesomeIcon icon={faFilter} />
        <span className="ml-2">Filter</span>
      </button>

      <FilterScheduleModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
