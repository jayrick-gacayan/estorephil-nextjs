export function getPageIndexOptions(
  totalNumberOfItems: number,
  maxNumberOfOptions: number,
  pageIndex: number,
  pageSize: number = 10,
) {
  let end = Math.ceil(totalNumberOfItems / pageSize);

  return Array.from({ length: maxNumberOfOptions > end ? end : maxNumberOfOptions }, (_, i) => {
    return pageIndex > maxNumberOfOptions ?
      (pageIndex - (maxNumberOfOptions - (i + 1))) : i + 1;
  });
}