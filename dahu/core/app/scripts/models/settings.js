/**
 * Created by barraq on 19/05/14.
 */

define([
    'underscore',
    'backbone'
], function(_, Backbone){

    /**
     * Base object model.
     */
    var SettingsModel = Backbone.Model.extend({
        defaults: {
            screenWidth: 800,
            screenHeight: 494 // golden ratio
        }
    });

    return SettingsModel;
});