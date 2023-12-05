import Image from 'next/image';
export default function Loading() {
    return (<>
        <Image className='' src='/loader.gif' height={30} width={30} alt='loading' />
    </>)
}