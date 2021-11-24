import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./Example";
import Home from "./Home";
import Register from "./Register";
import About from "./About";
import DeleteUser from "./DeleteUser";
import Compra from "./Compra";
import ChangePassword from "./ChangePassword";
import ShowCompras from "./ShowCompras";
import Empleado from "./Empleado";
import ShowTiene from "./ShowTiene";
import ShowSucursales from "./ShowSucursales";
import AddEmpleado from "./adminCruds/AddEmpleado";
import AddSucursal from "./adminCruds/AddSucursal";
import AddProducto from "./adminCruds/AddProducto";
import UpdateProducto from "./adminCruds/UpdateProducto";
import DeleteProducto from "./adminCruds/DeleteProducto";
import ShowProductos from "./adminCruds/ShowProductos";
import DeleteEmpleado from "./adminCruds/DeleteEmpleado";
import ShowEmpleados from "./adminCruds/ShowEmpleados";
import UpdateSucursal from "./adminCruds/UpdateSucursal";
import DeleteSucursal from "./adminCruds/DeleteSucursal";
import ShowSucursal from "./adminCruds/ShowSucursal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Main() {
    return (
        <Router>
            <main>
                <Routes>
                    <Route
                        path="/truper-project/public/Home"
                        exact
                        element={<Home />}
                    />
                    <Route
                        path="/truper-project/public/LoginForm"
                        exact
                        element={<LoginForm />}
                    />
                    <Route
                        path="/truper-project/public/register"
                        exact
                        element={<Register />}
                    />
                    <Route
                        path="/truper-project/public/"
                        exact
                        element={<About />}
                    />
                    <Route
                        path="/truper-project/public/changePass"
                        exact
                        element={<ChangePassword />}
                    />
                    <Route
                        path="/truper-project/public/Comprar"
                        exact
                        element={<Compra />}
                    />
                    <Route
                        path="/truper-project/public/DeleteUser"
                        exact
                        element={<DeleteUser />}
                    />
                    <Route
                        path="/truper-project/public/ShowCompras"
                        exact
                        element={<ShowCompras />}
                    />
                    <Route
                        path="/truper-project/public/Empleado"
                        exact
                        element={<Empleado />}
                    />
                    <Route
                        path="/truper-project/public/AddProducto"
                        exact
                        element={<AddProducto />}
                    />
                    <Route
                        path="/truper-project/public/ShowTiene"
                        exact
                        element={<ShowTiene />}
                    />
                    <Route
                        path="/truper-project/public/ShowSucursales"
                        exact
                        element={<ShowSucursales />}
                    />
                    <Route
                        path="/truper-project/public/AddEmpleado"
                        exact
                        element={<AddEmpleado />}
                    />
                    <Route
                        path="/truper-project/public/UpdateProducto"
                        exact
                        element={<UpdateProducto />}
                    />
                    <Route
                        path="/truper-project/public/DeleteProducto"
                        exact
                        element={<DeleteProducto />}
                    />
                    <Route
                        path="/truper-project/public/ShowProductos"
                        exact
                        element={<ShowProductos />}
                    />
                    <Route
                        path="/truper-project/public/DeleteEmpleado"
                        exact
                        element={<DeleteEmpleado />}
                    />
                    <Route
                        path="/truper-project/public/ShowEmpleados"
                        exact
                        element={<ShowEmpleados />}
                    />
                    <Route
                        path="/truper-project/public/AddSucursal"
                        exact
                        element={<AddSucursal />}
                    />
                    <Route
                        path="/truper-project/public/UpdateSucursal"
                        exact
                        element={<UpdateSucursal />}
                    />
                    <Route
                        path="/truper-project/public/DeleteSucursal"
                        exact
                        element={<DeleteSucursal />}
                    />
                    <Route
                        path="/truper-project/public/ShowSucursal"
                        exact
                        element={<ShowSucursal />}
                    />
                </Routes>
            </main>
        </Router>
    );
}
export default Main;
if (document.getElementById("example")) {
    ReactDOM.render(<Main />, document.getElementById("example"));
}
