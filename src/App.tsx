import { useState } from "react";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ContextFilterCount } from "./utils/context-filter";

function App() {

  const [contextFilterCount, setContextFilterCount] = useState<number>(0);

  return (
    <ContextFilterCount.Provider value={{ contextFilterCount, setContextFilterCount }}>
      <Header />
      <ListingBody />
    </ContextFilterCount.Provider>
  );
}

export default App
