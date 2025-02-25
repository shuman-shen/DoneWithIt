import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://10.0.0.6:9000/api/",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const res = await get(url, params, axiosConfig);

  if (res.ok) {
    cache.store(url, res.data);
    return res;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : res;
};

export default apiClient;
