import "./App.css";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import InboundFormPage from "./pages/InboundFormPage";
import CheckPaymentAndInformationPage from "./pages/CheckPaymentAndInformationPage";
import EnquiryPage from "./pages/EnquiryPage";

function App() {
  return (
    <div className="bg-slate">
      <Heading />
      <InboundFormPage />
      {/* <CheckPaymentAndInformationPage /> */}
      {/* <EnquiryPage /> */}
      <Footer />
    </div>
  );
}

export default App;
