import { ReactNode } from "react"

export default function DimensionInput({
  labelText
}: {
  labelText?: ReactNode;
}) {
  return (
    <div className="block space-y-1" tabIndex={-1}>
      {labelText && labelText}
      <div className="rounded divide-x divide-secondary gap-2 border-[.5px] border-secondary overflow-hidden flex items-center focus-within:border-primary">
        <div className="flex-1">
          <div className="flex items-center divide-x divide-secondary">
            <div className="p-2">
              <input type="text"
                className="w-full outline-0" />
            </div>
            <div className="p-2">
              <input type="text"
                className="w-full outline-0" />
            </div>
            <div className="p-2">
              <input type="text"
                className="w-full outline-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}