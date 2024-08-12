import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }) // 确保这里是使用大括号导入的 { visualizer }
  ],
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          filename: 'bundle-analyzer-report.html',
          open: true,
          gzipSize: true,
        })
      ]
    }
  }
});
