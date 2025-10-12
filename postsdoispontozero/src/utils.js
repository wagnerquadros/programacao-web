export function formatarData(yyyy_mm_dd) {
  if (!yyyy_mm_dd) return "";
  const d = new Date(yyyy_mm_dd + "T00:00:00");
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export const TODAS_CATEGORIAS = [
  "design",
  "destaques",
  "informação",
  "novidades",
  "redes sociais",
  "tecnologias",
  "tutoriais",
];
