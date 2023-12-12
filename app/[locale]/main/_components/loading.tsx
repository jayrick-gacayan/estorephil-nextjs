import Image from 'next/image';

export default function LoaderImageIcon({
    size
}: {
    size: number
}) {
    return (<Image src='/loader.gif' height={size} width={size} alt='loading' />);
}