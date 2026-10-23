import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homesection1 from "./image.component/homepage/homesection1";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHolder from "./image.component/homepage/homeHolder";
import Aboutholder from "./about/aboutholder";
import Personalaccount from "./personalaccount/personalaccount";
import Debitcard from "./features/debitcard/debitcard";
import Insure from "./featuresinsurance/insure";
import Loan from "./loan/loan";
import Loanajo from "./loan2/loanajo";
import Startedbut1 from "./startedbut/startedbut1";
import Startbut2 from "./startedbut/startbut2";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/"   element={<HomeHolder/>} />
                    <Route path="/about" element={<Aboutholder/>} />
                    <Route path="/personalaza" element={<Personalaccount/>} />
                    <Route path="/debitcard"  element={<Debitcard/>} />
                    <Route path="/insure" element={<Insure/>}  />
                    <Route path="/loan" element={<Loan/>} />
                    <Route  path="/loanajo"  element={<Loanajo/>}  />
                    <Route path="/createaccount" element={<Startedbut1/>} />
                    <Route path="/createaccountstep-2" element={<Startbut2/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
