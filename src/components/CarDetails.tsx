import { useMemo } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { FetchCarsData } from "./FetchCarsData";

type CarData = {
  manufacturer: string;
  model: string;
  location: string;
  img: string;
};

const CarDetails = () => {
  // we recieve this dynamic params from URL
  const { manu, model, location } = useParams();

  // we create this obj to iterate over it in buildQueryParams func
  const queryParams: Record<string, string | undefined> = useMemo(() => {
    return {
      manufacturer: manu,
      model: model,
      location: location,
    };
  }, [manu, model, location]);

  const { isLoading, error, data } = useQuery("searchResults", () => {
    return FetchCarsData(queryParams);
  });

  if (error) console.log(error);

  return (
    <div>
      <div className="h-[400px] w-[600px] overflow-scroll rounded-lg bg-white text-black">
        {isLoading && <h1>Loading</h1>}
        {data?.data?.map((car: CarData, index: number) => (
          <div key={index}>
            <div className="flex items-start gap-5">
              <div
                className={`h-64 w-80 bg-contain bg-center bg-no-repeat`}
                style={{
                  backgroundImage: `url(${car.img})`,
                }}
              />
              <div>
                <h1>Manufacturer: {car.manufacturer}</h1>
                <p>Model: {car.model}</p>
                <p>Location: {car.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDetails;
