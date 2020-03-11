import * as React from "react";
import PageTitle from "./components/PageTitle/PageTitle";
import NoteAreaContainer from "./containers/NoteArea/NoteArea";

import "./App.css";

export const App: React.FC<{}> = () => {
  return (
    <div className="app">
      <PageTitle />
      <NoteAreaContainer></NoteAreaContainer>
    </div>
  );
};
