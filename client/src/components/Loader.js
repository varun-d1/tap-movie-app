import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Spinner animation="border" style={{ width: "5rem", height: "5rem" }} />
    </div>
  );
};

export default Loader;
