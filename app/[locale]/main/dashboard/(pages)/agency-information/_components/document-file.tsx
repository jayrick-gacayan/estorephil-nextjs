import Image from 'next/image';
import { FaXmark } from 'react-icons/fa6';

export default function DocumentFile({
  document,
  ext,
  removeDocument,
}: {
  document: any,
  ext: string;
  removeDocument: (id: number) => void;
}) {

  let images = ['jpeg', 'png', 'gif', 'jpg'];
  let docs = ['doc', 'pdf'];

  return (
    <div className='relative group w-full h-full'>
      <span className="cursor-pointer absolute z-20 h-8 w-8 group-hover:block hidden text-center -top-[14px] -right-3 rounded-full bg-danger text-white"
        onClick={() => { removeDocument(document.id); }}>
        <FaXmark size={20} className="translate-x-1.5 translate-y-1.5" />
      </span>
      <div className="overflow-hidden transition-all delay-100 hover:bg-tertiary-dark border block border-tertiary-dark h-full w-full rounded cursor-pointer">
        <div className="w-full h-full relative cursor-pointer">
          {
            images.includes(ext) ?
              <div className="relative w-full h-full">
                (<Image alt={document.blobId}
                  src={document.url}
                  fill
                  quality={100}
                  priority />)
              </div>
              :
              (<iframe src={document.url}
                height={224}
                width={224}
                className="w-56 h-56 block absolute" />)
          }
        </div>
      </div>
    </div>
  )
}