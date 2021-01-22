import { exampleImportedFunction } from './second.js';

return {
  goosemodHandlers: {
    onImport: () => {
      exampleImportedFunction();
    },
    onRemove: () => {}
  }
};
