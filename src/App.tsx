import { useEffect, useReducer } from "react";
import "./App.css";
import Main from "./components/Main";
import About from "./components/About";
import { ViewContent, type Content } from "./domain/menu";

const Views: any = {
  "/home": <Main />,
  "/about": <About />,
}

function App() {
  const [content, dispatcher] = useReducer(MenuAction, "/home");

  const current_component: any = Views[content];

  // Initialize the current browser history entry
  useEffect(() => {
    window.history.replaceState(
      { view: "/home" },
      "",
      window.location.pathname,
    );
  }, []);

  // Handleing Browser `pop` state history event
  useEffect(() => {
    function customPopState(event: any) {
      if (event.state?.view) {
        dispatcher({
          type: event.state.view,
          isPop: true,
        });
      }
    }

    window.addEventListener("popstate", customPopState);
  }, []);

  /* I'm using `useReducer` just in case we may add more logics to the menus */
  function MenuAction(_state: any, action: any): Content {
    if (!action.isPop) {
      window.history.pushState({ view: action.type }, "", action.type);
    }

    return action.type;
  }

  return (
    <div>
      <ViewContent value={dispatcher}>
        {current_component}
      </ViewContent>
    </div>
  );
}

export default App;
