import { Plugin } from "vite";
import * as fs from "node:fs";
import { CLIENT_ENTRY_PATH, TEMPLATE_HTML_PATH } from "../constant";

export function indexHtml(): Plugin {
  return {
    name: "index-html",
    // transformIndexHtml: (html) => {
    //   return {
    //     html,
    //     tags: [{
    //       tag: "script",
    //       attrs: {
    //         type: "module",
    //         src: `/@fs/${CLIENT_ENTRY_PATH}`,
    //       },
    //       injectTo: "body",
    //     }]
    //   }
    // },
    configureServer: (server) => {
      // server.middlewares.use(async (req, res, next) => {
      //   // 只处理根路径请求，让其他请求（如JavaScript模块）正常通过
      //   console.log('%c [req.url]-25', 'font-size:13px; background:#336699; color:#fff;', req.url);
      //   if (req.url === "/" || req.url === "/index.html") {
      //     // 读取 html 内容
      //     let html = await fs.readFileSync(TEMPLATE_HTML_PATH, "utf-8");

      //     try {
      //       html = await server.transformIndexHtml(
      //         req.url,
      //         html,
      //         req.originalUrl
      //       );
      //       res.statusCode = 200;
      //       res.setHeader("Content-Type", "text/html");
      //       res.end(html);
      //     } catch (e) {
      //       return next(e);
      //     }
      //   } else {
      //     // 对于非根路径请求，继续下一个中间件
      //     next();
      //   }
      // });

      // 返回一个在内部中间件安装后
      // 被调用的后置钩子
      return () => {
        server.middlewares.use(async (req, res, next) => {
          let html = await fs.readFileSync(TEMPLATE_HTML_PATH, "utf-8");

          try {
            html = await server.transformIndexHtml(
              req.url,
              html,
              req.originalUrl
            );
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(html);
          } catch (e) {
            return next(e);
          }
        });
      };
    },
  };
}