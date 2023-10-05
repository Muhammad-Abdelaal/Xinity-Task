import { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import Header from "../Header/Header";

import classes from "./LayoutContainer.module.css";

function LayoutContainer(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function menuStateHandler () {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <div className={classes["layout-container"]}>
      <Sidebar isMenuOpen={isMenuOpen} />
      <div style={{ width: "100%" }}>
        <Header menuStateHandler={menuStateHandler} isMenuOpen={isMenuOpen}/>
        <Main isMenuOpen={isMenuOpen}>{props.children}</Main>
      </div>
    </div>
  );
}

export default LayoutContainer;
