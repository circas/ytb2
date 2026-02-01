(function () {
  try {
    let body = $response.body;
    if (!body) return body;

    let obj = JSON.parse(body);

    if (obj.playerResponse) {
      // Reklam alanları
      delete obj.playerResponse.adPlacements;
      delete obj.playerResponse.playerAds;
      delete obj.playerResponse.adSlots;
    }

    if (obj.adPlacements) delete obj.adPlacements;
    if (obj.playerAds) delete obj.playerAds;

    body = JSON.stringify(obj);
    $done({ body });
  } catch (e) {
    $done({});
  }
})();