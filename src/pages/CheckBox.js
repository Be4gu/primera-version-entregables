export function CheckBox({ text, id, onClick }) {
  const setClick = () => {
    onClick(id)
  }
  return (
    <li key={id}>
      {text}
      <button
        onClick={setClick}
        className='bg-gray-300 border-2 rounded-md mt-2 p-[2px]  ml-3 border-purple-500'
      ></button>
    </li>
  )
}
