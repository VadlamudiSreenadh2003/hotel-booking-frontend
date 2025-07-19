import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ✅ Enable the new JSX transform

export default defineConfig({
  plugins: [react()],
});
