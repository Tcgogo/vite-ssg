import { createServer } from "vite";
import { indexHtml } from "./plugins/indexHtml";
import pluginReact from "@vitejs/plugin-react";


export async function createDevServer(root: string) {
  const vite = await createServer({
    root,
    plugins: [indexHtml(), pluginReact()],
  });

  return vite;
}