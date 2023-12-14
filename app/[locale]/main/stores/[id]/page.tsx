import Banner from "./_sections/banner";
import StoreProducts from "./_sections/store-products";

export default async function Page() {
  return (
    <>
    <div className="h-full">
      <Banner />
      <StoreProducts />
    </div>

    </>
  )
}