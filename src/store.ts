import { create } from "zustand";

type SearchParams = {
  manu: string;
  model: string;
  location: string;
};

type Store = {
  searchParams: SearchParams;
  addManu: (manu: string) => void;
  addModel: (model: string) => void;
  addLocation: (location: string) => void;
};

const useStore = create<Store>((set) => ({
  searchParams: {
    manu: "",
    model: "",
    location: "",
  },
  addManu: (manu) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        manu: manu,
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
}));

export default useStore;
