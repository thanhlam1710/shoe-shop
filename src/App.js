// Component
import Footer from "./component/footer/Footer";
import Routers from "./Routers/Routers";
import Header from "./component/header/Header";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Routers />
        <Footer />
      </AuthContextProvider>

    </div>
  );
}

export default App;
