import { useState } from "react";
import TaxRulesDetailsInfo from "../_components/tax-rules-details-info";

export default function TaxRulesDetails() {
  return (
    <div className="flex flex-col bg-white w-full border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm px-5 py-5 h-min justify-between gap-8">
      <div className=" grow space-y-6">
        <div className="text-xl text-cyan-500 font-bold">Tax Details</div>
        <div className="flex gap-10">
          <div className="space-y-8  grow">
            <TaxRulesDetailsInfo
              label={"Tax Code"}
              data={"Tax Code"}
              isDropdown={false}
              isDropdownMultiple={false}
              dropdownLists={[""]}
            />
            <TaxRulesDetailsInfo
              label={"Read Description"}
              data={"Read Description"}
              isDropdown={false}
              isDropdownMultiple={false}
              dropdownLists={[""]}
            />
            <TaxRulesDetailsInfo
              label={"Product Category"}
              data={"Tax Code"}
              isDropdown={true}
              isDropdownMultiple={false}
              dropdownLists={[
                "All",
                "Grocery",
                "Eelectronics",
                "Food",
                "Fast Food",
              ]}
            />
          </div>
          <div className="space-y-8 grow">
            <TaxRulesDetailsInfo
              label={"Tax Description"}
              data={"Tax Description"}
              isDropdown={false}
              isDropdownMultiple={false}
              dropdownLists={[""]}
            />
            <TaxRulesDetailsInfo
              label={"Entity"}
              data={"Entity"}
              isDropdown={true}
              isDropdownMultiple={true}
              dropdownLists={["All", "Product", "Seller", "Courier", "Box"]}
            />

            <TaxRulesDetailsInfo
              label={"Product"}
              data={"Product"}
              isDropdown={false}
              isDropdownMultiple={false}
              dropdownLists={[""]}
            />
          </div>
        </div>
      </div>
      <div className=" grow space-y-6">
        <div className="text-xl text-cyan-500 font-bold">
          Origin & Destination
        </div>
        <div className="flex gap-10">
          <div className="space-y-8  grow">
            <TaxRulesDetailsInfo
              label={"Seller Origin Country"}
              data={"Seller Origin Country"}
              isDropdown={true}
              isDropdownMultiple={false}
              dropdownLists={["Canada", "Philippines"]}
            />
            <TaxRulesDetailsInfo
              label={"Destination Country"}
              data={"Destination Country"}
              isDropdown={true}
              isDropdownMultiple={false}
              dropdownLists={["Canada", "Philippines"]}
            />
          </div>
          <div className="space-y-8 grow">
            <TaxRulesDetailsInfo
              label={"Seller Province"}
              data={"Seller Province"}
              isDropdown={false}
              isDropdownMultiple={false}
              dropdownLists={[""]}
            />
            <TaxRulesDetailsInfo
              label={"Destination Province"}
              data={"Destination Province"}
              isDropdown={false}
              isDropdownMultiple={true}
              dropdownLists={[""]}
            />
          </div>
        </div>
      </div>
      <div className=" grow space-y-6">
        <div className="text-xl text-cyan-500 font-bold">Rates & Currency</div>
        <div className="flex gap-10">
          <div className="space-y-8  grow">
            <TaxRulesDetailsInfo
              label={"Rate %"}
              data={"Rate %"}
              isDropdown={false}
              isDropdownMultiple={false}
              dropdownLists={[""]}
            />
            <TaxRulesDetailsInfo
              label={"Threshold Quantity"}
              data={"Threshold Quantity"}
              isDropdown={false}
              isDropdownMultiple={false}
              dropdownLists={[""]}
            />
            <TaxRulesDetailsInfo
              label={"Threshold Currency"}
              data={"Threshold Currency"}
              isDropdown={false}
              isDropdownMultiple={false}
              dropdownLists={[""]}
            />
          </div>
          <div className="space-y-8 grow">
            <TaxRulesDetailsInfo
              label={"Rate Flat Amount"}
              data={"Rate Flat Amount"}
              isDropdown={false}
              isDropdownMultiple={false}
              dropdownLists={[""]}
            />
            <TaxRulesDetailsInfo
              label={"Threshold Amount"}
              data={"Threshold Amount"}
              isDropdown={false}
              isDropdownMultiple={false}
              dropdownLists={[""]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
