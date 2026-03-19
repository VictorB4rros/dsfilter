import DataCard from "./components/DataCard";
import FilterCard from "./components/FilterCard";
import Header from "./components/Header";
import * as productService from './services/product-service';

function App() {

  const products = productService.findByPrice(0, Number.MAX_VALUE);

  return (
    <>
      <Header />
      <FilterCard />
      <DataCard products={products}/>
    </>
  );
}

export default App
