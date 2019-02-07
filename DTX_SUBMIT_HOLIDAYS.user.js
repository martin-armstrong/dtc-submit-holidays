// ==UserScript==
// @name         DTX_SUBMIT_HOLIDAYS
// @namespace    capgemini.com
// @version      1.0
// @description  Fixes for DTX Submit Holidays page
// @author       martin.armstrong@capgemini.com
// @match        https://*/*/DTX.NET/*
// @match        http://*/DTX.NET/*
// @grant        none
// ==/UserScript==

(function(){
    'use strict';
    if(window.location.href.indexOf("SubmitHolidays.aspx")==-1) {
        return;
    }

var projectsDropdown = document.getElementById('G_wcProjectsApplyxxGrid');
if(projectsDropdown) {

projectsDropdown.addEventListener("mousedown", function(){
  setTimeout(function(){
  if ( document.forms[0].hdnprojStatus.value== "CHANGED") {
    document.forms[0].submit();
    postbackToAuthorisers = true; // ???
    return false;
  }}, 100);
});

}
})();