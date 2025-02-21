interface ButtonSaveProps {
  onClick?: () => void; 
}

export default function ButtonSave({ onClick }: ButtonSaveProps) {
  return (
    <>
      <button
        onClick={onClick} 
        className="bg-black hover:bg-gray-800 text-white py-3 w-full rounded-lg"
      >
        Save
      </button>
    </>
  )
}

