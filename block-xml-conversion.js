"use strict";

//Blockly.Workspace.prototype.getVariable = function(name) {
//  return this.variableMap_.getVariable(name);
//};

(function() {
  function convertTextToCodeBlocksToJS(workspace, blockArr) {
    var workspace2 = new Blockly.Workspace(workspace.options);
    blockArr.forEach(function(block) {
      if(block.type === "units_print") {
        //workspace.removeTopBlock(block);
        var blockConvert = workspace.newBlock("controls_if_logic"); // block.id
        //for(var prop in block) {
        //  if(prop !== "type" && prop !== "id") blockConvert[prop] = block[prop];
        //  console.log(prop); 
        //}
        //return blockConvert;
        //blockConvert.x = block.x;
        //blockConvert.y = block.y;
      }
      else {
        return block;
      }
    });
    
    return workspace2;
  }
  
  function convertToXML() {
        var workspace = workspace || Blockly.getMainWorkspace();
        var xmlText = document.getElementById('xml_data').value;
        var xmlDom = null;
        try {
          xmlDom = Blockly.Xml.textToDom(xmlText);
        } catch (e) {
          var q =
              window.confirm(MSG['badXml'].replace('%1', e));
          if (!q) {
            return;
          }
        }
        if (xmlDom) {
          workspace.clear();
          Blockly.Xml.domToWorkspace(xmlDom, workspace);
        }

      Blockly.svgResize(workspace);  
  }
  
  function convertToCode() {
        var workspace = workspace || Blockly.getMainWorkspace();
        var xmlDom = Blockly.Xml.workspaceToDom(workspace);
        var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
        document.getElementById('xml_data').value = xmlText;
  }
  
  function convertToJSBlock(block) {
    function replaceWithBlock(block, replaceBlock, dispose) {

      var parentBlock = block.getParent();
      var parentInput = null;
      var parentConnection = null;
      var blockConnectionType = -1;

      block.inputList.forEach(function(input) {
        input.fieldRow.forEach(function(field) {
          if(replaceBlock.getField(field.name)) {
            replaceBlock.setFieldValue(field.getValue(), field.name);
          }
        });
      });
      
      if(parentBlock) {
      	parentInput = parentBlock.getInputWithBlock(block);
        parentConnection = parentInput ? parentInput.connection : parentBlock.nextConnection;
        blockConnectionType = parentConnection.targetConnection.type;
        if(blockConnectionType === Blockly.OUTPUT_VALUE) {
          parentConnection.connect(replaceBlock.outputConnection);
        }
        else if(blockConnectionType === Blockly.PREVIOUS_STATEMENT) {
          parentConnection.connect(replaceBlock.previousConnection);
        }
      } else {
        replaceBlock.moveBy(block.getRelativeToSurfaceXY().x - replaceBlock.getRelativeToSurfaceXY().x,
                            block.getRelativeToSurfaceXY().y - replaceBlock.getRelativeToSurfaceXY().y);
      }
      
      block.getChildren().slice().forEach(function(childBlock) {
      	//alert(block);
      	//alert(childBlock);
      	//if(childBlock.getChildren().length > 0) replaceBlock(childBlock, childBlock);
      	if(block.getNextBlock() !== childBlock) {
      		// assume the child block connection is INPUT_VALUE/OUTPUT_VALUE since it's not 
      		// PREVIOUS_STATEMENT/NEXT_STATEMENT
      		var blockInput = block.getInputWithBlock(childBlock);
      		var replaceBlockInput = replaceBlock.getInput(blockInput.name);
      		if(replaceBlockInput) {
      		  blockInput = replaceBlockInput.connection.connect(childBlock.outputConnection);
      		}
      	}
      	else {
      		replaceBlock.nextConnection.connect(block.getNextBlock().previousConnection);
      	}
      });

/*
      if(block.getNextBlock()) {
        replaceBlock.nextConnection.connect(block.getNextBlock().previousConnection);
      }
*/

      if(dispose) block.dispose();
      //if(dispose && block.getChildren().length === 0) block.dispose();
    }
            if(block.type === "units_print") {
              //var resultCell = null;
              if(block.getFieldValue("TYPE") === "result_cell" && block.getInput("RESULT_CELL")) {
                 //block.getInputTargetBlock("RESULT_CELL")) { //&&
                 //block.getInputTargetBlock("RESULT_CELL").type === "result_cell_column") { //&&
                 // (resultCell = document.getElementById("R" + block.getInputTargetBlock("RESULT_CELL").getFieldValue("COL")))) {
                 //document.getElementById("R" + block.getInputTargetBlock("RESULT_CELL").getFieldValue("COL"))) {
                 //block.setFieldValue(block.getInputTargetBlock("RESULT_CELL").getFieldValue("COL"), "COL");
                 //alert("R" + block.getInputTargetBlock("RESULT_CELL").getFieldValue("COL"));
                 
                 // OLD
                 //block.removeInput("TYPE");
                 //block.type = "js_result_cell_print";
                 replaceWithBlock(block, workspace.newBlock("js_result_cell_print"), true);
              } else {
                //block.type = "units_js_print";
                replaceWithBlock(block, workspace.newBlock("units_js_print"), true);
              }
            }
            else if(block.type === "convert_to_number") {
              replaceWithBlock(block, workspace.newBlock("js_convert_to_number"), true);
              //block.type = "js_convert_to_number";
            }
            else if(block.type === "prompt_for_number") {
              var parseFloatBlock = workspace.newBlock("js_convert_to_number");
              //alert(parseFloatBlock.getInput("STR").connection.type + " " + block.outputConnection.type);
              
              var parentBlock = block.getParent();
              if(parentBlock) {
                block.outputConnection.targetConnection.connect(parseFloatBlock.outputConnection);
              }
              block.type = "js_prompt";
              block.outputConnection.setCheck("String");
              parseFloatBlock.getInput("STR").connection.connect(block.outputConnection);
            }
            else if(block.type === "prompt_for_text") {
              //block.type = "js_prompt";
              replaceWithBlock(block, workspace.newBlock("js_prompt"), true);
            }
            else if(block.type === "math_number_word_arithmetic") {
              //block.type = "math_number_arithmetic";
              replaceWithBlock(block, workspace.newBlock("math_number_arithmetic"), true);
            }
            else if(block.type === "quotient") {
              var truncBlock = workspace.newBlock("math_number_round");
              var dividedByBlock = workspace.newBlock("math_number_arithmetic");
              dividedByBlock.setFieldValue("/", "OP");
              
              truncBlock.setFieldValue('TRUNC', "OP");
              var parentBlock = block.getParent();
              if(parentBlock) {
                block.outputConnection.targetConnection.connect(truncBlock.outputConnection);
              }
              truncBlock.getInput("NUM").connection.connect(dividedByBlock.outputConnection);
              
              if(block.getInput("A").connection.targetBlock()) {
                dividedByBlock.getInput("A").connection.connect(block.getInput("A").connection.targetBlock().outputConnection);
              }
              if(block.getInput("B").connection.targetBlock()) {
                dividedByBlock.getInput("B").connection.connect(block.getInput("B").connection.targetBlock().outputConnection);
              }
              block.dispose();
            }
            else if(block.type === "remainder") {
              block.type = "js_remainder";
            }
            else if(block.type === "seconds_to_minutes" ||
                    block.type === "minutes_to_hours" ||
                    block.type === "hours_to_days" || 
                    block.type === "pennies_to_nickels" ||
                    block.type === "nickels_to_quarters" ||
                    block.type === "quarters_to_dollars" ||

                    block.type === "remaining_seconds" ||
                    block.type === "remaining_minutes" ||
                    block.type === "remaining_hours" || 
                    block.type === "remaining_pennies" ||
                    block.type === "remaining_nickels" ||
                    block.type === "remaining_quarters") {
              var parentBlock = block.getParent();
              var quotientBlock = null;
              var numBlock = workspace.newBlock("math_number_general");
              var divisor = 0;
              var fieldName = "";

              if(block.type === "seconds_to_minutes" ||
                 block.type === "minutes_to_hours" ||
                 block.type === "hours_to_days" || 
                 block.type === "pennies_to_nickels" ||
                 block.type === "nickels_to_quarters" ||
                 block.type === "quarters_to_dollars") {
                  quotientBlock = workspace.newBlock("quotient");
              } else {
                quotientBlock = workspace.newBlock("remainder");
              }
              
              if(block.type === "seconds_to_minutes" || block.type === "minutes_to_hours" ||
                 block.type === "remaining_seconds" || block.type === "remaining_minutes") {
                divisor = 60;
              }
              else if(block.type === "hours_to_days" || block.type === "remaining_hours") {
                divisor = 24;
              }
              else if(block.type === "pennies_to_nickels" || block.type === "nickels_to_quarters" ||
                      block.type === "remaining_pennies" || block.type === "remaining_nickels") {
                divisor = 5;
              }
              else {
                divisor = 4;
              }
              
              if(block.type === "seconds_to_minutes" || block.type === "remaining_seconds") {
                fieldName = "SECONDS";
              }
              else if(block.type === "minutes_to_hours" || block.type === "remaining_minutes") {
                fieldName = "MINUTES";
              }
              else if(block.type === "hours_to_days" || block.type === "remaining_hours") {
                fieldName = "HOURS";
              }
              
              else if(block.type === "pennies_to_nickels" || block.type === "remaining_pennies") {
                fieldName = "PENNIES";
              }
              else if(block.type === "nickels_to_quarters" || block.type === "remaining_nickels") {
                fieldName = "NICKELS";
              }
              else {
                fieldName = "QUARTERS";
              }
              
              quotientBlock.getInput("B").connection.connect(numBlock.outputConnection);
              if(block.getInput(fieldName).connection.targetBlock()) {
                quotientBlock.getInput("A").connection.connect(block.getInput(fieldName).connection.targetBlock().outputConnection);
              }
              numBlock.setFieldValue(divisor, "NUM");
              
              if(parentBlock) {
                block.outputConnection.targetConnection.connect(quotientBlock.outputConnection);
              }
              block.dispose();
              convertToJSBlock(quotientBlock);
            }
            
            else if(block.type === "string_concatenate") block.type = "js_string_concatenate";
            else if(block.type === "string_indexof_first") block.type = "js_string_indexof_first";
            else if(block.type === "string_indexof_last") block.type = "js_string_indexof_last";
            else if(block.type === "units_print") block.type = "units_js_print";
            else if(block.type === "string_getsubstring") {
              var atBlock = block.getInputTargetBlock("AT1");
              if(atBlock && (atBlock.type === "math_number" || atBlock.type === "math_number_general")) {
                atBlock.setFieldValue(atBlock.getFieldValue("NUM")-1, "NUM");
              }
              else if(atBlock) {
                var minusBlock = workspace.newBlock("math_number_arithmetic");
                var numberOneBlock = workspace.newBlock("math_number_general");
                numberOneBlock.setFieldValue(1, "NUM");
                minusBlock.setFieldValue('-', "OP");
                minusBlock.getInput("A").connection.connect(atBlock.outputConnection);
                minusBlock.getInput("B").connection.connect(numberOneBlock.outputConnection);
                block.getInput("AT1").connection.connect(minusBlock.outputConnection);
              }
              block.type = "js_string_getsubstring";
            }
            else if(block.type === "before_substring") {
              //var parentBlock = block.getParent();
              var needleBlock = block.getInputTargetBlock("SUB");
              var textBlock = block.getInputTargetBlock("TEXT");
              var textBlockCp = null;
              var substringBlock = workspace.newBlock("js_string_getsubstring");
              var startBlock = workspace.newBlock("math_number_general");
              var indexOfBlock = workspace.newBlock("js_string_indexof_first");
              
              startBlock.setFieldValue(0, "NUM");
              
              //TEXT/SUB
              /*
              if(textBlock) {
                textBlockCp = workspace.newBlock(textBlock.type);
                Object.keys(textBlock).forEach(function(prop) {
                  console.log(prop);
                  if(prop !== "id") textBlockCp[prop] = textBlock[prop];
                });
                indexOfBlock.getInput("VALUE").connection.connect(textBlockCp.outputConnection);
                substringBlock.getInput("STRING").connection.connect(textBlock.outputConnection);
              }
              */
              if(textBlock) {
                if(textBlock.type === "text") {
                  textBlockCp = workspace.newBlock(textBlock.type);
                  textBlockCp.setFieldValue(textBlock.getFieldValue("TEXT"), "TEXT");
                  
                  indexOfBlock.getInput("VALUE").connection.connect(textBlockCp.outputConnection);
                  substringBlock.getInput("STRING").connection.connect(textBlock.outputConnection);
                }
                else if(textBlock.type === "variables_get") {
                  textBlockCp = workspace.newBlock(textBlock.type);
                  textBlockCp.setFieldValue(textBlock.getFieldValue("VAR"), "VAR");
                  
                  indexOfBlock.getInput("VALUE").connection.connect(textBlockCp.outputConnection);
                  substringBlock.getInput("STRING").connection.connect(textBlock.outputConnection);
                }
                else {
                    // Blockly.Workspace.prototype.createVariable = function(name, opt_type, opt_id)
                    //var tempVariableName = Blockly.Variables.generateUniqueName(workspace);
                    
                    // get next unused temp variable name
                    var tempVariableName = "temp";
                    var index = 1;
                    //while(workspace.getVariable(tempVariableName + index)) {
                    while(workspace.variableIndexOf(tempVariableName + index) !== -1) { //deprecated
                        index++;
                    }
                    tempVariableName = "temp" + index; 
                    
                    workspace.createVariable(tempVariableName, "STRING");
                    var setBlock = workspace.newBlock("variables_set");
                    setBlock.setFieldValue(tempVariableName, "VAR");
                    setBlock.getInput("VALUE").connection.connect(textBlock.outputConnection);
                    var tempVariableBlock = workspace.newBlock("variables_get");
                    tempVariableBlock.setFieldValue(tempVariableName, "VAR");
                    var tempVariableBlockCp = workspace.newBlock("variables_get");
                    tempVariableBlockCp.setFieldValue(tempVariableName, "VAR");
                    
                    indexOfBlock.getInput("VALUE").connection.connect(tempVariableBlockCp.outputConnection);
                    substringBlock.getInput("STRING").connection.connect(tempVariableBlock.outputConnection);
                    
                    // insert variable initialization before statement block using getBeforeText value
                    var parentBlock = block.getParent();
                    while(parentBlock && !parentBlock.previousConnection) {
                      parentBlock = parentBlock.getParent();
                    }
                    //console.log(parentBlock.previousConnection, setBlock.previousConnection);
                    if(parentBlock) {
                      var previousBlock = parentBlock.previousConnection.targetBlock();
                      if(previousBlock) {
                        setBlock.previousConnection.connect(previousBlock.nextConnection);
                      }
                      parentBlock.previousConnection.connect(setBlock.nextConnection);
                    }
                }
              }
              
              if(needleBlock) indexOfBlock.getInput("FIND").connection.connect(needleBlock.outputConnection);
              substringBlock.getInput("AT1").connection.connect(startBlock.outputConnection);
              substringBlock.getInput("AT2").connection.connect(indexOfBlock.outputConnection);
              if(block.outputConnection) block.outputConnection.targetConnection.connect(substringBlock.outputConnection);
              block.dispose();
              //if(parentBlock) {
              //  parentBlock.
              //}
            }
            
            else if(block.type === "after_substring") {
              //var parentBlock = block.getParent();
              var needleBlock = block.getInputTargetBlock("SUB");
              var textBlock = block.getInputTargetBlock("TEXT");
              var lengthBlock = workspace.newBlock("string_length");
              var textBlockCp = null;
              var textBlockCp2 = null;
              var substringBlock = workspace.newBlock("js_string_getsubstring");
              var startOffestBlock = workspace.newBlock("math_number_general");
              var indexOfBlock = workspace.newBlock("js_string_indexof_first");
              var plusBlock = workspace.newBlock("math_number_arithmetic");
              
              plusBlock.setFieldValue('+', "OP");
              plusBlock.getInput("A").connection.connect(indexOfBlock.outputConnection);
              
              if(textBlock) {
                if(textBlock.type === "text") {
                  var findText = needleBlock.getFieldValue("TEXT");
                  var len = findText && findText.length;
                  var startOffsetBlock = workspace.newBlock("math_number_general");
                  startOffsetBlock.setFieldValue(len || 0, "NUM");
                  textBlockCp = workspace.newBlock(textBlock.type);
                  textBlockCp.setFieldValue(textBlock.getFieldValue("TEXT"), "TEXT");
                  textBlockCp2 = workspace.newBlock(textBlock.type);
                  textBlockCp2.setFieldValue(textBlock.getFieldValue("TEXT"), "TEXT");
                  
                  lengthBlock.getInput("VALUE").connection.connect(textBlockCp2.outputConnection);
                  indexOfBlock.getInput("VALUE").connection.connect(textBlockCp.outputConnection);
                  substringBlock.getInput("STRING").connection.connect(textBlock.outputConnection);
                }
                else if(textBlock.type === "variables_get") {
                  var lenSubBlock = workspace.newBlock("string_length");
                  
                  textBlockCp = workspace.newBlock(textBlock.type);
                  textBlockCp.setFieldValue(textBlock.getFieldValue("VAR"), "VAR");
                  textBlockCp2 = workspace.newBlock(textBlock.type);
                  textBlockCp2.setFieldValue(textBlock.getFieldValue("VAR"), "VAR");
                  
                  indexOfBlock.getInput("VALUE").connection.connect(textBlockCp.outputConnection);
                  substringBlock.getInput("STRING").connection.connect(textBlock.outputConnection);
                }
                else {
                    // Blockly.Workspace.prototype.createVariable = function(name, opt_type, opt_id)
                    //var tempVariableName = Blockly.Variables.generateUniqueName(workspace);
                    
                    // get next unused temp variable name
                    var tempVariableName = "temp";
                    var index = 1;
                    //while(workspace.getVariable(tempVariableName + index)) {
                    while(workspace.variableIndexOf(tempVariableName + index) !== -1) { //deprecated
                        index++;
                    }
                    tempVariableName = "temp" + index; 
                    
                    workspace.createVariable(tempVariableName, "STRING");
                    var setBlock = workspace.newBlock("variables_set");
                    setBlock.setFieldValue(tempVariableName, "VAR");
                    setBlock.getInput("VALUE").connection.connect(textBlock.outputConnection);
                    var tempVariableBlock = workspace.newBlock("variables_get");
                    tempVariableBlock.setFieldValue(tempVariableName, "VAR");
                    var tempVariableBlockCp = workspace.newBlock("variables_get");
                    tempVariableBlockCp.setFieldValue(tempVariableName, "VAR");
                    
                    indexOfBlock.getInput("VALUE").connection.connect(tempVariableBlockCp.outputConnection);
                    substringBlock.getInput("STRING").connection.connect(tempVariableBlock.outputConnection);
                    
                    // insert variable initialization before statement block using getBeforeText value
                    var parentBlock = block.getParent();
                    while(parentBlock && !parentBlock.previousConnection) {
                      parentBlock = parentBlock.getParent();
                    }
                    //console.log(parentBlock.previousConnection, setBlock.previousConnection);
                    if(parentBlock) {
                      var previousBlock = parentBlock.previousConnection.targetBlock();
                      if(previousBlock) {
                        setBlock.previousConnection.connect(previousBlock.nextConnection);
                      }
                      parentBlock.previousConnection.connect(setBlock.nextConnection);
                    }
                }
                
                plusBlock.getInput("B").connection.connect(startOffsetBlock.outputConnection);
              }
              
              if(needleBlock) indexOfBlock.getInput("FIND").connection.connect(needleBlock.outputConnection);
              substringBlock.getInput("AT1").connection.connect(plusBlock.outputConnection);
              substringBlock.getInput("AT2").connection.connect(lengthBlock.outputConnection);
              if(block.outputConnection) block.outputConnection.targetConnection.connect(substringBlock.outputConnection);
              block.dispose();
              //if(parentBlock) {
              //  parentBlock.
              //}
            }

            else if(block.type === "string_charat") {
              var atBlock = block.getInputTargetBlock("AT");
              if(atBlock && (atBlock.type === "math_number" || atBlock.type === "math_number_general")) {
                atBlock.setFieldValue(atBlock.getFieldValue("NUM")-1, "NUM");
              }
              else if(atBlock) {
                var minusBlock = workspace.newBlock("math_number_arithmetic");
                var numberOneBlock = workspace.newBlock("math_number_general");
                numberOneBlock.setFieldValue(1, "NUM");
                minusBlock.setFieldValue('-', "OP");
                minusBlock.getInput("A").connection.connect(atBlock.outputConnection);
                minusBlock.getInput("B").connection.connect(numberOneBlock.outputConnection);
                block.getInput("AT").connection.connect(minusBlock.outputConnection);
                //var minusBlockNumberOneBlockConnectionInput = new Blockly.Connection(minusBlock, Blockly.INPUT_VALUE);
                //var minusBlockNumberOneBlockConnectionOutput = new Blockly.Connection(numberOneBlock, Blockly.OUTPUT_VALUE);
                //minusBlockNumberOneBlockConnectionInput.connect(minusBlockNumberOneBlockConnectionOutput);
                
                //minusBlockNumberOneBlockConnection. Blockly.OUTPUT_VALUE;
                
                //block.inputList[0] = new Blockly.Input(Blockly.INPUT_VALUE, "AT", numberOneBlock, 
                //                                       minusBlockNumberOneBlockConnection)
                //minusBlock.inputList.push(new Blockly.Input(Blockly.INPUT_VALUE, "B", minusBlock, 
                //                          minusBlockNumberOneBlockConnectionInput));
                //minusBlock.appendValueInput();
                //getInputWithBlock();
                //new Blockly.Input(Blockly.INPUT_VALUE, "B", numberOneBlock);

                //atBlock.unplug();
                //atBlock.setParent(block);
              }
              block.type = "js_string_charat";
            }
            /*
            var parent = block.getParent(); 
            if(parent && parent.type === "string_charat" && 
               (block.type === "math_number" || block.type === "math_number_general")) {
              //block.getParent
              block.setFieldValue(block.getFieldValue("NUM")-1, "NUM");
            }
            */
  }

  document.getElementById("convert-to-ruby-text-btn")
          .addEventListener("click", convertToCode);
  document.getElementById("convertToXMLButton")
          .addEventListener("click", convertToXML);
    document.getElementById("convertToJSButton")
          .addEventListener("click", function() {
        
        var workspace = workspace || Blockly.getMainWorkspace();
        workspace.getAllBlocks().forEach(convertToJSBlock);
        
        var xmlDom = Blockly.Xml.workspaceToDom(workspace);
        var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
        //xmlText = xmlText.replace(/units_print/g, "units_js_print");
        //xmlText = xmlText.replace(/string_charat/g, "string_js_charat");
        var xmlDom = null;
        try {
          xmlDom = Blockly.Xml.textToDom(xmlText);
        } catch (e) {
          var q =
              window.confirm(MSG['badXml'].replace('%1', e));
          if (!q) {
            return;
          }
        }
        if (xmlDom) {
          workspace.clear();
          Blockly.Xml.domToWorkspace(xmlDom, workspace);
        }

      Blockly.svgResize(workspace);  
        
/*
        var workspace2 = convertTextToCodeBlocksToJS(workspace, workspace.getTopBlocks());
        
        //workspace.clear();
        var newBlocks = workspace2.getTopBlocks();
        newBlocks.forEach(function(block) {
          block.workspace = workspace;
          workspace.newBlock(block);
        });
        
        convertToCode();
        convertToXML();
        */
    });
})();
