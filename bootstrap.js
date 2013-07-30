/* ========================================================================
 * Bootstrap: Bootstrap.js v0.1
 * Just a template for Bootstrap your Javascript Plugin
 * ========================================================================
 * This is just a template of comment about a javascript plugin.
 * The same patten in Bootstraps Plugins
 * ======================================================================== */


+function ($) { "use strict";

  // PLUGIN NAME PUBLIC CLASS DEFINITION
  // ==============================

  var PluginName = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, PluginName.DEFAULTS, options)
  }

	// defaults
  PluginName.DEFAULTS = {
    prop: 'value'
  }

  PluginName.prototype.method = function (param) {
    // method do
  }

  PluginName.prototype.otherMethod = function () {
    // method do other thing 
  }


  // PLUGIN DEFINITION
  // ========================

  var old = $.fn.pluginName

  $.fn.pluginName = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('pluginName')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.pluginName', (data = new PluginName(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.pluginName.Constructor = PluginName


  // PLUGIN NO CONFLICT
  // ==================

  $.fn.pluginName.noConflict = function () {
    $.fn.pluginName = old
    return this
  }


  // PLUGIN DATA-API
  // ===============

  $(document).on('click.bs.PluginName.data-api', '[data-toggle^=pluginName]', function (e) {
	// waiting for some action, why wont come over here?
    e.preventDefault()
  })

}(window.jQuery);
