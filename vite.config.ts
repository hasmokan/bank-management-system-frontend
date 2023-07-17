import { fileURLToPath, URL } from 'node:url'
import resolveExternalsPlugin from 'vite-plugin-resolve-externals'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'
import image from '@rollup/plugin-image'
import externalGlobals from 'rollup-plugin-external-globals'
import VitePluginImageMin from 'vite-plugin-imagemin'
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i
export default defineConfig({
    optimizeDeps: {
        force: true // 强制进行依赖预构建
    },
    plugins: [
        image(),
        alias(),
        vue(),
        viteCompression({
            verbose: true,
            disable: false,
            threshold: 5000,
            algorithm: 'gzip',
            ext: '.gz'
        }),
        VitePluginImageMin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false
            },
            optipng: {
                optimizationLevel: 7
            },
            mozjpeg: {
                quality: 20
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4
            },
            svgo: {
                plugins: [
                    {
                        name: 'removeViewBox'
                    },
                    {
                        name: 'removeEmptyAttrs',
                        active: false
                    }
                ]
            }
        })
        // resolveExternalsPlugin({
        //     vue: 'Vue',
        //     elementPlus: 'element-plus'
        // })
    ],
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: '@import "./src/assets/css/main.scss";' //预定义文件的入口
            }
        }
    },
    build: {
        rollupOptions: {
            //忽略的打包项
            // external: ['element-plus'],
            output: {
                // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
                sanitizeFileName(name) {
                    const match = DRIVE_LETTER_REGEX.exec(name)
                    const driveLetter = match ? match[0] : ''
                    // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
                    // Otherwise, avoid them because they can refer to NTFS alternate data streams.
                    return (
                        driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
                    )
                }
            }
        }
    },
    base: './'
})
function viteImagemin(arg0: {
    gifsicle: { optimizationLevel: number; interlaced: boolean }
    optipng: { optimizationLevel: number }
    mozjpeg: { quality: number }
    pngquant: { quality: number[]; speed: number }
    svgo: { plugins: ({ name: string } | { name: string; active: boolean })[] }
}): import('vite').PluginOption {
    throw new Error('Function not implemented.')
}
