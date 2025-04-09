import React, { useContext, useEffect } from 'react'
import GlobalContext from '../utils/contextProvider';

function Projects() {
  const { setTab } = useContext(GlobalContext);

  useEffect(() => {
    setTab(4);
  }, [setTab]); 
  return (
    <div>Projects</div>
  )
}

export default Projects