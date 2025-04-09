import React, { useContext, useEffect } from "react";
import GlobalContext from "../utils/contextProvider";

function Hacking() {
  const { setSubtab } = useContext(GlobalContext);

  useEffect(() => {
    setSubtab(3);
  }, [setSubtab]);

  return <div>Hacking</div>;
}

export default Hacking;
