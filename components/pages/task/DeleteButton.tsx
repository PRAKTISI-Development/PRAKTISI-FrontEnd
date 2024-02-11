'use client'

import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function DeleteButton() {
  const showSwal = () => {
    withReactContent(Swal).fire({
      text: 'Yakin ingin menghapus data ini?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Batal',
      confirmButtonText: 'Iya',
    })
  }

  return <p className="cursor-pointer select-none hover:text-primary" onClick={showSwal}>Hapus</p>
}
