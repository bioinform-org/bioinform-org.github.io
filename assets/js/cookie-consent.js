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
    if (didConsent) {
      // enable cookies
      loadVideos();
      loadGA();
    }
  },
  onStatusChange: function(status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (didConsent) {
      // enable cookies
      loadVideos();
      loadGA();
    }
    else {
      //disable cookies
      unloadVideos();
    }
  }
});

function loadVideos() {
  var videos = document.querySelectorAll('.responsive-video-container');
  videos.forEach((video)=>{
    var iframe = video.querySelector('iframe');
    iframe.setAttribute('src', iframe.getAttribute('data-src'));
    iframe.removeAttribute('data-src');
    iframe.style.display="initial";
    video.querySelector('.notice').style.display="none";
  });
}

function unloadVideos() {
  var videos = document.querySelectorAll('.responsive-video-container');
  videos.forEach((video)=>{
    var iframe = video.querySelector('iframe');
    iframe.setAttribute('data-src', iframe.getAttribute('src'));
    iframe.removeAttribute('src');
    iframe.style.display="none";
    video.querySelector('.notice').style.display="initial";
  });
}
