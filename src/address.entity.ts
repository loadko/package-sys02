export enum AddressCountry {
  'ES',
}

export enum AddressStreetType {
  'AC',
  'AD',
  'AG',
  'AL',
  'AR',
  'AU',
  'AV',
  'AY',
  'BD',
  'BE',
  'BJ',
  'BL',
  'BO',
  'BR',
  'CA',
  'CG',
  'CH',
  'CJ',
  'CL',
  'CM',
  'CN',
  'CO',
  'CP',
  'CR',
  'CS',
  'CT',
  'CU',
  'DE',
  'DS',
  'ED',
  'EM',
  'EN',
  'EP',
  'ER',
  'ES',
  'EX',
  'FC',
  'FN',
  'GL',
  'GP',
  'GR',
  'GV',
  'HT',
  'JR',
  'LA',
  'LG',
  'ML',
  'MN',
  'MS',
  'MT',
  'NR',
  'PA',
  'PB',
  'PC',
  'PD',
  'PG',
  'PJ',
  'PL',
  'PM',
  'PN',
  'PO',
  'PQ',
  'PR',
  'PS',
  'PU',
  'PZ',
  'RB',
  'RC',
  'RD',
  'RR',
  'RU',
  'SA',
  'SB',
  'SC',
  'SD',
  'SU',
  'TN',
  'TO',
  'TR',
  'TS',
  'UR',
  'VI',
  'VO',
  'VR',
  'ZN',
}

export enum AddressSalesArea {
  'AREA NOT ASSIGNED',
  'Area A',
  'Area B',
  'Area C',
  'Area D',
  'Area E',
  'Area F',
  'Area G',
  'Area H',
}

export interface Address {
  id?                   : string;
  country               : AddressCountry;
  province              : string;
  postcode              : string;
  city                  : string;
  streetName            : string;
  streetType            : AddressStreetType;
  serviceableStatus     : string;
  coberturaPisoPortaId  : string;
  salesArea             : AddressSalesArea;
  streetNr              : string;
  coberturaId           : string;
  validated             : boolean;
  projectCode?          : string;
  competition?          : string;
  door?                 : string;
  block?                : string;
  floor?                : string;
  entrance?             : string;
}

export interface BssAddress {
  id?                 : string,
  country             : string,
  province            : string,
  postcode            : string,
  city                : string,
  streetName          : string,
  streetType          : string,
  streetNr?           : string,
  streetNrSuffix?     : string,
  streetNrLast?       : string,
  streetNrLastSuffix? : string,
  flatUnirNr?         : string,
  flatUnitNrSuffix?   : string,
  floorLeverNr?       : string,
  referenceId         : string,
  referenceSystem?    : string,
  validated           : boolean,
  parameters          : any
}