
import { Link, Route, Routes } from "react-router-dom";

import LoginForm from "./pages/login";
import { UserTable } from "./pages/danhsach";
import LogoutForm from "./pages/logout";
import LogiForm from "./lap3/form";
import AddProduct from "./lap3/thembai3";
import Dashbood from "./trangchu/dashbood";


function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/dashbood" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
            <Link to="/lap3" className="hover:text-gray-200">
              lap3
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/logout" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>

      </div>
      {/* viết router  */}
      <Routes>
        <Route path="/dashbood" element={<Dashbood />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/lap3" element={<LogiForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/list" element={<UserTable />} />
        <Route path="/logout" element={<LogoutForm />} />
      </Routes>
    </>
  );
}

export default App;
