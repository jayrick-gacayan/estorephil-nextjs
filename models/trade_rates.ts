import { ReactNode } from "react";

export interface TradeRates {
  id: number;
  date: string;
  currencyFrom: string | ReactNode;
  currencyTo: string | ReactNode;
  orderRate: number;
  tradingRate: number;
  notes: string;
}