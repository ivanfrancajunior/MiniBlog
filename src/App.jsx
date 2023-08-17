import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContetxt";

import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "./hooks/useAuthentication";

import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <AuthProvider value={{user}}>
      <BrowserRouter>
        <>
          <Navbar />
          <main className="bg-[#F9F4EC] text-zinc-800 dark:bg-[#201F1F]  dark:text-[#f5f5f5] flex flex-col  items-center  justify-start h-auto pb-[5vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
