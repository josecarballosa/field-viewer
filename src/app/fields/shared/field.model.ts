export interface Field {
  odsId: number;
  ima: string;
  plantingDate: string;
  lastIrrDate?: any;
  modifiedDate: string;
  HB_Response: string;
  HB_Imx: HBImx[];
  HB_ImaDailyJson: HBImaDailyJson;
  HB_ImaImageTypeWU: string;
  HB_ImaImageTypeCPI: HBImaImage[];
  HB_ImaImageTypeETA: HBImaImage[];
  HB_ImaPixvalsETA: string;
  HB_ImaPixvalsCPI: string;
  HB_ImaWater: HBImaWater;
  HB_ImaSeriesDEP: HBImaSeriesDEP;
  batchImaStatus: number;
  uuid_: string;
  fieldFarmId: number;
  fieldUserId: number;
  fieldName: string;
  fieldArea: number;
  fieldCropType: string;
  fieldEnableAqua: string;
  fieldPerSand: number;
  fieldPerClay: number;
  fieldSoilType: string;
  fieldIrrigationType: string;
  fieldMm_Hr: string;
  fieldAddTag: string;
  fieldPlantingDate: string;
  fieldMoisture: number;
  createDate: string;
  IMA: string;
  geoJSONResponse: GeoJSONResponse;
  fieldStartingSoil: string;
  snapshotDate: string;
  hbPlantingDateStatus: number;
  hbResponse: string;
  field_status: number;
  season: string;
  HB_field_status_update: number;
  rootCompactNess: number;
}

export interface GeoJSONResponse {
  type: string;
  properties: Properties;
  geometry: Geometry;
}

export interface Geometry {
  type: string;
  coordinates: number[][][];
}

export interface Properties {}

export interface HBImx {
  IMA: string;
  max_allow_dep: number;
  plant_date: string;
  name: string;
  area: number;
  soil_type: string;
  ima_phase: string;
  crop: string;
  perm_wilt_pt: number;
  irr_sys: boolean;
  soil_profile: number;
  ima_state: string;
  soil_cap: number;
  irr_type: string;
  irr_flow?: any;
  soil_0_pct: number;
}

export interface HBImaDailyJson {
  acc_eta: number;
  fli_precip: number;
  temp_min: number;
  gdd: number;
  fli_eta: number;
  irr_forecast: number;
  et0: number;
  soil_water_metric: number;
  temp_max: number;
  irr: number;
  snapshot_date: string;
  eta: number;
  fli_irr: number;
  IMA: string;
  rh_max: number;
  last_over_date: string;
  acc_irr: number;
  acc_precip: number;
  rh_min: number;
  cpi_metric: number;
  acc_gdd: number;
  name: string;
  dep: number;
  crop_stage: string;
  precip: number;
  days_until_mad: number;
  last_irr_date: string;
}

export interface HBImaImage {
  IMA: string;
  legend_min?: string;
  legend_max?: string;
  lngne: number;
  latsw: number;
  lngsw: number;
  latne: number;
  over_date: string;
  name: string;
  b64img: string;
  fmt: string;
  imgtype: string;
}

export interface HBImaWater {
  IMA: string;
  water: Water[];
  name: string;
}

export interface Water {
  date: string;
  irr: number;
  total: number;
  acc_eta: number;
  precip: number;
}

export interface HBImaSeriesDEP {
  IMA: string;
  end: string;
  name: string;
  series: (number | string)[][];
  beg: string;
  attrib: string;
}
