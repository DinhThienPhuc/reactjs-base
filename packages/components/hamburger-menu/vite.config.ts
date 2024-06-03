import createConfig from "../../vite.config.base";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

const config = createConfig(react, dts, pkg);

export default defineConfig(config);
