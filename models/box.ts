export interface Box {
  id?: number;
  length?: number;
  width?: number;
  height?: number;
  unitMeasure?: string;
  price?: number;
  boxType?: string;
  companyId?: number;
  cargoType?: string;
  weight?: number;
  weightType?: string;
  referralPercentage?: number;
  isTaxInclusive?: boolean;
  taxRuleId?: number;
}