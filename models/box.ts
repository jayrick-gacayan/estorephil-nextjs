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
  referralPercentage?: number;
  isTaxInclusive?: boolean;
  taxRuleId?: number;
}