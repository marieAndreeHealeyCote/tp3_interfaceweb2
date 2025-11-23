import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

import viteImageMin from "vite-plugin-imagemin";
import { viteStaticCopy } from "vite-plugin-static-copy";

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
        viteImageMin({
            mozjpeg: {
                quality: 50,
            },
            optipng: {
                optimizationLevel: 5,
            },
            webp: {
                quality: 50,
            },
        }

        ),
    ],
});