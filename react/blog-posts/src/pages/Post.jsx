import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const TODAS_CATEGORIAS = [
  "design",
  "destaques",
  "informação",
  "novidades",
  "redes sociais",
  "tecnologias",
  "tutoriais",
];

export default function PostPage({ posts = [], onSave }) {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const postExistente = useMemo(() => {
    if (!isEdit) return null;
    return posts.find((p) => p.id === Number(id)) || null;
  }, [isEdit, id, posts]);

  const [form, setForm] = useState({
    titulo: "",
    conteudo: "",
    data: "",
    categorias: [],
  });

  useEffect(() => {
    if (postExistente) {
      setForm({
        titulo: postExistente.titulo || "",
        conteudo: postExistente.conteudo || "",
        data: postExistente.data || "",
        categorias: Array.isArray(postExistente.categorias)
          ? postExistente.categorias
          : [],
      });
    }
  }, [postExistente]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function toggleCategoria(cat) {
    setForm((f) => {
      const has = f.categorias.includes(cat);
      if (has) {
        return { ...f, categorias: f.categorias.filter((c) => c !== cat) };
      }
      return { ...f, categorias: [...f.categorias, cat] };
    });
  }

  function submit(e) {
    e.preventDefault();
    if (!form.titulo.trim() || !form.conteudo.trim() || !form.data) {
      alert("Preencha Título, Conteúdo e Data.");
      return;
    }
    onSave(
      {
        titulo: form.titulo,
        conteudo: form.conteudo,
        data: form.data,
        categorias: form.categorias,
      },
      id
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>{isEdit ? "Editar Post" : "Novo Post"}</h1>
        <Link className="link" to="/">
          Voltar
        </Link>
      </div>

      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            value={form.titulo}
            onChange={onChange}
            placeholder="Digite o título"
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
            placeholder="Escreva o conteúdo do post"
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
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>
          <button type="submit" className="btn btn-ok">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
