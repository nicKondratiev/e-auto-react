import { create } from "zustand";

type SearchParams = {
  manu: string;
  model: string;
  location: string;
  custom: number | string;
};

type Store = {
  searchParams: SearchParams;
  addManu: (manu: string) => void;
  addModel: (model: string) => void;
  addLocation: (location: string) => void;
  addCustom: (custom: number | string) => void;
};

const useStore = create<Store>((set) => ({
  searchParams: {
    manu: "",
    model: "",
    location: "",
    custom: "",
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
}));

export default useStore;
