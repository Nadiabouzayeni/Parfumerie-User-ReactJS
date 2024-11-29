import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Layouts/Auth/Login";
import MainLayout from "../Layouts/MainLayout";
import AddCategorie from '../Layouts/Categorie/AddCategorie';

export default function PrivateRoutes() {
  return (
    <Routes>
      {/* Route publique */}
      <Route path="/login" element={<Login />} />

      {/* Route pour afficher tout sous `/` */}
      <Route path="/" element={<MainLayout />} />
      <Route path="/AddCategorie" element={<AddCategorie />} />
    

      {/* Redirection en cas de route inconnue */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
