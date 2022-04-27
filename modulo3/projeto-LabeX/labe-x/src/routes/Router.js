import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroCliente from "../Pages/PublicPages/CadastroCliente";
import PaginaHome from "../Pages/PublicPages/PaginaHome";
import PaginaViagens from "../Pages/PublicPages/PaginaViagens";
import CadastroViagens from "../Pages/RestrictPages/CadastroViagens";
import DescricaoViagens from "../Pages/RestrictPages/DescricaoViagens";
import PaginaAdmin from "../Pages/RestrictPages/PaginaAdmin";
import PaginaLogin from "../Pages/RestrictPages/PaginaLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PaginaHome />} />
        <Route path="/viagens/lista" element={<PaginaViagens />} />
        <Route path="/viagens/candidatar" element={<CadastroCliente />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/admin/viagens/lista" element={<PaginaAdmin />} />
        <Route path="/admin/viagens/criar" element={<CadastroViagens />} />
        <Route path="/admin/viagens/:id" element={<DescricaoViagens />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;