document.getElementsByClassName("table table-striped section-summary")[0].childNodes[3].childNodes.forEach(iterate);

function iterate(item, index) {
  var date = new Date();
  var offset = date.getTimezoneOffset() / 60;
  
  var time = item.childNodes[6].innerText;
  var target = new Date("1970-01-01 " + time);
  var minutes = (target.getMinutes() < 10 ? "0" : "") + target.getMinutes();
  var newStartTime = target.getHours() + 8 - offset;
  item.childNodes[6].innerText += " ["+(newStartTime % 24) + ":"+ minutes +"]";

  var endtime = item.childNodes[7].innerText;
  var endtarget = new Date("1970-01-01 " + endtime);
  var newendTime = endtarget.getHours() + 8 - offset;

  var endminutes = (endtarget.getMinutes() < 10 ? "0" : "") + endtarget.getMinutes();
  item.childNodes[7].innerText += " ["+(newendTime % 24) + ":"+ endminutes +"]";
}
