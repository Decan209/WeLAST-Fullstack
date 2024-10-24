import { ClipLoader } from "react-spinners";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="loading-spinner">
        <ClipLoader color={"#123abc"} loading={true} size={50} />
      </div>
    </div>
  );
};

export default Loading;
