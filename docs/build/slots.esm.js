import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-6ab53e35.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["my-child",[[0,"my-child",{"text":[1]}]]],["my-parent",[[4,"my-parent",{"tag":[1],"disabled":[4],"messageInline":[16]}]]]], options);
});
