import * as path from "node:path";

export const PACKAGE_ROOT = path.join(__dirname, "..", "..", "..");

export const TEMPLATE_HTML_PATH = path.join(PACKAGE_ROOT, "template.html");

export const CLIENT_ENTRY_PATH = path.join(
  PACKAGE_ROOT,
  "src",
  "runtime",
  "client-entry.tsx"
);