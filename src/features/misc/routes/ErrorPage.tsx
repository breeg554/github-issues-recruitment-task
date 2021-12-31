import { Link } from "react-router-dom";
import { StyledNotFound } from "./style";

export const ErrorPage = () => {
  return (
    <StyledNotFound>
      <h1>404</h1>
      <p>Page not found</p>
      <p>
        Go back to the <Link to="/">home page.</Link>
      </p>
    </StyledNotFound>
  );
};
