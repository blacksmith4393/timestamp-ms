function unixTime(date){
  return date.getTime();
}
function parseTime(date){
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

module.exports = function(str){
  let d = new Date(str);
  let date = {};
  date.unix = unixTime(d);
  date.natural = d.toDateString();
  return date;
};