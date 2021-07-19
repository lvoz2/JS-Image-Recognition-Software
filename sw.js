self.addEventListener('fetch', function(event) {
  console.log(event);
  console.log(event.request.url);
  var url = encodeURIComponent(event.request.url);
  event.request.url = "https://api.allorigins.win/get?url=" + url;
  console.log(event.request.url);
  event.respondWith(
    fetch(event.request)
  );
});
