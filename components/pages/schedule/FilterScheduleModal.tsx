'use client'

import Modal from '@/components/Modal'
import Select from '@/components/Select';
import React, { Dispatch, SetStateAction } from 'react'

interface FilterScheduleModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FilterScheduleModal({ isOpen, setIsOpen }: FilterScheduleModalProps) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Filter Jadwal">
      <div className="mb-5">
        <input
          type="text"
          placeholder="Kata kunci"
          className="w-full rounded-lg border-[1.5px] bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
        />
      </div>
      <div className="mb-5">
        <Select
          name="matkul"
          placeholder="Mata Kuliah"
          options={[
            { value: '1', label: 'Perancangan & Pemrograman Web' },
            { value: '2', label: 'Algoritma dan Struktur Data' },
          ]}
        />
      </div>

      <button type="button" className="text-center text-gray font-medium bg-primary rounded py-2 px-4">Cari</button>
    </Modal>
  )
}
