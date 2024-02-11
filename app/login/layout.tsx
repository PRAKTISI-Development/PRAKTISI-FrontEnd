import React from 'react'

import '@/app/globals.css'
import '@/app/satoshi.css'

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="p-5">
        {children}
      </body>
    </html>
  )
}
