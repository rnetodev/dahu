/**
 * Created by barraq on 8/26/14.
 */

/**
 * Handlebars *global* setup.
 *
 * Here we define global helpers.
 * Global helpers must not depend on any modules.
 */
define([
    'handlebars',
    'underscore',
    // modules
    'modules/utils/paths'
], function (
    Handlebars, _,
    Paths
) {

    /**
     * Setup template helper
     */
    function setup() {
        /**
         * Transform normalize `coordinate` to pixel coordinates given a `domain`.
         *
         * @param coordinate Normalized coordinate, i.e. float number between [0, 1]
         * @param domain The Maximum value of the pixel coordinate
         * @returns {number} coordinate * domain.
         */
        Handlebars.default.registerHelper('normalizedToPixel', function (coordinate, domain) {
            return coordinate * domain;
        });

        /**
         * Create an URL from a `path`.
         *
         * @param path Path part of the URL
         * @param options
         *   - type: type of URL, can be dahufile, classpath, or http (default: http).
         * @returns {string} a formatted URL.
         */
        Handlebars.default.registerHelper('URL', function (path, options) {
            var parts = [];
            options = _.defaults({}, options.hash, {
                type: 'http'
            });

            // if dahufile and path is relative then URL
            // is a screencast URL and therefire will have to be rewritten
            if (options.type === 'dahufile' && Paths.isRelative(path)) {
                parts.push('__SCREENCAST__');
            }

            // push path
            parts.push(path);

            // return URL
            return options.type + '://' + Paths.join(parts);
        });
    }

    return {
        setup: setup
    }
});