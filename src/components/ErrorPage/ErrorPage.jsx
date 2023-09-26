import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h2>Opps!</h2>
      <p>Error! invalid page url</p>
      <Link to="/">
      <button className="btn m-3 border-2 border-solid border-white">Go Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;