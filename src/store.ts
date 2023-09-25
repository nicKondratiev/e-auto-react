import { create } from "zustand";

type SearchParams = {
  manu: string;
  model: string;
  location: string;
  custom: number | string;
  year: FromTo;
  price: FromTo;
  fuelType: string;
};

type FromTo = {
  from: number;
  to: number;
};

type Store = {
  searchParams: SearchParams;
  addManu: (manu: string) => void;
  addModel: (model: string) => void;
  addLocation: (location: string) => void;
  addCustom: (custom: number | string) => void;
  addYearFrom: (year: number) => void;
  addYearTo: (year: number) => void;
  addPriceFrom: (price: number) => void;
  addPriceTo: (price: number) => void;
  addFuelType: (fuel: string) => void;
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
