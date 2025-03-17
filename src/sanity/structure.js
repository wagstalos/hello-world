// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Gerenciador de Conteúdo")
    .items([
      S.documentTypeListItem("project").title("Projetos"),

      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !["project"].includes(item.getId())
      ),
    ]);
