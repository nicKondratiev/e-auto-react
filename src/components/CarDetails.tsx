import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

type CarData = {
  manufacturer: string;
  model: string;
  location: string;
  img: string;
}[];

const CarDetails = () => {
  const [carsData, setCarsData] = useState<CarData | undefined>();
  // we recieve this dynamic params from URL
  const { manu, model, location } = useParams();

  // we create this obj to iterate over it in buildQueryParams func
  const queryParams: Record<string, string | undefined> = {
    manufacturer: manu,
    model: model,
    location: location,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `http://localhost:4000/carsOnSale?${buildQueryParams(
          queryParams
        )}`;

        const response = await axios.get(apiUrl);
        setCarsData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [queryParams]);

  // this function builds query params with filtering non-empty values, mapping over them to set key&value pairs and then joining them
  const buildQueryParams = (params: Record<string, string | undefined>) => {
    return (
      Object.entries(params)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== undefined)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")
    );
  };

  return (
    <div>
      <div className="h-[400px] w-[600px] overflow-scroll rounded-lg bg-white text-black">
        {carsData?.map((car, index) => (
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
