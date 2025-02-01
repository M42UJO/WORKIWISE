// src/App.tsx
import React from "react";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import Router from "./routes/route";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <Router />
    </RecoilRoot>
  );
};

export default App;
