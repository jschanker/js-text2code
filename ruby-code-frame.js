"use strict";

(function() {
  var replContainer = document.getElementById("repl");
  replContainer.addEventListener("click", function() {
    if(replContainer.classList && 
       typeof replContainer.classList.add === "function") {
        replContainer.classList.remove("repl-container-hide");
        replContainer.classList.add("repl-container-show");
    } else {
      replContainer.className = "repl-container-show";
    }
  });
  replContainer.addEventListener("mouseleave", function() {
    if(replContainer.classList && 
       typeof replContainer.classList.remove === "function") {
        replContainer.classList.remove("repl-container-show");
        replContainer.classList.add("repl-container-hide");
    } else {
      replContainer.className = "repl-container-hide";
    }
  });
})();