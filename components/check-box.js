import { RiDeleteBin6Line } from 'react-icons/ri'
export function CheckBox({ text, id, onClick }) {
  const setClick = () => {
    onClick(id)
  }
  return (
    <li key={id} className='flex items-center xl:w-1/2 2xl:w-1/3'>
      <button onClick={setClick} className='mr-1'>
        <RiDeleteBin6Line
          size={16}
          style={{ color: '#DC0028', fill: '#DC0028' }}
        />
      </button>
      <span>{text}</span>
    </li>
  )
}
