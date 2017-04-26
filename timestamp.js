
module.exports = function(str){
    let date = {};

  if(parseInt(str)){
    let d = new Date(parseInt(str)*1000);
    date.unix = (d/1000);
    date.natural = d.toDateString();
  } else if(!parseInt(str)){
    let d = new Date(str);
    date.unix = (d.getTime()) / 1000;
    if(!date.unix){
      date.natural = null;
    } else {
      date.natural = d.toDateString();
    }
  }
  
  return date;
};