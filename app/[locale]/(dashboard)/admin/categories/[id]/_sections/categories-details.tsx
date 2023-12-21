import CategoriesDetailsInfo from "../_components/categories-details-info";

export default function CategoriesDetails() {
  return (
    <div className="flex justify-evenly">
      <div className="bg-white w-[40rem] border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm px-5 py-5 h-min">
        <div className="space-y-4">
          <div>Categories Information</div>
          <CategoriesDetailsInfo
            label={"Agent Name:"}
            data={"Jezzel Villamore"}
          />
          <CategoriesDetailsInfo
            label={"Email:"}
            data={"illamorjezzel@gmail.com"}
          />
          <CategoriesDetailsInfo
            label={"Telephone Number:"}
            data={"09325119327"}
          />
          <CategoriesDetailsInfo label={"Role:"} data={"Agent Admin"} />
        </div>
      </div>
      <div className="bg-white w-[40rem] p-5 border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm px-5 py-5 h-min">
        <div className="space-y-4">
          <div>Company Details</div>
          <CategoriesDetailsInfo
            label={"Company Name:"}
            data={"Jezzel Villamore"}
          />
          <CategoriesDetailsInfo
            label={"Telephone Number:"}
            data={"09325119327"}
          />
          <CategoriesDetailsInfo
            label={"Mobile Number:"}
            data={"31515135135"}
          />
          <CategoriesDetailsInfo
            label={"Address:"}
            data={"Sample Street, Test Town, Central City, Sadge Province"}
          />
          <CategoriesDetailsInfo label={"Country:"} data={"Philippines"} />
          <CategoriesDetailsInfo label={"Business Nature:"} data={"Beauty"} />
          <CategoriesDetailsInfo label={"Referral Fee:"} data={"1.5"} />
        </div>
      </div>
    </div>
  );
}
