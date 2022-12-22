import { useContext } from "react";

import NavigationContext from "../context/navigationContext";

const useNavigationContext = () => {
  return useContext(NavigationContext);
};

export default useNavigationContext;
