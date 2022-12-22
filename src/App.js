import React from "react";

import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import Route from "./components/Route";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />

      <div className="col-span-3">
        <div>
          <Route path="/accordion">
            <AccordionPage />
          </Route>
        </div>

        <div>
          <Route path="/dropdown">
            <DropdownPage />
          </Route>
        </div>

        <div>
          <Route path="/button">
            <ButtonPage />
          </Route>
          <div>
            <Route path="/modal">
              <ModalPage></ModalPage>
            </Route>
          </div>

          <div>
            <Route path="/table">
              <TablePage></TablePage>
            </Route>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
