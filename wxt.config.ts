import { each } from "es-toolkit/compat";
import svgr from "vite-plugin-svgr";
import { defineConfig, WxtViteConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
  runner: {
    openConsole: true,
    openDevtools: true,
  },
  manifest: {
    name: "W4LL Extension",
    description: "W4LL Extension",
    host_permissions: ["https://*/*", "http://*/*", "https://*/", "http://*/"],
    permissions: ["identity", "storage", "activeTab", "identity", "tabs", "unlimitedStorage", "scripting", "webRequest", "webNavigation", "clipboardRead"],
    icons: {
      "16": "icon/16.png",
      "48": "icon/48.png",
      "128": "icon/128.png"
    },
    web_accessible_resources: [
      {
        resources: ["injected.js"],
        matches: ["*://*/*"],
      },
    ],
    action: {

    },
    "key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqqY+1wz/4p7ekRi5r5+aoTj4s8R6KlFM/OeXzyE8w5OO3FT8j7YCtRZgV454+TGeYw7WZVKxy9CeoS2o4EYjVhgfw2hk4LMGPIpwYPTELbdu02RYkq1KvktEkQFqT8jN4lMa2bEbDgNq9iJxVzeXpwk+Gg9OTGq9QLe5ldHqjPq0tT0/YXFCxhWT407zFsDyJODXXkdVONDXayJR5ASOl5vtyUzkWRC5KFvJO8NWXCTjTayQq37hrvPVI35Z8vaChJYgbbzGEhnapF0n306GHhumDCpSQB447/lRqDpBtXxaU7c3BbDGAYViadhVF2K8Q+FlXyXg6T8tFrYxAOlkfwIDAQAB"
  },

  // directories
  srcDir: "src",

  // vite plugins
  vite: () => ({
    plugins: [svgr()],
  }) as WxtViteConfig,

  hooks: {
    "build:manifestGenerated": (wxt, manifest: any) => {
      if (wxt.config.mode === "development") {
        manifest.name += " (DEV)";
        manifest.version_name = manifest.version + "-dev";

        manifest.key = "ahchfhiijkfdojfnedbfgdlpgoekofcf";
      }
    },
  },
});
