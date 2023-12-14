'use client';

import { useAppSelector } from "@/app/_hooks/redux_hooks";
import { RootState } from "@/redux/store";
import { useMemo } from "react";
import { CourierDeliveryRatesState } from "../_redux/courier-delivery-rates-state";
import NormalCargoRatesTabContent from "./normal-cargo-rates-tab-content";
import BalikOrAlisBayanTabContent from "./balik-or-alis-bayan-tab-content";

export default function DeliveryRatesTabContent() {
  const courierDeliveryRatesState: CourierDeliveryRatesState = useAppSelector((state: RootState) => {
    return state.courierDeliveryRates;
  });

  const deliveryRateType = useMemo(() => {
    return courierDeliveryRatesState.deliveryRateType;
  }, [courierDeliveryRatesState.deliveryRateType]);


  return (
    <div className="p-4 space-y-4">
      {deliveryRateType === 'Normal Cargo' ? (<NormalCargoRatesTabContent />) : (<BalikOrAlisBayanTabContent />)}
      <div className="w-72">
        <button className="w-full p-2 rounded bg-info text-white hover:bg-info-dark">
          Update Rates
        </button>
      </div>
    </div>
  )
}