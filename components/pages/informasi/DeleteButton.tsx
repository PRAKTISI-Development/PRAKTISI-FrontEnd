'use client'

import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  return <FontAwesomeIcon cursor="pointer" icon={faTrashAlt} onClick={showSwal} />;
}
