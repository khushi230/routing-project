import useNavigationContext from "../hooks/useNavigationContext";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigationContext();

  if (currentPath === path) {
    return children;
  } else return null;
};
export default Route;
