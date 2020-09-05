import { create } from "apisauce";
import { exp } from "react-native-reanimated";

const apiClient = create({
  baseURL: "http://10.0.0.6:9000/api/",
});

export default apiClient;
