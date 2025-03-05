import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import publicRoutes from "./router/Routes";

interface ROUTE_PROPS {
  path: string;
  name: string;
  component: React.ComponentType;
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map(
            ({ path, name, component: Component }: ROUTE_PROPS) => (
              <Route
                key={name}
                path={path}
                element={
                  <>
                    <Navbar />
                    <Component />
                    <Footer />{" "}
                  </>
                }
              />
            )
          )}

          <Route
            path="*"
            element={
              <div className="text-center text-4xl font-bold text-red-500 w-full h-screen flex items-center justify-center">
                PAGE NOT FOUND ERROR:404
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
