export function CategoryCheckbox({ category }: { category: string }) {
  return (
    <div className='flex w-fit gap-2 items-center justify-start'>
      <span className='inline-block '>
        <div className='border border-[#CFCFCF] rounded w-4 h-4'>
        </div>
      </span>
      <div className='inline-block text-sm '>{category}</div>
    </div>
  )
}