import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const replitDomain = process.env.REPLIT_DEV_DOMAIN;
  
  return {
    server: {
      host: "0.0.0.0",
      port: 5000,
      hmr: replitDomain ? {
        protocol: "wss",
        host: replitDomain,
        clientPort: 443,
      } : true,
    },
    preview: {
      host: "0.0.0.0",
      port: parseInt(process.env.PORT || "5000"),
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
