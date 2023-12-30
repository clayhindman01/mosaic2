import React, { createContext, useState } from "react";

const PictureContext = createContext(undefined);
const PictureDispatchContext = createContext(undefined);

function PictureProvider({ children }) {
  const [picture, setPicture] = useState({
    width: null,
    height: null,
    uri: null,
  });

  return (
    <PictureContext.Provider value={picture}>
      <PictureDispatchContext.Provider value={setPicture}>
        {children}
      </PictureDispatchContext.Provider>
    </PictureContext.Provider>
  );
}

export { PictureProvider, PictureContext, PictureDispatchContext };
