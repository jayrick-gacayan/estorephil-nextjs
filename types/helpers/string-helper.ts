export const titleize = (inputString: string) => {
    const words = inputString?.split('_')
    const capitalizedWords = words?.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    const result = capitalizedWords?.join(' ');
    return result;
}
