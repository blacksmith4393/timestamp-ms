
module.exports = function(str){
  let d = new Date(str);
  let date = {};
  date.unix = d.getTime();
  date.natural = d.toDateString();
  return date;
};