import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContetxt";

import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "./hooks/useAuthentication";

import Loader from "./components/Loader";
import Footer from "./components/Footer";

import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";

import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Navbar from "./components/Navbar";



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
      <div className="flex items-center justify-center h-screen w-full bg-black">
        <Loader />
      </div>
    );
  }
  return (
    <AuthProvider value={{ user }}>
      <BrowserRouter>
        <>
          <Navbar />
          <main className=" flex flex-col  items-center  justify-start h-auto pb-[5vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path='/search' element={<Search />}/>
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/posts/edit/:id"
                element={user ? <EditPost /> : <Navigate to="/login" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route path='/posts/:id' element={<Post />}/>
            </Routes>
          </main>
        </>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
