window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#006666",
      "text": "#001414"
    },
    "button": {
      "background": "#b98927",
      "text": "#001414"
    }
  },
  "theme": "classic",
  "type": "opt-in",
  "content": {
    "href": "/privacy-policy/"
  },
  onInitialise: function (status) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAonConsent();
      loadAlgoliaOnConsent();
    }
  },
  onStatusChange: function(status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAonConsent();
      loadAlgoliaOnConsent();
    }
  },
  onRevokeChoice: function() {
    var type = this.options.type;
    if (type == 'opt-in') {
      // disable cookies
      unloadAlgoliaOnNonConsent()
    }
  }
});
