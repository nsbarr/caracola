import { spawn } from 'child_process';
import { copyFile } from 'fs/promises';
import { existsSync } from 'fs';

async function startDev() {
  try {
    console.log('Starting Next.js dev server...');
    const dev = spawn('next', ['dev'], { stdio: 'inherit' });
    
    process.on('SIGINT', () => {
      console.log('Dev server stopped');
      process.exit();
    });
    
    dev.on('close', (code) => {
      if (code !== 0) {
        console.error(`Dev server exited with code ${code}`);
      }
      process.exit(code);
    });
  } catch (error) {
    console.error('Error starting dev server:', error);
    process.exit(1);
  }
}

startDev(); 