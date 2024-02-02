'use client'

import React from 'react'
import ReactSelect from 'react-select'

interface OptionProp {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  placeholder: string;
  options: OptionProp[];
}

export default function Select({ name, placeholder, options }: SelectProps) {
  return (
    <ReactSelect
      isMulti
      name={name}
      placeholder={placeholder}
      options={options}
      className="basic-multi-select"
      styles={{
        control: (styles) => ({
          ...styles,
          paddingTop: '2px',
          paddingBottom: '2px',
          borderRadius: '8px',
          border: '1.5px solid rgb(226, 232, 240)',
        }),
      }}
      classNamePrefix="select"
    />
  )
}