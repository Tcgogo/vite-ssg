import { cac } from "cac";
import { createDevServer } from "./dev";

const cli = cac().help().version("1.0.0");

cli.command("dev [root]", "Start the development server").action(async (root: string) => {
  const vite = await createDevServer(root);
  await vite.listen(3000);
  vite.printUrls();
});

cli.command("build [root]", "Build the project").action((root: string) => {
  console.log("build", root);
});

cli.parse();