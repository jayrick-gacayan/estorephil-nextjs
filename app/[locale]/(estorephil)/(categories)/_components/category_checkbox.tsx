export function CategoryCheckbox({ category }: { category: string }) {
  return (
    <div className="block space-x-1">
      <div className="inline-block relative">
        <div className="border border-[#CFCFCF] rounded w-4 h-4">
        </div>
      </div>
      <div className="inline-block align-middle">{category}</div>
    </div>
  )
}