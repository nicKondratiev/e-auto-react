import { create } from "zustand";

type SearchParams = {
  manu: string;
  model: string;
  location: string;
  custom: string;
  year: FromTo;
  price: FromTo;
  fuelType: string;
};

type FromTo = {
  from: number;
  to: number;
};

// we create this types to avoid writing same types again and again
type StringVoid = (val: string) => void;
type NumVoid = (val: number) => void;

type Store = {
  searchParams: SearchParams;
  addManu: StringVoid;
  addModel: StringVoid;
  addLocation: StringVoid;
  addFuelType: StringVoid;
  addYearFrom: NumVoid;
  addYearTo: NumVoid;
  addPriceFrom: NumVoid;
  addPriceTo: NumVoid;
  addCustom: StringVoid;
};

const useStore = create<Store>((set) => ({
  searchParams: {
    manu: "",
    model: "",
    location: "",
    custom: "",
    year: { from: 0, to: 0 },
    price: { from: 0, to: 0 },
    fuelType: "",
  },
  addManu: (manu) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        manu: manu,
        model: "",
      },
    })),

  addModel: (model) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        model: model,
      },
    })),

  addLocation: (location) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        location: location,
      },
    })),

  addCustom: (custom) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        custom: custom,
      },
    })),

  addYearFrom: (year) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        year: {
          ...state.searchParams.year,
          from: year,
        },
      },
    })),

  addYearTo: (year) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        year: {
          ...state.searchParams.year,
          to: year,
        },
      },
    })),

  addPriceFrom: (price) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        price: {
          ...state.searchParams.price,
          from: price,
        },
      },
    })),

  addPriceTo: (price) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        price: {
          ...state.searchParams.price,
          to: price,
        },
      },
    })),

  addFuelType: (fuelType) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        fuelType: fuelType,
      },
    })),
}));

export default useStore;
