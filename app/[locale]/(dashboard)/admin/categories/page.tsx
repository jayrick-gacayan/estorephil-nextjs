import CategoriesHeader from "./_sections/categories-header";
import CategoryItems from "./_sections/category-items";

export default function Page() {
  return (
    <>
      <CategoriesHeader />
      <div className="bg-[#F5F7FA] p-4 flex-1 overflow-auto">
        <CategoryItems />
      </div>
    </>
  );
}
