import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue"
import path from "path"

export default defineConfig(
    {
        plugins: [vue()],
        publicPath: './',
        base: './',
        resolve: {
            alias: {
                // 注意！键必须以斜线开始和结束
                '/@/': path.resolve(__dirname, './src')
            },
            extensions: ['.js', '.vue', '.json'],
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./src/style/global.scss";' // 添加公共样式
                }
            }
        },
        server: {
            proxy: {
                '/api': {
                    target: 'http://localhost:9101/',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        }
    }
)
