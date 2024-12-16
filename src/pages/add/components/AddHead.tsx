import { Link } from "react-router-dom"
export default function AddHead() {
  return (
    <>
      <Link to="/dashboard">
        <div >
          Back
        </div>
      </Link>
      <div>
        List
      </div>
    </>
  );
}