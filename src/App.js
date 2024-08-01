import "./App.css";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import InboundFormPage from "./pages/InboundFormPage";

function App() {
  return (
    <div className="bg-slate">
      <Heading />
      <InboundFormPage />
      <Footer />
    </div>
  );
}

export default App;
