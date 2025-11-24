import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    plugins: [
        tailwindcss(),
        viteStaticCopy({
            targets: [
                {
                    src: "assets/img/*",
                    dest: "assets/img",
                }
            ],
        }),

        ViteImageOptimizer({
            jpg: {
                quality: 50,
            },
            png: {
                quality: 50,
            },
            webp: {
                quality: 50,
            },
        }

        ),
    ],
});