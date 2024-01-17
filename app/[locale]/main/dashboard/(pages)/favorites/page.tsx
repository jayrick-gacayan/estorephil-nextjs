import FavoritesTable from "./_sections/favorites-table";
import Providers from "./_sections/providers";

export default async function Page() {
  return (
    <Providers>
      <div className="p-8">
        <FavoritesTable />
      </div>
    </Providers>
  )
}