import ReactLoading, { LoadingType } from "react-loading";

const Loading = ({ type, color }: { type: LoadingType; color: string }) => (
  <div className="flex h-screen w-screen items-center justify-center bg-white">
    <ReactLoading type={type} color={color} />
  </div>
);

export default Loading;
