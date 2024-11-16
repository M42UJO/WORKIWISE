import { Suspense } from "react";

import Router from "./routes/route";

function App() {
  return (
    <>
      <Suspense>
        <Router />
      </Suspense>
    </>
  );
}

export default App;
