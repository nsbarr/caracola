import { spawn } from 'child_process';
import { rename } from 'fs/promises';
import { join } from 'path';

async function switchConfig() {
  try {
    // Save production config
    await rename('next.config.mjs', 'next.config.prod.mjs');
    // Use dev config
    await rename('next.config.dev.mjs', 'next.config.mjs');
    
    // Start dev server
    const dev = spawn('next', ['dev'], { stdio: 'inherit' });
    
    // Handle cleanup on exit
    process.on('SIGINT', async () => {
      // Restore production config
      await rename('next.config.mjs', 'next.config.dev.mjs');
      await rename('next.config.prod.mjs', 'next.config.mjs');
      process.exit();
    });
    
    dev.on('close', async (code) => {
      // Restore production config
      await rename('next.config.mjs', 'next.config.dev.mjs');
      await rename('next.config.prod.mjs', 'next.config.mjs');
      process.exit(code);
    });
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

switchConfig(); 