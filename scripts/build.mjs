import { spawn } from 'child_process';
import { rename, copyFile, access, constants } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

async function buildWithProdConfig() {
  try {
    process.chdir(rootDir);
    console.log('Current directory:', process.cwd());
    
    // Check if files exist before operations
    const configExists = existsSync('next.config.mjs');
    const prodConfigExists = existsSync('next.config.prod.mjs');
    
    console.log(`Config file exists: ${configExists}`);
    console.log(`Prod config exists: ${prodConfigExists}`);
    
    if (!prodConfigExists) {
      throw new Error('Production config file next.config.prod.mjs does not exist');
    }
    
    // Backup current config if it exists
    if (configExists) {
      console.log('Backing up current config...');
      await copyFile('next.config.mjs', 'next.config.backup.mjs');
    }
    
    // Use production config
    console.log('Using production config...');
    await copyFile('next.config.prod.mjs', 'next.config.mjs');
    
    // Start build process
    console.log('Starting build...');
    const build = spawn('next', ['build'], { stdio: 'inherit' });
    
    // Handle build completion
    build.on('close', async (code) => {
      // Restore from backup if it exists
      if (existsSync('next.config.backup.mjs')) {
        console.log('Restoring config from backup...');
        await copyFile('next.config.backup.mjs', 'next.config.mjs');
        await access('next.config.backup.mjs', constants.F_OK)
          .then(() => rename('next.config.backup.mjs', 'next.config.backup.mjs.old'))
          .catch(() => console.log('No backup to remove'));
      }
      
      if (code === 0) {
        console.log('Build completed successfully!');
      } else {
        console.error(`Build failed with code ${code}`);
      }
      
      process.exit(code);
    });
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

buildWithProdConfig(); 