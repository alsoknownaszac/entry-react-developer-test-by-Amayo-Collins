import { useNavigate } from "react-router-dom";

export const withNavigate = (Component) => {
  return (props) => <Component {...props} navigate={useNavigate()} />;
};
