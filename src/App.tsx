import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Services from "./Components/Services"
import ContactUs from "./Components/ContactUs"
import Header from "./Components/Header"
import Template1 from "./Components/Template1"
import Template2 from "./Components/Tempelate2"
import Footer from "./Components/Footer"
function App() {
 

  return (
    <Router>
           <Header />
          
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/about" element= {<About />} />
        <Route path="/services" element= {<Services />} />
        <Route path="/contact" element= {<ContactUs />} />
        <Route path="/template1" element= {<Template1 />} />
        <Route path="/template2" element= {<Template2 />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
