'use client'

import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Editor() {
  return (
    <CKEditor
      editor={ClassicEditor}
      onChange={( event, editor ) => {
        console.log(editor.data.get());
      }}
    />
  )
}
