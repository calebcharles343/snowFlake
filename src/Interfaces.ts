///////////////////////////////////
//HOMESTORE INTERFACE

import { ChangeEvent } from "react";

//////////////////////////////////
export interface HomeStore {
  coins: Coin[] | undefined;
  coinsSearched: any;
  isOpen: boolean;
  isLoading: boolean;
  querry: string;

  setIsOpen: () => void;
  fetchCoins: () => {};
  setQuerry: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchCoins: (querry: string, coin: Coin[] | undefined) => void;
}

export interface TableCoinsT {
  no_: number;
  iconUrl: string;
  name: string;
  price: string;
  change: string;
}

export interface optionsType {
  headers: {};
}

export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline: string | undefined[];
  lowVolume: boolean;
  coinrankingUrl: string;
  "24hVolume": string;
  btcPrice: string;
  contractAddresses: any[];
}

///////////////////////////////////
//PARAMS INTERFACE
//////////////////////////////////
export interface ChartParams {
  name: string;
}

////////////////////////////////
//FORM INTERFACE
///////////////////////////////

export interface UserDataT {
  avatar: string | null;
  email: string;
  email_verifie: boolean;
  firstName: string;
  lastName: string;
  phone_verified: boolean;
  sub: string;
}

export interface UserTOEditT {
  userToEdit: UserDataT;
}

export interface ModalT {
  children: any;
  onCloseModal: () => void;
}

/////////////////////
//TABLE INTERFACE
/////////////////////
export interface TableCoinT {
  no_: number;
  iconUrl: string;
  name: string;
  price: string;
  change: string;
}

export interface SortByT {
  options: [
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string }
  ];
}

export interface SelectT {
  options: [
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string }
  ];
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

//////////////////////////////
//CHART INTERFACE
//////////////////////////////
export interface ChartT {
  data: [];
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  fill: string;
  paddingAngle: number;
  dataKey: string;
  width: number;
  height: number;
}

//////////////////////////////
//LOGIN INTERFACE
//////////////////////////////

export interface LoginT {
  email: string;
  password: string;
}

//////////////////////////////
//SIGNUP INTERFACE
//////////////////////////////
export interface SignupT {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  // onSettled: () => void;
}

//////////////////////////////
//UPDATE USER INTERFACE
//////////////////////////////

export interface UpdateUserT {
  password: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
}
