export function Input({ labelText, type, placeholder, inputId, changeValue }) {
  const prueba = (event) => {
    changeValue(inputId, event)
  }
  const inputClass = inputId === 'num' ? 'input-primary-sm' : 'input-primary-lg'
  const divWidth =
    inputId === 'num'
      ? 'font-[CatalanaSans-Regular] flex flex-col w-32'
      : 'font-[CatalanaSans-Regular] flex flex-col w-80'
  return (
    <div className={divWidth}>
      <label htmlFor={inputId} className='text-[#828282] text-sm'>
        {labelText}
      </label>
      <input
        type={type}
        id={inputId}
        onChange={(e) => {
          prueba(e.target.value)
        }}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  )
}
