import { defineConfig } from 'unocss';
import extractorPug from '@unocss/extractor-pug';
import extractorCustom from './extractor-pug.js';

export default defineConfig({
  cli: {
    entry: {
      patterns: ['views/*.pug'],
      outFile: 'uno.css',
    },
  },
  extractors: [
    extractorPug({ basedir: 'views' }),
    // extractorCustom({ basedir: 'views' }),
  ],
});
