const path = require('path');

const fractal = module.exports = require('@frctl/fractal').create();
const pkg = require(path.join(__dirname, 'package.json'));


/*-------------------------------------------------------*\
  Feel free to adapt Fractal config below to your needs
\*-------------------------------------------------------*/

/**
 * Metadata
 */
fractal.set('project.title', 'ANWR-GROUP');
// Provide the package.json "version" to the templates
fractal.set('project.version', pkg.version);

/**
 * Files location
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.web.set('static.path', path.join(__dirname, 'public'));
fractal.web.set('builder.dest', __dirname + '/export');

/**
 * Build options
 */
// If you change the build destination, you should adapt webpack.common.js "output.path" too.
fractal.web.set('builder.dest', 'dist');

/**
 * Templating
 */
// Use Nunjucks as the template engine
fractal.components.engine('@frctl/nunjucks');
fractal.docs.engine('@frctl/nunjucks');
// Look for templates with a ".njk" extension
fractal.components.set('ext', '.njk');


/*----------------------------------------*\
  Change the following at your own risk
\*----------------------------------------*/

/**
 * Server configuration
 */
fractal.web.set('server.port', 4000);
fractal.web.set('server.sync', true);

/**
 * Prevent Bluebird warnings like "a promise was created in a handler but was not returned from it"
 * caused by Nunjucks from polluting the console
 */
const bluebird = require('bluebird');
bluebird.config({
  warnings: false
});
