// Dark mode

function set_theme() {
  if (localStorage['theme']) {
    document.querySelector('body').classList.add('force-theme-'+localStorage['theme']);
  }
}

function reset_theme() {
  localStorage.removeItem('theme');
  document.querySelector('body').classList.add('animate-theme-change');
  document.querySelector('body').classList.forEach(className => {
    if (className.startsWith('force-theme-')) {
        document.querySelector('body').classList.remove(className);
    }
  });
}

function toggle_theme(theme) {
  reset_theme();
  localStorage['theme'] = theme;
  set_theme();
}

set_theme();

// Patreon
function hide_patreon() {
  localStorage['patreon_hidden'] = Date.now();
  set_patreon_visibility();
}

function set_patreon_visibility() {
  if (localStorage['patreon_hidden']) {
    if (document.getElementById('patreon-beg')) {
      document.getElementById('patreon-beg').remove();
    }
  }
}

set_patreon_visibility();

// Mastodon share button
// From https://www.256kilobytes.com/content/show/4812/how-to-make-a-share-on-mastodon-button-in-pure-vanilla-javascript

function share_on_mastodon(title, url, hashtags) {
  // Prefill the form with the user's previously-specified Mastodon instance, if applicable
  var default_url = localStorage['mastodon_instance'];

  // If there is no cached instance/domain, then insert a "https://" with no domain at the start of the prompt.
  if (!default_url)
    default_url = "https://";

  var instance = prompt("Enter your instance's address: (ex: https://mastodon.social)", default_url);
  if (instance) {
  // Handle URL formats
    if ( !instance.startsWith("https://") && !instance.startsWith("http://") )
      instance = "https://" + instance;

    // Get the current page's URL
    if (!url)     var url   = window.location.href;

    // Get the page title from the og:title meta tag, if it exists.
    // var title = document.querySelectorAll('meta[property="og:title"]')[0].getAttribute("content");

    // Otherwise, use the <title> tag as the title
    if (!title)    var title = document.getElementsByTagName("title")[0].innerHTML;

    // Handle slash
    if ( !instance.endsWith("/") )
      instance = instance + "/";

    // Cache the instance/domain for future requests
    localStorage['mastodon_instance'] = instance;

    // Hashtags
    if (!hashtags)  var hashtags = null;

    // Tagging users, such as offical accounts or the author of the post
    var author   = "@melody@computerfairi.es";

    // Create the Share URL
    // https://someinstance.tld/share?text=URL%20encoded%20text
    mastodon_url = instance + "share?text=" + encodeURIComponent(title + "\n\nby " + author + " " + hashtags + "\n\n" + url);

    // Open a new window at the share location
    console.log("Mastodon share URL:" + mastodon_url);
    window.open(mastodon_url, '_blank');
  }
}

console.log('%c Hi there, nerd!! ', 'background: #41264F; color: #ECD1FA; font-size: 20px;');
