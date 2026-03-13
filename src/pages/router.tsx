import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import LoginForm from "./login";
import { UserTable } from "./danhsach";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/product" element={<UserTable />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;






// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<OrderList />} />
//                 <Route path="/order/add" element={<OrderAdd />} />
//                 <Route path="/order/edit/:id" element={<OrderEdit />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/login" element={<Login />} />
//             </Routes>
//         </BrowserRouter>
//     )

// }
// export default App;