import React from "react";
import AppRouter from "./components/AppRouter";
import {useSelector} from "react-redux";
import Component from "./component";

function App() {
    const selectUser = useSelector(state => state.auth.auth);
      return (
        <div>
            {
                selectUser ? <Component /> :<AppRouter/>
            }
        </div>
      );
}

export default App;
