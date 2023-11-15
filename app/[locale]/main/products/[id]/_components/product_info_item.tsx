export function ProductInfoItem({
  labelText,
  info
}: {
  labelText: string;
  info: string;
}): JSX.Element {
  return (
    <div className="block w-full">
      <h6 className="font-bold">{labelText}</h6>
      <div>{info}</div>
    </div>
  )
}