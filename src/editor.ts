import { serve } from "@hono/node-server";
import { readFileSync } from "fs";
import { Hono } from "hono";
import { codeToHtml } from "shiki";

const app = new Hono();

app.get("/", (c) => {
  const stylePage = readFileSync("src/content/blog/style.md", "utf-8");
  return c.html(
    codeToHtml(stylePage, { lang: "markdown", theme: "github-dark" })
  );
});

serve({
  fetch: app.fetch,
  port: 3000,
});
