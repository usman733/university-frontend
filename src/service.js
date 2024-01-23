import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 10000,
  params: {},
});


export const getUniversityList = async (body) => {
    try {
      const res = await instance.get(`api/universities?country=${body.country}&province=${body.province}`);
      return res;
    } catch (error) {
      console.error(error);
    }
  };