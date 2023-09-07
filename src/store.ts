import { create } from "zustand";

const useStore = create((set) => ({
  manufacturer: "",
  model: "",
  location: "",
}));
