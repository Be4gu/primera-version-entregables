import { BsFillPersonFill } from 'react-icons/bs'
export function Header() {
  return (
    <header className='xl:h-24 2xl:h-32 w-full flex justify-between items-center shadow-md px-10'>
      <img
        className='h-10'
        src='../../logo_iberinform.svg'
        alt='Logo de Iberinform'
      />
      <div className='flex items-center gap-14'>
        <span className='cursor-pointer border-b-2 border-[#DC0028] text-[#DC0028] font-[CatalanaSans-Bold]'>
          Generador
        </span>
        <button disabled className='btn-primary-outline-disabled'>
          <BsFillPersonFill
            size={18}
            style={{ width: '20px', fill: '#E5A9B2' }}
          />
          Acceso
        </button>
      </div>
    </header>
  )
}
