export function TopSellersDataSection() {
  return (
    <div className='bg-white border rounded border-neutral-300 border-t-4 p-4 space-y-2'>
      <h4 className='font-[500]'>TOP SELLERS</h4>
      <div className='block w-full overflow-auto'>
        <table className='w-full min-w-[768px] lg:min-w-full'>
          <thead>
            <tr className='bg-primary-light text-white [&>th]:p-2'>
              <th>Logo</th>
              <th>Seller Name</th>
              <th>&#35; of Products</th>
            </tr>
          </thead>

        </table>
      </div>
    </div>
  )
}