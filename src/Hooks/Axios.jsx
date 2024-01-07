import axios from 'axios';

const axiosPublic = axios.create({
   baseURL: ''
})
const UseAxios = () => {
   return axiosPublic
   
};

export default UseAxios;