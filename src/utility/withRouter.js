import { useLocation } from "react-router-dom";

export const withRouter = (Component) => {
  return (props) => <Component {...props} location={useLocation()} />;
};
