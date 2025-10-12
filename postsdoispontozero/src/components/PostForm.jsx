import React, { useEffect, useState } from "react";
import { TODAS_CATEGORIAS } from "../Utils.js";
import { Link } from "react-router-dom";

export default function PostForm({ initialData, onSubmit, cancelTo = "/" }) {
  const [form, setForm] = useState({
    titulo: "",
    conteudo: "",
    data: "",
    categorias: [],
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        titulo: initialData.titulo || "",
        conteudo: initialData.conteudo || "",
        data: initialData.data || "",
        categorias: Array.isArray(initialData.categorias)
          ? initialData.categorias
          : [],
      });
    }
  }, [initialData]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function toggleCategoria(cat) {
    setForm((f) => {
      const has = f.categorias.includes(cat);
      return {
        ...f,
        categorias: has
          ? f.categorias.filter((c) => c !== cat)
          : [...f.categorias, cat],
      };
    });
  }

  function submit(e) {
    e.preventDefault();
    if (!form.titulo.trim() || !form.conteudo.trim() || !form.data) {
      alert("Preencha Título, Conteúdo e Data.");
      return;
    }
    onSubmit({ ...form });
  }

  return (
    <form onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          name="titulo"
          type="text"
          value={form.titulo}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="conteudo">Conteúdo</label>
        <textarea
          id="conteudo"
          name="conteudo"
          value={form.conteudo}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="data">Data</label>
        <input
          id="data"
          name="data"
          type="date"
          value={form.data}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Categorias</label>
        <div className="checklist">
          {TODAS_CATEGORIAS.map((cat) => (
            <label key={cat}>
              <input
                type="checkbox"
                checked={form.categorias.includes(cat)}
                onChange={() => toggleCategoria(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div className="footer-actions">
        <Link to={cancelTo} className="btn btn-danger">
          Cancelar
        </Link>
        <button type="submit" className="btn btn-ok">
          Salvar
        </button>
      </div>
    </form>
  );
}
