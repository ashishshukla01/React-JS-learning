import React from "react";
const Error = () => {

  const err = useRouteError();
  console.log(err);
  return (
    <div>
      
      <h1>Error! Page not found</h1>
    </div>
  )
}

export default Error;