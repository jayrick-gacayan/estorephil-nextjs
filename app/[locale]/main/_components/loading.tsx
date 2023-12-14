import Image from 'next/image';
export default function Loading({ emptyPage = false, height, width }: {
    emptyPage?: boolean
    height?: number,
    width?: number,
}) {
    return (<>
        {emptyPage ? (
            <div className='flex items-center justify-center h-screen w-screen'>
                <Image className='' src='/loader.gif' height={100} width={100} alt='loading' />
            </div>) : (<Image className='' src='/loader.gif' height={height ?? 30} width={width ?? 30} alt='loading' />)}

    </>)
}