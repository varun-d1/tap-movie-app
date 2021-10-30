import { Alert } from "react-bootstrap";

function Error(props) {
  return (
    <div>
      {props.message && <Alert variant="danger">Error : {props.message}</Alert>}
    </div>
  );
}

export default Error;
