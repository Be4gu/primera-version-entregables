import { RiDeleteBin6Line } from 'react-icons/ri'
export function CheckBox({ text, id, onClick }) {
  const setClick = () => {
    onClick(id)
  }
  return (
    <li key={id} className='flex mt-3 items-end gap-10'>
      <button
        onClick={setClick}
        className='bg-gray-300 border-2 rounded-md mt-2 p-[3px]  border-purple-500'
      >
        <RiDeleteBin6Line style={{ color: '#DC0028', width: '22px' }} />
      </button>
      <span>{text}</span>
    </li>
  )
}
