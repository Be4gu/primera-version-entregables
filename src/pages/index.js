import { INPUT_INFO, APIS_LIST } from '../../utils/constants'
import { Input } from '../../components/input.js'
import { CheckBox } from '../../components/check-box.js'
import { v4 as uuidv4 } from 'uuid'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [inputValues, setInputValues] = useState({
    num: '',
    name: '',
    clientID: '',
    clientSecret: '',
    entorno: 'pro',
    apisList: []
  })
  const [api, setApi] = useState('')
  const [checked, setChecked] = useState(false)

  const resteApiList = () => {
    setInputValues({
      ...inputValues,
      apisList: []
    })
    if (checked) setChecked(!checked)
  }

  const handleInputChange = (key, event) => {
    if (key === 'name') setInputValues({ ...inputValues, name: event })
    if (key === 'num') setInputValues({ ...inputValues, num: event })
    if (key === 'clientID') setInputValues({ ...inputValues, clientID: event })
    if (key === 'clientSecret')
      setInputValues({ ...inputValues, clientSecret: event })
  }

  const addApiBtns = () => {
    if (!api) return

    const newListApi = [...inputValues.apisList]
    newListApi.push({ name: api, id: uuidv4() })

    setInputValues({
      ...inputValues,
      apisList: newListApi
    })
    console.log(newListApi)
  }

  const handleSeletAllApis = () => {
    if (!checked) {
      const newList = []
      APIS_LIST.map((ictems, i) => newList.push({ name: ictems, id: uuidv4() }))
      setInputValues({
        ...inputValues,
        apisList: newList
      })
      setChecked(!checked)
    } else if (checked) {
      resteApiList()
      setChecked(!checked)
    }
  }

  const handelChangeEntorno = (event) => {
    setInputValues({
      ...inputValues,
      entorno: event.target.value
    })
  }

  const handleSubmit = (event) => {
    // if (!inputValues) return
    event.preventDefault()
    fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify(inputValues)
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const handleDeleteApi = (id) => {
    const filtredItems = inputValues.apisList.filter((item) => item.id !== id)
    setInputValues({
      ...inputValues,
      apisList: filtredItems
    })
  }

  return (
    <form onSubmit={handleSubmit} className='items-center flex flex-col'>
      {/* Pinta todos los input segun la info que hay en la variable INPUT_INFO */}
      {INPUT_INFO.map((info, index) => {
        return (
          <Input
            changeValue={handleInputChange}
            inputId={info.id}
            labelText={info.labelText}
            placeholder={info.placeholder}
            type={info.type}
            key={index}
          />
        )
      })}

      <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
        <label className='block uppercase tracking-wide text-gray-700 font-bold mb-2'>
          Entorno
          <div className='relative'>
            <select
              defaultValue={inputValues.entorno}
              onChange={handelChangeEntorno}
              className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            >
              <option value='pro'>Pro</option>
              <option value='pre'>Pre</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </label>
      </div>

      <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
        <label className='block uppercase tracking-wide text-gray-700  font-bold mb-2'>
          APIs
          <input
            list='apis-list'
            onChange={(e) => {
              setApi(e.target.value)
            }}
            className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
          />
        </label>

        <datalist id='apis-list'>
          {APIS_LIST.map((api, index) => {
            return (
              <option value={api} key={index}>
                {api}
              </option>
            )
          })}
        </datalist>
      </div>
      <ul className='w-92 p-2 list-disc'>
        {inputValues.apisList.map((apis, index) => {
          return (
            <CheckBox
              text={apis.name}
              id={apis.id}
              onClick={handleDeleteApi}
              key={index}
            />
          )
        })}
      </ul>
      <label>
        Select all apis:..
        <input
          type='checkbox'
          checked={checked}
          onChange={handleSeletAllApis}
        />
      </label>
      <button
        onClick={addApiBtns}
        className='mt-2 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
        type='button'
      >
        Add api
      </button>
      <button
        onClick={resteApiList}
        className='mt-2 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
        type='button'
      >
        Reset all apis
      </button>
      <button
        className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4'
        type='submit'
      >
        Generate files
      </button>
    </form>
  )
}
