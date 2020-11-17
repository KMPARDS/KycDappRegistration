import { create } from "apisauce";
import config from "../../config/config";

//in response of api returns 200 of success message then apisauce will contain ok object as true which can be use to proceed directly without response status check only by ok object

const api = create({
  baseURL: config.baseURL,
  headers: { "Content-Type": "application/json" },
});

export default {
  getData: () => api.get("/"),
  postData: (payload: any) => api.post("/upload", payload),
};
