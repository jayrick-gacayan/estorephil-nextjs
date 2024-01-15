import { cookies } from "next/headers";
import Banner from "./_sections/banner";
import StoreProducts from "./_sections/store-products";

export default function Page() {
  let cookieStore = cookies();
  let countryCookie = cookieStore.get('country_code');
  return (
    <div className="h-full">
      <Banner countryCode={countryCookie?.value ?? 'ph'} />
      <StoreProducts countryCode={countryCookie?.value ?? 'ph'} />
    </div>
  )
}