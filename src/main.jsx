import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Parent } from "./Hooks/Parent";


createRoot(document.getElementById("root")).render(

  <StrictMode>
     {/* <PureComponentDemo value='Hello' /> */}
     <Parent/>
    
  </StrictMode>
);
