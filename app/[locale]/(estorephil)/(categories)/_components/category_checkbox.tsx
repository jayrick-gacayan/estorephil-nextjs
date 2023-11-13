export function CategoryCheckbox({ category }: { category: string }) {
  return (
    <div className='block space-x-1.5'>
      <span className='inline-block relative align-middle'>
        <div className='border border-[#CFCFCF] rounded w-4 h-4'>
        </div>
      </span>
      <div className='inline-block text-sm align-middle'>{category}</div>
    </div>
  )
}