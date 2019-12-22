import { createFetchAction } from "./fetchAction";

import {
  getFundations as getFundationsApi,
  getSalesLocations as getSalesLocationsApi
} from "../../api/gill/resources";

export const getFundations = ({ system_id }) =>
  createFetchAction("FUNDATION", () => getFundationsApi({ system_id }));

export const getSalesLocations = fundationId =>
  createFetchAction("SALESLOCATION", fundationId =>
    getSalesLocationsApi(fundationId)
  );
