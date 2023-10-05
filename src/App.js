import { Fragment, useContext } from "react";
import Manage from "./pages/Manage/Manage";
import Create from "./pages/Create/Create";
import Context from "./store/Context";


function App() {
  const ctx = useContext(Context);
  return (
    <Fragment>
      {
        ctx.currentRoute === 'create' ? <Create /> :
        <Manage />
      }
    </Fragment>
  );
}

export default App;
