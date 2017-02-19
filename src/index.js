/**
 * Main app file.  Initializes app components.
 */

import model from './model';
import router from './router';
import view from './view';
import editor from './editor';

/**
 * The main app object.
 *
 */
var vanillaPress = {};


/**
 * Initializes the VanillaPress app
 * @return {void}
 */
vanillaPress.init = function() {

  model.init();
  router.init();
  view.init();
  editor.init();

};

vanillaPress.init();
