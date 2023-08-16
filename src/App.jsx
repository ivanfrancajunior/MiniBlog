import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <main className="bg-[#F9F4EC] text-zinc-800 dark:bg-[#201F1F]  dark:text-[#f5f5f5] h-screen w-full mx-auto flex flex-col  items-center  justify-start ">
        <>
        <div className="pt-16">

        </div>
          header
        </>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      </main>
        <>
          <Footer />
        </>
    </BrowserRouter>
  );
}

export default App;
