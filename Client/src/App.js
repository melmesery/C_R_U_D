import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Add from "./pages/Add/Add.js";
import Blog from "./pages/Blog/Blog.js";
import Error from "./pages/Error/Error.js";
import LoginForm from "./pages/Login/LoginForm.js";
import SignUpForm from "./pages/SignUp/SignUpForm.js";
import Update from "./pages/Update/Update.js";
import View from "./pages/View/View.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" autoClose={1000} />
        <Routes>
          <Route exact path="/" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/view/:id" element={<View />} />
          <Route path="/blog/add" element={<Add />} />
          <Route path="/blog/update/:id" element={<Update />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
