
/**
 * Copied from https://github.com/ionic-team/stencil/issues/1900#issuecomment-546251427
 *
 * Safari 10.xx supports <script type="module">, but since the module build just silently
 * fails, this code makes sure that we load the nomodule version in older Safari instead.
 *
 * The below if-statement detects other browsers, except Safari 10.x and under:
 *
 * - History.scrollRestoration was only introduced in Safari 11.0.
 * - "onbeforeload" is a feature only found from Safari.
 */
(function() {
  if (
    (history && history.scrollRestoration) ||
    !('onbeforeload' in document.createElement('script'))
  ) {
    // Builds regular module and nomodule script tags for most browsers
    var m = document.createElement('script');
    m.src = '/stencilslots/build/slots.esm.js';
    m.type = 'module';
    document.head.appendChild(m);
    var n = document.createElement('script');
    n.src = '/stencilslots/build/slots.js';
    n.setAttribute('nomodule', true);
    document.head.appendChild(n);
  } else {
    // For Safari 10.x build a basic script tag that loads the polyfilled version
    var s = document.createElement('script');
    s.src = '/stencilslots/build/slots.js';
    document.head.appendChild(s);
  }
})();
