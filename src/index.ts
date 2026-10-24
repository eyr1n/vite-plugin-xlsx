import readXlsxFile from 'read-excel-file/node';
import type { Plugin } from 'vite';

export default function xlsx(): Plugin {
  return {
    name: 'vite-plugin-xlsx',
    enforce: 'pre',
    async load(id) {
      if (!/\.xlsx$/i.test(id)) return null;
      return `export default ${JSON.stringify(await readXlsxFile(id))};`;
    },
  };
}
