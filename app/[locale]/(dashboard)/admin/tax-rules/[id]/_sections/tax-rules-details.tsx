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
            />
            <TaxRulesDetailsInfo
              label={"Read Description"}
              data={"Read Description"}
              isDropdown={false}
              isDropdownMultiple={false}
            />
            <TaxRulesDetailsInfo
              label={"Product Category"}
              data={"Tax Code"}
              isDropdown={true}
              isDropdownMultiple={false}
            />
          </div>
          <div className="space-y-8 grow">
            <TaxRulesDetailsInfo
              label={"Tax Description"}
              data={"Tax Description"}
              isDropdown={false}
              isDropdownMultiple={false}
            />
            <TaxRulesDetailsInfo
              label={"Entity"}
              data={"Entity"}
              isDropdown={true}
              isDropdownMultiple={true}
            />

            <TaxRulesDetailsInfo
              label={"Product"}
              data={"Product"}
              isDropdown={false}
              isDropdownMultiple={false}
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
            />
            <TaxRulesDetailsInfo
              label={"Destination Country"}
              data={"Destination Country"}
              isDropdown={true}
              isDropdownMultiple={false}
            />
          </div>
          <div className="space-y-8 grow">
            <TaxRulesDetailsInfo
              label={"Seller Province"}
              data={"Seller Province"}
              isDropdown={false}
              isDropdownMultiple={false}
            />
            <TaxRulesDetailsInfo
              label={"Destination Province"}
              data={"Destination Province"}
              isDropdown={false}
              isDropdownMultiple={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
