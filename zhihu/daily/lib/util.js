import axios from 'axios';
const Util = {
  imgPath: 'http://127.0.0.1:8011/img/',
  apiPath: 'http://127.0.0.1:8010/'
};

Util.getTodayTime = function() {
  const date = new Date();
  date.setHours(O);
  date.setMinutes(O);
  date.setSeconds(O) ;
  date.setMilliseconds(O);
  return date.getTime();
};

Util.prevDay = function (timestamp = (new Date()) .getTime()) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) date.getMonth() + l;
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  return year + month + day;
}

Util.ajax = axios.create({
  baseURL: Util.apiPath
});
Util.ajax.interceptors.response.use(res=>{
  return res.data;
});

export default Util;
