import axios from "axios";

const instance = axios.create({
  baseURL: "http://universities.hipolabs.com/",
  timeout: 10000,
  params: {},
});


export const getUniversityList = async (country) => {
    try {
      const res = await instance.get(`search?country=${country}`);
      return res;
    } catch (error) {
      console.error(error);
    }
  };