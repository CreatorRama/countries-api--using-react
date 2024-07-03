// import { useRouteError } from "react-router-dom"


const Error = () => {
  // const error=useRouteError()
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      {/* <p>{error.data}</p> */}
    </div>
  );
};

export default Error;

