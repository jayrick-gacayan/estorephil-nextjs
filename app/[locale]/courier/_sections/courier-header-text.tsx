export default function CourierHeaderText({ text }: { text: string; }) {

  return (
    <div className='border-b-[.5px] border-secondary-dark'>
      <div className="p-4">
        <h1 className="text-4xl text-secondary-dark">{text}</h1>
      </div>
    </div>
  )
}