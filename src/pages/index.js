import { INPUT_INFO, APIS_LIST } from '../../utils/constants'
import { Input } from '../../components/input.js'
import { CheckBox } from '../../components/check-box.js'
import { v4 as uuidv4 } from 'uuid'
import React, { useState } from 'react'
import Select from 'react-select'
import { Header } from '../../components/header'
import { log } from 'util'
import { list } from 'postcss'
import { type } from 'os'
// import { useSession } from 'next-auth/react'

export default function Home() {
  const [inputValues, setInputValues] = useState({
    num: '',
    name: '',
    clientID: '',
    clientSecret: '',
    entorno: 'pre',
    apisList: []
  })
  const a = ''
  const [downloadLink, setDownloadLink] = useState(null)
  const [api, setApi] = useState('')
  const [checked, setChecked] = useState(false)
  const [err, setError] = useState()
  const [valueSerch, setValueSerch] = useState()

  const handelValueSerch = (value) => {
    setValueSerch(value)
    console.log(value)
  }

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

  const handleSeletAllApis = () => {
    if (!checked) {
      const newList = []
      APIS_LIST.map((items, i) => newList.push(items.value))
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
  const addApiBtns = () => {
    if (!api) return
    let hola = true
    inputValues.apisList.filter((item) => {
      if (item.name === api) {
        hola = false
      }
    })

    if (hola) {
      const newListApi = [...inputValues.apisList]
      newListApi.push({ name: api, id: uuidv4() })
      setInputValues({
        ...inputValues,
        apisList: newListApi
      })
    }
  }

  const handelChangeEntorno = (value) => {
    setInputValues({
      ...inputValues,
      entorno: value
    })
  }

  const handleSubmit = (event) => {
    if (!inputValues) return
    event.preventDefault()
    fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify(inputValues)
    })
      .then((res) => res.blob())
      .then((data) => {
        const a = document.createElement('a')
        const url = window.URL.createObjectURL(data)
        a.href = url
        a.download = `ApisIberinform - ${
          inputValues.name
        } - ${inputValues.entorno.toUpperCase()}`
        document.body.appendChild(a)
        a.click()

        console.log('entra')
        window.URL.revokeObjectURL(a.href)
      })
      .catch((err) => {
        setError(err)
      })
  }

  const handleDeleteApi = (id) => {
    const filtredItems = inputValues.apisList.filter((item) => item.id !== id)
    setInputValues({
      ...inputValues,
      apisList: filtredItems
    })
  }
  const customStyles = (width) => ({
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #828282',
      color: '#666666',
      padding: 5,
      fontSize: 13,
      backgroundColor: state.isSelected ? '#666666' : 'white',
      color: state.isSelected ? '#fff' : '#666666',
      backgroundColor: state.isFocused ? '#666666' : 'white',
      color: state.isFocused ? '#fff' : '#666666',
      cursor: 'pointer',
      appearance: 'none'
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />

      flexDirection: 'row',
      display: 'flex',
      width: width,
      borderBottom: '2px solid rgb(130 130 130 / 50%)',
      svg: { fill: '#828282' },
      span: { visibility: 'hidden' },
      color: 'red',
      fontSize: 16,
      padding: 0
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: '#666666',
      fontSize: 16,
      margin: 0
    }),
    valueContainer: (defaultStyles) => ({
      ...defaultStyles,
      color: '#666666',
      fontSize: 16,
      padding: 0
    })
  })

  // const [selectedItems, setSelectedItems] = useState([])

  const handleToggleSelection = (item) => {
    console.log(item)
    if (inputValues.apisList.includes(item)) {
      let aux = inputValues.apisList.filter(
        (selectedItem) => selectedItem !== item
      )
      setInputValues({
        ...inputValues,
        apisList: aux
      })
      console.log(aux)
    } else {
      const newListApi = [...inputValues.apisList]
      newListApi.push(item)
      setInputValues({
        ...inputValues,
        apisList: newListApi
      })
    }

    // setInputValues({
    //   ...inputValues,
    //   apisList: [...selectedItems]
    // })
  }

  const handleAddToNewArrayCheck = () => {
    // Aquí podrías hacer algo con los elementos seleccionados si es necesario
    setSelectedItems(originalArray)
  }

  // return (
  //   <div>
  //     <h1>Array Original</h1>
  //     <ul>
  //       {originalArray.map((item, index) => (
  //         <li key={index}>
  //           <label>
  //             <input
  //               type='checkbox'
  //               className='accent-[#DC0028] w-4 h-4'
  //               checked={selectedItems.includes(item)}
  //               onChange={() => handleToggleSelection(item)}
  //             />
  //             {item}
  //           </label>
  //         </li>
  //       ))}
  //     </ul>
  //     {/* <button onClick={handleAddToNewArray}>
  //       Agregar elementos seleccionados
  //     </button> */}
  //     <div>
  //       {inputValues.apisList.map((item, index) => (
  //         <li key={index}>{item}</li>
  //       ))}
  //     </div>
  //     <input
  //       id='checkbox-all-apis'
  //       className='accent-[#DC0028] w-4 h-4'
  //       type='checkbox'
  //       // checked={checked}
  //       onChange={handleSeletAllApis}
  //     />
  //   </div>
  // )
  return (
    <>
      <Header />

      <h1 className='font-[Catalana-Bold] xl:text-4xl 2xl:text-5xl text-[#666666] text-center xl:mt-10 2xl:mt-12 2xl:mb-24 xl:mb-16'>
        Generador de entregables API's
      </h1>
      <div className='w-full flex justify-start gap-20 px-10'>
        <form
          onSubmit={handleSubmit}
          className=' w-80 flex xl:gap-y-0 2xl:gap-y-7 h-[558px] flex-wrap justify-between '
        >
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
          <div className='font-[CatalanaSans-Regular] flex flex-col w-32'>
            <label
              htmlFor='searcherEnvironment'
              className='text-[#828282] text-sm'
            >
              Entorno
            </label>
            <Select
              styles={customStyles(125)}
              instanceId='searcherEnvironment'
              options={[
                { value: 'pro', label: 'Pro' },
                { value: 'pre', label: 'Pre' }
              ]}
              defaultValue={[{ value: 'pre', label: 'Pre', isFixed: true }]}
              onChange={(e) => {
                handelChangeEntorno(e.value)
              }}
              isSearchable={false}
            />
          </div>

          <div className='flex justify-between items-center'>
            <label
              htmlFor='checkbox-all-apis'
              className='cursor-pointer font-[CatalanaSans-Regular] text-base text-[#828282] text-center mr-[6px]'
            >
              Sel. todo
            </label>
            <input
              id='checkbox-all-apis'
              className='accent-[#DC0028] w-4 h-4'
              type='checkbox'
              checked={checked}
              onChange={handleSeletAllApis}
            />
          </div>
          <button onClick={resteApiList} className='btn-primary' type='button'>
            Res. todo
          </button>
          <div className='flex justify-center items-center w-full mt-3'>
            <button
              className='bg-[#DC0028] hover:bg-[#8E2A2B] py-4 px-5 rounded-[30px] uppercase font-[CatalanaSans-Medium] shrink-1 text-white leading-3'
              type='submit'
            >
              Generar ficheros
            </button>
          </div>
          <span>{err}</span>
        </form>
        <span
          style={{ boxShadow: '20px 10px 6px -5px rgba(0,0,0,0.5)' }}
          className='xl:h-[550px] 2xl:h-[600px] w-[3px] bg-[#82828280]'
        ></span>
        <div className='w-full '>
          <div className='flex gap-8 align-bottom'>
            <h3 className='font-[Catalana-Bold] text-2xl text-[#666666] inline-block  align-text-bottom'>
              Listado de API's
            </h3>
            <input
              type='text'
              placeholder='Buscar API...'
              className='input-primary-lg'
              onChange={(event) => setValueSerch(event.target.value)}
            ></input>
          </div>
          <ul
            typeof='none'
            className='w-full mt-10 grid grid-cols-2 font-[Catalana-Medium] text-[#666666]'
          >
            {APIS_LIST.map((item, index) => (
              <li key={index}>
                <label>
                  <input
                    type='checkbox'
                    className='accent-[#DC0028] w-4 h-4 mr-1'
                    checked={inputValues.apisList.includes(item.value)}
                    onChange={() => handleToggleSelection(item.value)}
                  />
                  {item.value.includes(valueSerch) && valueSerch !== '' ? (
                    <span className='bg-[#dc002850] text-[#555555]'>
                      {item.value}
                    </span>
                  ) : (
                    <span className='bg-transparent'>{item.value}</span>
                  )}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

// const { data: session } = useSession()
// if (session) {
// }
