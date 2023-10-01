export type CarType = {
  manu: string;
  model: string;
  location: string;
  img: string;
  fuelType: string;
  custom: number;
  year: number;
  price: number;
};

const DataFiltering = (
  data: CarType[],
  lowerYearLimit: number,
  upperYearLimit: number,
  lowerPriceLimit: number,
  upperPriceLimit: number
) => {
  const filteredData = data?.filter((item: CarType) => {
    const carYear = item.year;
    const carPrice = item.price;

    return (
      carYear >= lowerYearLimit &&
      carYear <= upperYearLimit &&
      carPrice >= lowerPriceLimit &&
      carPrice <= upperPriceLimit
    );
  });

  return filteredData;
};

export default DataFiltering;
