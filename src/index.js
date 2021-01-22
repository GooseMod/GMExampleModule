import { exampleImportedFunction } from './second.js';

export default {
  goosemodHandlers: {
    onImport: () => {
      exampleImportedFunction();
    },
    onRemove: () => {}
  }
};
