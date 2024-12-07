import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import State from "./Hooks/State";
import Effect from "./Hooks/Effect";
import Ref from "./Hooks/Ref";
import Context from "./Hooks/Context";
import Reducer from "./Hooks/Reducer";
import CustomHook from "./Hooks/CustomHook";
import Parent from "./Props/Parent";

// memoization

import PureComponentDemo from "./memoization/PureComponentDemo";
import UseMemo from "./memoization/UseMemo";
import ReactMemo from "./memoization/ReactMemo";
import PortalDemo from "./Props/PortalDemo";


import UserList from "./DynamicRendering/UserList";
import ConditionalRendering from "./DynamicRendering/ConditionalRendering";
import Style from "./DynamicRendering/Style";

import User from "./Components/User";
import Forward from "./Hooks/Forward";

import RenderProps from "./Props/RenderProps";

import App from "./CodeSplitting/LazyLoading";




createRoot(document.getElementById("root")).render(

  <StrictMode>
     {/* <PureComponentDemo value='Hello' /> */}
     <App/>
  </StrictMode>
);
