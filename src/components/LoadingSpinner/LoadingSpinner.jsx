import { HashLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center z-30" style={{height: 'calc(100vh - 90px)'}}>
            <HashLoader
                color="#0d6efd"
                size={80}
                speedMultiplier={1.2}
            />
        </div>
    );
};

export default LoadingSpinner;