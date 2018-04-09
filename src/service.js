const TOKEN = `MDo4NTYwNDJhZS0zYTBmLTExZTgtOGEyMC00MzQwN2FiNWJhN2U6VWFUYWJUVGg5Vk01dkFSdTNTWFJiRVg5YXhBREo5THMyTGE4`;
const PROXY = `http://lcboapi.com/`;

function searchProduts(query, page, cb) {
	let url = `${PROXY}products?access_key=${TOKEN}&page=${page}&where_not=is_seasonal`;
	if(query) {
		url += `&q=`+query;
	}
  return fetch(url, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function searchProduct(id, cb) {
	let url = `${PROXY}products/${id}?access_key=${TOKEN}`;
  return fetch(url, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function searchStores(id, page, cb) {
	let url = `${PROXY}stores?product_id=${id}&page=${page}&access_key=${TOKEN}`;
  return fetch(url, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Service = { searchProduts, searchProduct, searchStores };
export default Service;
