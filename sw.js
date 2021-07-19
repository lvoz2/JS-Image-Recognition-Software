self.addEventListener('fetch', function(event) {
  console.log(event);
  var url = encodeURIComponent(event.request.url);
  event.request.url = "https://api.allorigins.win/get?url=" + url;
  event.respondWith(
    fetch(event.request)
  );
});
