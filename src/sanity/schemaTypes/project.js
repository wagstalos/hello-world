export default {
  name: "project",
  title: "Projetos",
  type: "document",
  fields: [
    { name: "title", title: "Título", type: "string" },
    { name: "img", title: "Imagem", type: "url" },
    { name: "body", title: "Descrição", type: "text" },
    { name: "url", title: "Link", type: "url" },
    { name: "tag", title: "Tag", type: "string" },
    { name: "categoria", title: "Categoria", type: "string" },
    { name: "new", title: "Novo?", type: "string" },
  ],
};
