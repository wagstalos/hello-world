// src/sanity/sanity.js
import { createClient } from "@sanity/client";

export const createSanityClient = () => {
  return createClient({
    projectId: "smxy7bg6", // Substitua pelo seu Project ID
    dataset: "production", // Ou o dataset que você está utilizando
    useCdn: false, // Use false para obter dados mais atualizados (sem usar o CDN)
    apiVersion: "2023-03-17", // Ou a versão que você está usando
  });
};
