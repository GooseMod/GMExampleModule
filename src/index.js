import { exampleImportedFunction } from './second.js';

const obj = {
  goosemodHandlers: {
    onImport: () => {
      exampleImportedFunction();
    },
    onRemove: () => {}
  }
};
obj