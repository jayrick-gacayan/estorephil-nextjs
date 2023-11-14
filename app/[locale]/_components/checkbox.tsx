export function Checkbox({
  labelText,
  current,
  onCheckboxChanged,
}: {
  labelText: string;
  current: string;
  onCheckboxChanged: (text: string) => void;
}) {
  return (
    <div className='flex w-fit gap-2 items-center justify-start'
      onClick={() => { onCheckboxChanged(labelText) }}>
      <div className='flex-none w-auto'>
        <div className={`border ${current === labelText ? 'border-primary' : 'border-tertiary'} rounded w-4 h-4`} />
      </div>
      <div className={`inline-block text-sm flex-1 ${labelText === current ? 'text-primary' : 'text-inherit'}`}>{labelText}</div>
    </div >
  )
}