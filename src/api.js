const url = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.data;
    });
}

function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.data;
    });
}

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.data;
    });
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.data;
    });
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};
