// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Gerenciador de Conteúdo")
    .items([
      S.documentTypeListItem("project").title("Projetos"),
      S.documentTypeListItem("categoria").title("Categorias"),

      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !["project", "categoria"].includes(item.getId())
      ),
    ]);
