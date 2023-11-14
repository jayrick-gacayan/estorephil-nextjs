export function Checkbox({ labelText }: { labelText: string }) {
  return (
    <div className='flex w-fit gap-2 items-center justify-start'>
      <div className='flex-none w-auto'>
        <div className='border border-tertiary rounded w-4 h-4' />
      </div>
      <div className='inline-block text-sm flex-1'>{labelText}</div>
    </div >
  )
}