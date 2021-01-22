import { exampleImportedFunction } from './second.js';

{
  goosemodHandlers: {
    onImport: () => {
      exampleImportedFunction();
    },
    onRemove: () => {}
  }
}