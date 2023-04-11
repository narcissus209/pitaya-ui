import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

const resolvePath = (path: string) => {
  return fileURLToPath(new URL(path, import.meta.url))
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueSetupExtend(),
    dts({
      tsConfigFilePath: resolvePath('./tsconfig.json'),
      outputDir: './dist/lib',
      include: './src/packages',
    }),
    dts({
      tsConfigFilePath: resolvePath('./tsconfig.json'),
      outputDir: './dist/es',
      include: './src/packages',
    }),
  ],
  resolve: {
    alias: {
      '@': resolvePath('./src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    //打包文件目录
    outDir: 'dist',
    //压缩
    minify: false,
    lib: {
      entry: resolvePath('./src/packages/index.ts'),
      name: 'pet-ui',
    },
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: resolvePath('./src/packages/index.ts'),
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //配置打包根目录
          dir: resolvePath('./dist/es'),
          //让打包目录和我们目录对应
          preserveModules: true,
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //配置打包根目录
          dir: resolvePath('./dist/lib'),
          //让打包目录和我们目录对应
          preserveModules: true,
        },
      ],
    },
  },
})
