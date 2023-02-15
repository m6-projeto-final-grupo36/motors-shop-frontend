import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Product } from "../pages/Product";
import { ProfileBuyer } from "../pages/ProfileBuyer";
import { ProfileSeller } from "../pages/ProfileSeller";
import { Register } from "../pages/Register";

export const ContainerRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/product" element={<Product />} />
    <Route path="/profileb" element={<ProfileBuyer />} />
    <Route path="/profiles" element={<ProfileSeller />} />
    <Route path="/home" element={<Home />} />

    <Route path="*" element={<Navigate replace to={"/login"} />} />
  </Routes>
);