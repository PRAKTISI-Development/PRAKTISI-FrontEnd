'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar = () => {
  return (
    <div className="card">
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: 'event 1', date: '2024-01-29' },
          { title: 'event 2', date: '2024-02-19' }
        ]}
      />
    </div>
  )
};

export default Calendar;
