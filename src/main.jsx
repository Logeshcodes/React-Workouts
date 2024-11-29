import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import State from "./Hooks/State";
import Effect from "./Hooks/Effect";
import Ref from "./Hooks/Ref";
import Context from "./Hooks/Context";
import Reducer from "./Hooks/Reducer";
import CustomHook from "./Hooks/CustomHook";
import Parent from "./Props/Parent";

createRoot(document.getElementById("root")).render(

  <StrictMode>
     <Parent/>
  </StrictMode>
);
