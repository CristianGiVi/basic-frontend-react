// Importa los componentes y funciones necesarios desde react-router-dom
import { Route, Routes } from "react-router-dom";

import { HomePage } from "./MainContent/HomePage/HomePage";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";

import { ShoppingCart } from "./MainContent/ShoppingCart/ShoppingCart";

// Define y exporta el componente principal App
export default function App() {
  return (
    <div style={{backgroundColor: "#fafafa",  color: "#3d3d3d"}}>
      <Header />

      {/* Define las rutas de la aplicación */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/prueba-frontend-react/" element={<HomePage />} />

        <Route path="/prueba-frontend-react/shopping-cart" element={<ShoppingCart />}></Route>
      </Routes>

      <Footer />


    </div>
  );
}
