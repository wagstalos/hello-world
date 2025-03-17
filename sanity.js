import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "seu_project_id",
  dataset: "production",
  useCdn: false, 
  apiVersion: "2023-03-17"
});

export default sanityClient;
