import { residencial } from "@assets/2023/residencial";

import { LocationType } from "./types";
import { TaxRateRange } from "types/types";

const locationKey = {
  residencial: "residencial",
  comercial: "comercial",
  rural: "rural",
};

const getPropertyData = (propertyType: LocationType) => {
  const propertyData = {
    [locationKey.residencial]: residencial,
    [locationKey.comercial]: [] as unknown as TaxRateRange[],
    [locationKey.rural]: [] as unknown as TaxRateRange[],
  };
  return propertyData[propertyType];
};

export { getPropertyData };
