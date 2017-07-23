function runCodeAndTestFunctions() {
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
  var code = Blockly.JavaScript.workspaceToCode(workspace || Blockly.getMainWorkspace());
  try {
    eval(code);
  } catch(e) {
    if(e.toString().indexOf("Reference") != -1) {
      alert(e.toString() + "\nMake sure variables are defined before they're used.  Variables defined inside of the function will not be available outside of it.");
    } else {
      alert(e.toString());
    }
  }
}

(function() {
    function varsToLets(code) {
      //var variableNames = [];
      /*
      return code.replace(/var ([0-9a-zA-Z_]*);/g, function(match, variableName, offset) {
        //return code.substring(0, offset) + code.substring(offset + match.length,
        return code.split(match).join("").replace(variableName, "let " + variableName);
      });
      */
      var variableDeclarationStart = code.indexOf("var")+4;
      var variableDeclarationEnd   = code.indexOf(";", variableDeclarationStart);
      var variableNames = [];
      var newCode = code;
      
      if(variableDeclarationStart > 3) { // has variable declaration
        var firstLine = code.substring(variableDeclarationStart, variableDeclarationEnd);
        variableNames = firstLine.split(", ");
        newCode = code.substring(0, variableDeclarationStart-4) + code.substring(variableDeclarationEnd+1);
      }
      
      /*
      var newCode = newCode.replace(/var ([0-9a-zA-Z_]*);/g, function(match, variableName) {
        variableNames.push(variableName);
        return "";
      });
      */
      
      variableNames.forEach(function(variableName) {
        console.log(variableName);
        newCode = newCode.replace(variableName, "let " + variableName);
      });

      return newCode.trim();
    }
    
    var textField = document.getElementById("text-code-box");

    document.getElementById("convert-to-ruby-text-btn").addEventListener("click", function() {
      var xmlDom = Blockly.Xml.workspaceToDom(workspace);
      var xmlText = Blockly.Xml.domToPrettyText(xmlDom);//alert(xmlText);
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xmlText, "text/xml");

      textField.value = varsToLets(Blockly.JavaScript.workspaceToCode(workspace || Blockly.getMainWorkspace()));
      
      eval(Blockly.JavaScript.workspaceToCode(workspace || Blockly.getMainWorkspace()));
      var functionCallBlocks = workspace.getAllBlocks().filter(function(block) {
        return typeof block.type === "string" && block.type.indexOf("function_def") === 0;
      }).map(function(block) {
        var callBlock = goog.dom.createDom('block');
        callBlock.setAttribute('type', block.type.replace("def", "call"));
        var field = goog.dom.createDom('field', null, block.getFieldValue("NAME") + "(");
        field.setAttribute('name', 'NAME');
        callBlock.appendChild(field);
        return callBlock;
      });
      var functionCategories = Array.prototype.filter.call(document.getElementById('toolbox').children, function(category){ 
        return category.getAttribute("name") === "Function Calls"; 
      });

      functionCategories.forEach(function(category) {
        category.innerHTML = ""; // quick way to remove all function call blocks
        functionCallBlocks.forEach(function(block) {
          category.appendChild(block);
        });
      });
      workspace.updateToolbox(document.getElementById('toolbox'));
    });
})();
