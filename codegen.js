function codeGen() {
val = ["scrollbarColor","bgColor","misc1","misc2","misc3","borderColor","fontColor","themeColor"]; text = ""; for (let i = 0; i < val.length; i++) { text += document.getElementById(val[i]).value + ","; } text += document.getElementById("themeColor").value; const output = text + "˃" + document.getElementById("css").value; 
}
