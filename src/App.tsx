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
  // console.log(current_component);

  // Initialize the current browser history entry
  useEffect(() => {
    window.history.replaceState(
      { view: "/home" },
      "",
      window.location.pathname,
    );
  }, []);

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
  function MenuAction(_state: any, action: any): Content {
    // let next_state: Content = Views[action.type];

    if (!action.isPop) {
      window.history.pushState({ view: action.type }, "", action.type);
    }

    return action.type;
  }
  return (
    <>
      <div>
        <ViewContent value={dispatcher}>
          {current_component}
        </ViewContent>
      </div>
    </>
  );
}

export default App;
