export const setQuery = (data, searchParams, key = "filters") => {
  const newQueryParam = JSON.stringify(data);
  const currentParams = new URLSearchParams(searchParams);

  currentParams.delete(key);
  currentParams.append(key, newQueryParam);

  return currentParams.toString();
};

export const removeEmptyFields = (data) => {
  const pureData = {};

  for (const key in data) {
    if (data[key]) pureData[key] = data[key];
  }

  return pureData;
};

export const setRequestBody = (queries) => {
  let body = {};

  for (const [key, value] of Object.entries(queries)) {
    body[key] = JSON.parse(value);
  }
  return body;
};

export function toQueryString(query) {
  return Object.entries(query)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}