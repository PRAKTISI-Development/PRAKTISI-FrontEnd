'use client'

import React, { useState } from 'react'
import Students from './Students'
import Tasks from './Tasks'
import Grades from './Grades'

export default function TaskTabs() {
  const [selectedTab, setSelectedTab] = useState(1)

  return (
    <>
      <div className="mt-12 flex flex-wrap gap-3 pb-5 dark:border-strokedark">
        <button
          type="button"
          className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 shadow-default ${selectedTab == 1 ? 'bg-primary text-white' : 'bg-white dark:bg-meta-4 text-black dark:text-white'}`}
          onClick={() => setSelectedTab(1)}
        >
          Praktikan
        </button>
        <button
          type="button"
          className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 shadow-default ${selectedTab == 2 ? 'bg-primary text-white' : 'bg-white dark:bg-meta-4 text-black dark:text-white'}`}
          onClick={() => setSelectedTab(2)}
        >
          Tugas
        </button>
        <button
          type="button"
          className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 shadow-default ${selectedTab == 3 ? 'bg-primary text-white' : 'bg-white dark:bg-meta-4 text-black dark:text-white'}`}
          onClick={() => setSelectedTab(3)}
        >
          Penilaian
        </button>
      </div>

      {(() => {
        if (selectedTab == 1) return <Students />
        if (selectedTab == 2) return <Tasks />
        return <Grades />
      })()}
    </>
  )
}