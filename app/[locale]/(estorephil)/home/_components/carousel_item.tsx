export function CarouselItem({
  imgSrc,
  imgAlt
}: {
  imgSrc: string;
  imgAlt: string;
}) {
  return (
    <div className="shrink-0 h-full">
      <img alt={imgAlt} src={imgSrc} className="w-full h-full select-none" draggable='false' />
    </div>
  )
}