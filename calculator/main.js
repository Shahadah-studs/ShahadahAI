const scr = document.getElementById("screen");
let exp = "";
function press(v) {
    if (scr.value === "0" && !isNaN(v)) exp = "";
    exp += v; scr.value = exp;
}
function clr() { exp = ""; scr.value = "0"; }
function back() { exp = exp.slice(0, -1); scr.value = exp || "0"; }
function calc() {
    if (!exp) return;
    try {
        let clean = exp.replace(/[^0-9+\-*/.]/g, "");
        let res = Function('"use strict";return (' + clean + ')')();
        scr.value = Number(res.toFixed(8)); exp = scr.value.toString();
    } catch (e) { scr.value = "ERROR"; exp = ""; }
}
