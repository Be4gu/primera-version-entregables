import { useState } from 'react'

export function Input({ labelText, type, placeholder, inputId, changeValue }) {
  const [value, setValue] = useState('')
  const prueba = (event) => {
    setValue(event)
    changeValue(inputId, event)
  }
  return (
    <div className='font-sans w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2'>
      <label className='block uppercase tracking-wide text-gray-700 font-bold mb-2'>
        {labelText}
        <input
          type={type}
          id={inputId}
          onChange={(e) => {
            prueba(e.target.value)
          }}
          placeholder={placeholder}
          className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        />
      </label>
      {value}
    </div>
  )
}
