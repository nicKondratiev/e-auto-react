import useStore from "../../store";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const store = useStore();

  const manu = store.searchParams.manu.split(" ").join("-");
  const model = store.searchParams.model.split(" ").join("-");
  const location = store.searchParams.location.split(" ").join("-");

  return (
    <div className="col-start-4 row-start-3">
      <button
        onClick={() =>
          navigate(`/iyideba-manqanebi/${manu}/${model}/${location}`)
        }
        className="w-2/3 rounded bg-orange-500 p-1"
      >
        Search
      </button>
    </div>
  );
};

export default Button;
