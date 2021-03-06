var opNum = $.mastercam.abspath.match(/_OP([1-9])/); 

if (typeof opNum[1] !== "undefined") {
  var currOp = parseInt(opNum[1]);
  
  if (currOp === 1) {
    $.toast("This is OP1 of the current job.", "Previous Operation Not Found"); 
  } else {
    var nextOp = currOp - 1;
    var nextOpAbspath = $.mastercam.abspath.replace(`OP${currOp}`, `OP${nextOp}`);
    
    $.toast(nextOpAbspath, `Opening OP${nextOp}`); 
    
    sp.Sleep(500);
    sp.SendKeys("^o");
    sp.Sleep(200);
    sp.SendString(nextOpAbspath);
    sp.Sleep(200);
    sp.SendKeys("{ENTER}");
  }
} else {
  $.toast("Could not parse an operation number", "Error");  
}
