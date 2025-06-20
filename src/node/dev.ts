import { createServer } from "vite";

export async function createDevServer(root: string) {
  const vite = await createServer({
    root,
  });

  return vite;
}