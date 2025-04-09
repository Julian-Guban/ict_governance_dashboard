import React, { useContext, useEffect } from "react";
import GlobalContext from "../utils/contextProvider";

function Sextortion() {
  const { setSubtab } = useContext(GlobalContext);

  useEffect(() => {
    setSubtab(2);
  }, [setSubtab]);
  return <div>Sextortion</div>;
}

export default Sextortion;
