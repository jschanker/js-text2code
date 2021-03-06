Blockly.Blocks['function_variables_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        //.appendField(Blockly.Msg.VARIABLES_SET)
        .appendField("let ")
        .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), "VAR")
        .appendField(" = ");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
  },
  onchange: function(event) {
    var children = this.getChildren();
    // also handle rename event
    if(children.length === 0) {
      // remove function calls with this variable name, if they exist
    }
    else {
      var value = children[0];
      if(value.type === "repeat_reduce_lambda") {
        //console.log(value);
        //console.log(this.getFieldValue("VAR"));
        /*
        //Blockly.Events.setGroup("Function Calls");
        Blockly.Events.setGroup(event.group);
        
        var xml = goog.dom.createDom('xml');
        var block = goog.dom.createDom('block');
        block.setAttribute('type', this.defType_);
        var xy = this.getRelativeToSurfaceXY();
        var x = xy.x + Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1);
        var y = xy.y + Blockly.SNAP_RADIUS * 2;
        block.setAttribute('x', x);
        block.setAttribute('y', y);
        //var mutation = this.mutationToDom();
        //block.appendChild(mutation);
        var field = goog.dom.createDom('field');
        field.setAttribute('name', 'NAME');
        field.appendChild(document.createTextNode(this.getFieldValue("VAR")));
        block.appendChild(field);
        xml.appendChild(block);
        Blockly.Xml.domToWorkspace(xml, this.workspace);
        
        Blockly.Events.setGroup(false);
        */
        
      }
    }
  }
};

Blockly.Blocks['seconds_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".seconds");
    this.setOutput(true, ["seconds"]);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['minutes_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".minutes");
    this.setOutput(true, ["minutes"]);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['hours_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".hours");
    this.setOutput(true, ["hours"]);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['days_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".days");
    this.setOutput(true, ["days"]);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['seconds_to_minutes'] = {
  init: function() {
    this.appendValueInput("SECONDS")
        .setCheck("seconds")
    this.appendDummyInput()
        .appendField(".seconds().toMinutes()");
    this.setOutput(true, "minutes");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['minutes_to_hours'] = {
  init: function() {
    this.appendValueInput("MINUTES")
        .setCheck("minutes")
    this.appendDummyInput()
        .appendField(".minutes().toHours()");
    this.setOutput(true, "hours");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['hours_to_days'] = {
  init: function() {
    this.appendValueInput("HOURS")
        .setCheck("hours")
    this.appendDummyInput()
        .appendField(".hours().toDays()");
    this.setOutput(true, "days");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['remaining_seconds'] = {
  init: function() {
    this.appendValueInput("SECONDS")
        .setCheck("seconds")
    this.appendDummyInput()
        .appendField(".seconds().remainingAfterMinutesRemoved()");
    this.setOutput(true, "seconds");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['remaining_minutes'] = {
  init: function() {
    this.appendValueInput("MINUTES")
        .setCheck("minutes")
    this.appendDummyInput()
        .appendField(".minutes().remainingAfterHoursRemoved()");
    this.setOutput(true, "minutes");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['remaining_hours'] = {
  init: function() {
    this.appendValueInput("HOURS")
        .setCheck("hours")
    this.appendDummyInput()
        .appendField(".hours().remainingAfterDaysRemoved()");
    this.setOutput(true, "hours");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

/*
Blockly.Blocks['time_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM");
    this.setOutput(true, ["seconds", "minutes", "hours", "days"]);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['seconds_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("seconds")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['minutes_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("minutes")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".minutes");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['hours_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("hours")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".hours");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['days_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("days")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".days");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
*/
// CURRENCY

Blockly.Blocks['pennies_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".pennies");
    this.setOutput(true, ["pennies"]);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['nickels_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".nickels");
    this.setOutput(true, ["nickels"]);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['quarters_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".quarters");
    this.setOutput(true, ["quarters"]);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['dollars_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".dollars");
    this.setOutput(true, ["dollars"]);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pennies_to_nickels'] = {
  init: function() {
    this.appendValueInput("PENNIES")
        .setCheck("pennies")
    this.appendDummyInput()
        .appendField(".pennies().toNickels()");
    this.setOutput(true, "nickels");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['nickels_to_quarters'] = {
  init: function() {
    this.appendValueInput("NICKELS")
        .setCheck("nickels")
    this.appendDummyInput()
        .appendField(".nickels().toQuarters()");
    this.setOutput(true, "quarters");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['quarters_to_dollars'] = {
  init: function() {
    this.appendValueInput("QUARTERS")
        .setCheck("quarters")
    this.appendDummyInput()
        .appendField(".quarters().toDollars()");
    this.setOutput(true, "dollars");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['remaining_pennies'] = {
  init: function() {
    this.appendValueInput("PENNIES")
        .setCheck("pennies")
    this.appendDummyInput()
        .appendField(".pennies().remainingAfterNickelsRemoved()");
    this.setOutput(true, "pennies");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['remaining_nickels'] = {
  init: function() {
    this.appendValueInput("NICKELS")
        .setCheck("nickels")
    this.appendDummyInput()
        .appendField(".nickels().remainingAfterQuartersRemoved()");
    this.setOutput(true, "nickels");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['remaining_quarters'] = {
  init: function() {
    this.appendValueInput("QUARTERS")
        .setCheck("quarters")
    this.appendDummyInput()
        .appendField(".quarters().remainingAfterDollarsRemoved()");
    this.setOutput(true, "quarters");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

/*Blockly.Blocks['pennies_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("pennies")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".pennies");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['nickels_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("nickels")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".nickels");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['quarters_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("quarters")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".quarters");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['dollars_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("dollars")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".dollars");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['currency_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM");
    this.setOutput(true, ["pennies", "nickels", "quarters", "dollars"]);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};*/

Blockly.Blocks['units_print'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck(null)
        .appendField("display(");
    this.appendDummyInput()
        .appendField(").in(\"")
        .appendField(new Blockly.FieldDropdown([["console", "console"], ["box", "box"], ["result cell", "result_cell"]], function(option) {
            var hasResultCellInput = (option == 'result_cell');
            this.sourceBlock_.updateShape_(hasResultCellInput);
        }), "TYPE");
    this.appendDummyInput("CLOSE")
        .appendField("\");");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var resultCellInput = (this.getFieldValue('TYPE') == 'result_cell');
    container.setAttribute('result_cell_input', resultCellInput);
    return container;
  },
  domToMutation: function(xmlElement) {
    var hasResultCellInput = (xmlElement.getAttribute('result_cell_input') == 'true');
    this.updateShape_(hasResultCellInput);  // Helper function for adding/removing 2nd input.
  },
  updateShape_: function(resultInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('RESULT_CELL');
    if (resultInput) {
      if (!inputExists) {
        //this.getInput("CONTEXT").removeField("CLOSE");
        this.removeInput("CLOSE");
        this.appendValueInput('RESULT_CELL')
            .appendField(" ")
            .setCheck('result_cell');
        this.appendDummyInput("CLOSE")
            .appendField("\");");
      }
    } else if (inputExists) {
      this.removeInput('RESULT_CELL');
    }
  }
};

Blockly.Blocks['units_js_print'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["console.log", "console"], ["window.alert", "box"]]), "TYPE")
        .appendField("(");
    this.appendDummyInput("CLOSE")
        .appendField(");");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['js_result_cell_print'] = {
  init: function() {
    this.appendValueInput("RESULT_CELL")
        .setCheck('result_cell')
        .appendField("document.getElementById(\"")
    this.appendValueInput("TEXT")
        .setCheck(null)
        .appendField("\").value = ")
    this.appendDummyInput("CLOSE")
        .appendField(";");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['input_cell'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["E","E"], ["F","F"], ["G","G"], ["H","H"], ["I","I"], ["J","J"]]), "COL")
        .appendField(new Blockly.FieldNumber(1, 1, 15), "ROW");
    this.setOutput(true, ["Number", "String", "seconds", "minutes", "hours", "days", 
                          "pennies", "nickels", "quarters", "dollars", "input_cell"]);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['input_cell_range'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["E","E"], ["F","F"], ["G","G"], ["H","H"], ["I","I"], ["J","J"]]), "COLA")
        .appendField(new Blockly.FieldNumber(1, 1, 15), "ROWA")
        .appendField(":")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["E","E"], ["F","F"], ["G","G"], ["H","H"], ["I","I"], ["J","J"]]), "COLB")
        .appendField(new Blockly.FieldNumber(1, 1, 15), "ROWB");        
        
    this.setOutput(true, "Array");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['variable_input_cell_range'] = {
  init: function() {
    this.appendValueInput("COLA")
        .setCheck("String");
    this.appendValueInput("ROWA")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(":");
    this.appendValueInput("COLB")
        .setCheck("String");
    this.appendValueInput("ROWB")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['reduce_no_seed'] = {
  init: function() {
    this.appendValueInput("LIST")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField(".reduce{ |")
        .appendField(new Blockly.FieldVariable("acc"), "ACC")
        .appendField(",")
        .appendField(new Blockly.FieldVariable("item"), "ITEM")
        .appendField("|");
    this.appendStatementInput("DO")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("}");
    this.setOutput(true, null)
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['repeat_reduce'] = {
  init: function() {
    this.appendValueInput("FUNC")
        .setCheck("Function")
        //.appendField("repeatedly((resultSoFar, x) => ");
        .appendField("repeatedly(");
    this.appendValueInput("LIST")
        .appendField(").everyItemInList(")
        .setCheck("Array");
    //this.appendDummyInput()
    //    .appendField(").startingWith(")
    //    .appendField(new Blockly.FieldVariable("first item"), "ACC");
    //this.appendStatementInput("DO")
    //    .setCheck(null);
    this.appendDummyInput()
        .appendField(");");
    this.setInputsInline(true);
    this.setOutput(true, null)
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['num_list'] = {
  init: function() {
    this.appendValueInput("First")
        .appendField("[");
    this.appendValueInput("Second")
        .appendField(", ");
    this.appendValueInput("Third")
        .appendField(", ");
    this.appendValueInput("Fourth")
        .appendField(", ");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null)
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['repeat_reduce_lambda'] = {
  init: function() {
    this.appendValueInput("RET")
        .setCheck(null)
        .appendField("(")
        .appendField(new Blockly.FieldVariable("resultSoFar"), "ACC")
        .appendField(", ")
        .appendField(new Blockly.FieldVariable("item"), "ITEM")
        .appendField(") => ");
    this.setInputsInline(true);
    this.setOutput(true, "Function");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['print_in_result_cell'] = {
  init: function() {
    this.appendValueInput("EXP")
        .setCheck(null)
        .appendField("display(");
    this.appendValueInput("CELL")
        .setCheck("result_cell")
        .appendField(").inResultCell(\"");
    this.appendDummyInput()
        .appendField("\");");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['result_cell_column'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("R")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["E","E"], ["F","F"], ["G","G"], ["H","H"], ["I","I"], ["J","J"]]), "COL");
    this.setOutput(true, "result_cell");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

/*
Blockly.Blocks['prompt_for'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("promptFor(\"")
        .appendField(new Blockly.FieldDropdown([["number","number"], ["text","text"]]), "TYPE")
        .appendField("\").withMessage(\"")
        .appendField(new Blockly.FieldTextInput("Enter number: "), "TEXT")
        .appendField("\")");
    this.setOutput(true, ["Number", "seconds","minutes","hours","days","pennies","nickels","quarters","dollars", "String"]);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
*/

Blockly.Blocks['convert_to_number'] = {
  init: function() {
    this.appendValueInput("STR")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(".toNumber()");
    this.setOutput(true, ["Number", "seconds","minutes","hours","days","pennies","nickels","quarters","dollars"]);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['js_convert_to_number'] = {
  init: function() {
    this.appendValueInput("STR")
        .setCheck("String")
        .appendField("parseFloat(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, ["Number", "seconds","minutes","hours","days","pennies","nickels","quarters","dollars"]);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['prompt_for_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("promptForNumberWithMessage(\"")
        .appendField(new Blockly.FieldTextInput("Enter number: "), "TEXT")
        .appendField("\")");
    this.setOutput(true, ["Number", "seconds","minutes","hours","days","pennies","nickels","quarters","dollars"]);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['prompt_for_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("promptForTextWithMessage(\"")
        .appendField(new Blockly.FieldTextInput("Enter text: "), "TEXT")
        .appendField("\")");
    this.setOutput(true, "String");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['js_prompt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("prompt(\"")
        .appendField(new Blockly.FieldTextInput("Enter input: "), "TEXT")
        .appendField("\")");
    this.setOutput(true, "String");
    //this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['units_convert'] = {
  init: function() {
    this.appendValueInput("NUM")
        .setCheck(["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.appendValueInput("FACTOR")
        .setCheck(["Number", "input_cell"])
        .appendField(".units.to_units_with_conversion_factor(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['units_remaining'] = {
  init: function() {
    this.appendValueInput("NUM")
        .setCheck(["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"])
    this.appendValueInput("FACTOR")
        .setCheck(["Number", "input_cell"])
        .appendField(".units.remaining_after_removal_of_units_of(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['before_substring'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        //.appendField("from_text(");
    this.appendValueInput("SUB")
        .setCheck("String")
        .appendField(".getBeforeText(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
    this.setTooltip('from text');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['after_substring'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        //.appendField("from_text(");
    this.appendValueInput("SUB")
        .setCheck("String")
        .appendField(".getAfterText(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
    this.setTooltip('from text');
    this.setHelpUrl('');
  }
};

/*
Blockly.Blocks['variable_general_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("set(")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField(").to(");
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
*/

Blockly.Blocks['variable_general_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("let ")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField(" = ");
    this.appendDummyInput()
        .appendField(";");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['function_getself'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("self");
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['class_def'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("class")
        .appendField(new Blockly.FieldTextInput("class_name"), "NAME");
    this.appendStatementInput("STACK")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end");
    this.setInputsInline(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['function_defzeroinputs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("def ")
        .appendField(new Blockly.FieldTextInput("function_name"), "NAME");
    this.appendStatementInput("STACK")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['function_defoneinput'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("def ")
        .appendField(new Blockly.FieldTextInput("function_name"), "NAME")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput("variable_name"), "PARAM")
        .appendField(")");
    this.appendStatementInput("STACK")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), [this.getFieldValue('PARAM')], false];
  }
};

Blockly.Blocks['function_deftwoinputs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("def ")
        .appendField(new Blockly.FieldTextInput("function_name"), "NAME")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput("variable1"), "PARAMA")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("variable2"), "PARAMB")
        .appendField(")");
    this.appendStatementInput("STACK")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end");
    this.setInputsInline(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), [this.getFieldValue('PARAMA'), this.getFieldValue('PARAMB')], false];
  }
};

Blockly.Blocks['function_callzeroinputs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("function_name"), "NAME");
        //.appendField("()");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('NAME', this.getFieldValue('NAME'));
    // Below is for consistency with <field name = "...">value</field>
    //container.setAttribute('NAME', 'name');
    //container.innerText = this.getFieldValue('NAME');
    return container;
  },
  domToMutation: function(xmlElement) {
    //alert(this.getField
    //alert("NAME: " + xmlElement.getAttribute('name'));
    //alert("MY NAME IS: " + this.setFieldValue('NAME'));
    this.setFieldValue(xmlElement.getAttribute('NAME'), 'NAME');
  }
};

Blockly.Blocks['function_calloneinput'] = {
  init: function() {
    this.appendDummyInput();
    this.appendValueInput("ARG1")
        .setCheck(null)
        //.appendField(new Blockly.FieldTextInput("default"), "FOO")
        .appendField(new Blockly.FieldLabel("("), "NAME");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('NAME', this.getFieldValue('NAME'));
    // Below is for consistency with <field name = "...">value</field>
    //container.setAttribute('NAME', 'name');
    //container.innerText = this.getFieldValue('NAME');
    return container;
  },
  domToMutation: function(xmlElement) {
    //alert(this.getField
    //alert("NAME: " + xmlElement.getAttribute('name'));
    //alert("MY NAME IS: " + this.setFieldValue('NAME'));
    this.setFieldValue(xmlElement.getAttribute('NAME'), 'NAME');
  }
};

Blockly.Blocks['function_calltwoinputs'] = {
  init: function() {
    this.appendDummyInput();
    this.appendValueInput("ARG1")
        .setCheck(null)
        //.appendField(new Blockly.FieldTextInput("default"), "FOO")
        .appendField("(", "NAME");
    this.appendValueInput("ARG2")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('NAME', this.getFieldValue('NAME'));
    //alert(container.getAttribute('name'));
    return container;
  },
  domToMutation: function(xmlElement) {
    //alert(this.getField
    //alert("NAME: " + xmlElement.getAttribute('name'));
    //alert("MY NAME IS: " + this.setFieldValue('NAME'));
    this.setFieldValue(xmlElement.getAttribute('NAME'), 'NAME');
  }
};

Blockly.Blocks['js_string_concatenate'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 + %2",
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "B",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "output": "String",
      "colour": 160,
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['string_concatenate'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1.plus(%2)",
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "B",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "output": "String",
      "colour": 160,
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['string_length'] = {
  /**
   * Block for string length.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 .length",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": ['String', 'Array']
        }
      ],
      "output": 'Number',
      "colour": Blockly.Blocks.texts.HUE,
      "tooltip": Blockly.Msg.TEXT_LENGTH_TOOLTIP,
      "helpUrl": Blockly.Msg.TEXT_LENGTH_HELPURL
    });
  }
};

Blockly.Blocks['js_string_indexof_first'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("String");
    this.appendValueInput("FIND")
        .setCheck("String")
        .appendField(".indexOf(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['string_indexof_first'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("String");
    this.appendValueInput("FIND")
        .setCheck("String")
        .appendField(".findFirstOccurrenceOfText(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['js_string_indexof_last'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("String");
    this.appendValueInput("FIND")
        .setCheck("String")
        .appendField(".lastIndexOf(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['string_indexof_last'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("String");
    this.appendValueInput("FIND")
        .setCheck("String")
        .appendField(".findLastOccurrenceOfText(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['string_charat'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("String");
    this.appendValueInput("AT")
        .setCheck("Number")
        .appendField(".getCharacterNumber(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['js_string_charat'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("String");
    this.appendValueInput("AT")
        .setCheck("Number")
        .appendField(".charAt(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['js_string_getsubstring'] = {
  init: function() {
    this.appendValueInput("STRING")
        .setCheck("String");
    this.appendValueInput("AT1")
        .setCheck("Number")
        .appendField(".substring(");
    this.appendValueInput("AT2")
        .setCheck("Number")
        .appendField(", ");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['string_getsubstring'] = {
  init: function() {
    this.appendValueInput("STRING")
        .setCheck("String");
    this.appendValueInput("AT1")
        .setCheck("Number")
        .appendField(".getTextFromNumber(");
    this.appendValueInput("AT2")
        .setCheck("Number")
        .appendField(").toNumber(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['math_number_general'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM");
    this.setOutput(true, ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_number_word_arithmetic'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 .%2(%3)",
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]
        },
        {
          "type": "field_dropdown",
          "name": "OP",
          "options":
            [['plus', '+'],
             ['minus', '-'],
             ['times', '*'],
             ['dividedBy', '/'],
             ['raisedToThe', '**']]
        },
        {
          "type": "input_value",
          "name": "B",
          "check": ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Blocks.math.HUE,
      "helpUrl": Blockly.Msg.MATH_ARITHMETIC_HELPURL
    });
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'ADD': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
        'MINUS': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
        'MULTIPLY': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
        'DIVIDE': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
        'POWER': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
      };
      return TOOLTIPS[mode];
    });
  }
};

Blockly.Blocks['quotient'] = {
  init: function() {
    this.appendValueInput("A")
        .appendField("quotientOf(")
        .setCheck(["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.appendValueInput("B")
        .appendField(").dividedBy(")
        .setCheck(["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['remainder'] = {
  init: function() {
    this.appendValueInput("A")
        .appendField("remainderOf(")
        .setCheck(["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.appendValueInput("B")
        .appendField(").dividedBy(")
        .setCheck(["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['js_remainder'] = {
  init: function() {
    this.appendValueInput("A")
        .setCheck(["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.appendValueInput("B")
        .appendField(" % ")
        .setCheck(["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.setInputsInline(true);
    this.setOutput(true, ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_number_arithmetic'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]
        },
        {
          "type": "field_dropdown",
          "name": "OP",
          "options":
            [[Blockly.Msg.MATH_ADDITION_SYMBOL, '+'],
             [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, '-'],
             [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, '*'],
             [Blockly.Msg.MATH_DIVISION_SYMBOL, '/'],
             [Blockly.Msg.MATH_POWER_SYMBOL, '**']]
        },
        {
          "type": "input_value",
          "name": "B",
          "check": ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Blocks.math.HUE,
      "helpUrl": Blockly.Msg.MATH_ARITHMETIC_HELPURL
    });
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'ADD': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
        'MINUS': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
        'MULTIPLY': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
        'DIVIDE': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
        'POWER': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
      };
      return TOOLTIPS[mode];
    });
  }
};

Blockly.Blocks['math_number_round'] = {
  init: function() {
    this.jsonInit({
      "type": "math_number_round",
      "message0": "Math.%2(%1)",
      "args0": [
        {
          "type": "input_value",
          "name": "NUM",
          "check": ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]
        },
        {
          "type": "field_dropdown",
          "name": "OP",
          "options": [
            [Blockly.Msg.MATH_ROUND_OPERATOR_TRUNC, 'TRUNC'],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUND, 'round'],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP, 'round_up'],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN, 'round_down'],
            [Blockly.Msg.MATH_SINGLE_OP_ROOT, 'ROOT'],            
          ]
        },
      ],
      "output": ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"],
      "colour": Blockly.Blocks.math.HUE,
      "tooltip": Blockly.Msg.MATH_ROUND_TOOLTIP,
      "helpUrl": Blockly.Msg.MATH_ROUND_HELPURL
    });
  }
};

Blockly.Blocks['logic_compare_values'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    var rtlOperators = [
      ['=', 'EQ'],
      ['\u2260', 'NEQ'],
      ['\u200F<\u200F', 'LT'],
      ['\u200F\u2264\u200F', 'LTE'],
      ['\u200F>\u200F', 'GT'],
      ['\u200F\u2265\u200F', 'GTE']
    ];
    var ltrOperators = [
      ['==', '=='],
      ['!=', '!='],
      ['<', '<'],
      ['<=', '<='],
      ['>', '>'],
      ['>=', '>=']
    ];
    var OPERATORS = this.RTL ? rtlOperators : ltrOperators;
    this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A');
    this.appendValueInput('B')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'EQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
        'NEQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
        'LT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
        'LTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
        'GT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
        'GTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
      };
      return TOOLTIPS[op];
    });
    this.prevBlocks_ = [null, null];
  },
  /**
   * Called whenever anything on the workspace changes.
   * Prevent mismatched types from being compared.
   * @param {!Blockly.Events.Abstract} e Change event.
   * @this Blockly.Block
   */
  onchange: function(e) {
    var blockA = this.getInputTargetBlock('A');
    var blockB = this.getInputTargetBlock('B');
    // Disconnect blocks that existed prior to this change if they don't match.
    if (blockA && blockB &&
        !blockA.outputConnection.checkType_(blockB.outputConnection)) {
      // Mismatch between two inputs.  Disconnect previous and bump it away.
      // Ensure that any disconnections are grouped with the causing event.
      Blockly.Events.setGroup(e.group);
      for (var i = 0; i < this.prevBlocks_.length; i++) {
        var block = this.prevBlocks_[i];
        if (block === blockA || block === blockB) {
          block.unplug();
          block.bumpNeighbours_();
        }
      }
      Blockly.Events.setGroup(false);
    }
    this.prevBlocks_[0] = blockA;
    this.prevBlocks_[1] = blockB;
  }
};

Blockly.Blocks['logic_boolean_literal'] = {
  /**
   * Block for boolean data type: true and false.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BOOL",
          "options": [
            [Blockly.Msg.LOGIC_BOOLEAN_TRUE, "true"],
            [Blockly.Msg.LOGIC_BOOLEAN_FALSE, "false"]
          ]
        }
      ],
      "output": "Boolean",
      "colour": Blockly.Blocks.logic.HUE,
      "tooltip": Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP,
      "helpUrl": Blockly.Msg.LOGIC_BOOLEAN_HELPURL
    });
  }
};

Blockly.Msg.LOGIC_NEGATE_TITLE = "not(%1)";

Blockly.Blocks['logic_negate_value'] = {
  /**
   * Block for negation.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOGIC_NEGATE_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "BOOL",
          "check": "Boolean"
        }
      ],
      "output": "Boolean",
      "colour": Blockly.Blocks.logic.HUE,
      "tooltip": Blockly.Msg.LOGIC_NEGATE_TOOLTIP,
      "helpUrl": Blockly.Msg.LOGIC_NEGATE_HELPURL
    });
  }
};

Blockly.Blocks['js_logic_negate_value'] = {
  /**
   * Block for negation.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "!%1",
      "args0": [
        {
          "type": "input_value",
          "name": "BOOL",
          "check": "Boolean"
        }
      ],
      "output": "Boolean",
      "colour": Blockly.Blocks.logic.HUE,
      "tooltip": Blockly.Msg.LOGIC_NEGATE_TOOLTIP,
      "helpUrl": Blockly.Msg.LOGIC_NEGATE_HELPURL
    });
  }
};

Blockly.Blocks['logic_operation_general'] = {
  /**
   * Block for logical operations: 'and', 'or'.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.LOGIC_OPERATION_AND, 'and'],
         [Blockly.Msg.LOGIC_OPERATION_OR, 'or']];
    this.setHelpUrl(Blockly.Msg.LOGIC_OPERATION_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
        .setCheck('Boolean');
    this.appendValueInput('B')
        .setCheck('Boolean')
        .appendField(".")
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP')
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'AND': Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND,
        'OR': Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['js_logic_operation_general'] = {
  /**
   * Block for logical operations: 'and', 'or'.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [["&&", 'and'],
         ["||", 'or']];
    this.setHelpUrl(Blockly.Msg.LOGIC_OPERATION_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
        .setCheck('Boolean');
    this.appendValueInput('B')
        .setCheck('Boolean')
        .appendField(".")
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP')
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'AND': Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND,
        'OR': Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['controls_if_logic'] = {
  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendValueInput('IF0')
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF + "(");
    this.appendDummyInput()
        .appendField(") {");
    this.appendStatementInput('DO0')
        /*.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);*/
    this.appendDummyInput('END')
        .appendField("}");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['controls_if_elseif_logic',
                                         'controls_if_else_logic']));
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
      } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
      } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
      } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
      }
      return '';
    });
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
  },
  /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elsif', this.elseifCount_);
    }
    if (this.elseCount_) {
      container.setAttribute('else', 1);
    }
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elsif'), 10) || 0;
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('controls_if_if_logic');
    containerBlock.initSvg();
    var connection = containerBlock.nextConnection;
    for (var i = 1; i <= this.elseifCount_; i++) {
      var elseifBlock = workspace.newBlock('controls_if_elseif_logic');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      var elseBlock = workspace.newBlock('controls_if_else_logic');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    // Count number of inputs.
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    var valueConnections = [null];
    var statementConnections = [null];
    var elseStatementConnection = null;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif_logic':
          this.elseifCount_++;
          valueConnections.push(clauseBlock.valueConnection_);
          statementConnections.push(clauseBlock.statementConnection_);
          break;
        case 'controls_if_else_logic':
          this.elseCount_++;
          elseStatementConnection = clauseBlock.statementConnection_;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 1; i <= this.elseifCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
      Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
    }
    Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif_logic':
          var inputIf = this.getInput('IF' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        case 'controls_if_else_logic':
          var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    // Delete everything.
    if (this.getInput('ELSE')) {
      this.removeInput('ELSE');
    }
    var i = 1;
    while (this.getInput('IF' + i)) {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
      this.removeInput("BRACES_END" + i);
      i++;
    }
    if(this.getInput('END')) {
      this.removeInput('END');
    }

    // Rebuild block.
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('IF' + i)
          .setCheck('Boolean')
          .appendField("} else if(");
      this.appendDummyInput("BRACES_END" + i)
          .appendField(") {");
      this.appendStatementInput('DO' + i);
          /*.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);*/
    }

    this.removeInput('ELSESTART');

    if (this.elseCount_) {
      this.appendDummyInput("ELSESTART")
          .appendField("} " + Blockly.Msg.CONTROLS_IF_MSG_ELSE + " { ");
      this.appendStatementInput('ELSE')
          //.appendField("} " + Blockly.Msg.CONTROLS_IF_MSG_ELSE + " { ");
    }
    
    this.appendDummyInput('END')
        .appendField("}");
  }
};

Blockly.Blocks['controls_if_if_logic'] = {
  /**
   * Mutator block for if container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_IF_IF_TITLE_IF);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['controls_if_elseif_logic'] = {
  /**
   * Mutator block for else-if condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput()
        .appendField("else if");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['controls_if_else_logic'] = {
  /**
   * Mutator block for else condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE);
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['math_number_property_single'] = {
  /**
   * Block for checking if a number is even, odd, prime, integer, positive,
   * negative or if it is divisible by certain number.
   * @this Blockly.Block
   */
  init: function() {
    var PROPERTIES =
        [['.isEven()', '.is_even'],
         ['.isOdd()', '.is_odd'],
         ['.isPrime()', '.is_prime'],
         ['.isInteger()', '.is_integer'],
         ['.isPositive()', '.is_positive'],
         ['.isNegative()', '.is_negative']];
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendValueInput('NUMBER_TO_CHECK')
        .setCheck('Number');
    var dropdown = new Blockly.FieldDropdown(PROPERTIES);
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.MATH_IS_TOOLTIP);
  }
};

Blockly.Blocks['math_number_property_divisible'] = {
  /**
   * Block for checking if a number is divisible by certain number.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendValueInput('NUMBER_TO_CHECK')
        .setCheck('Number');
    this.appendValueInput('DIVISOR')
        .appendField(" .isDivisibleBy(", 'PROPERTY')
        .setCheck('Number');
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.MATH_IS_TOOLTIP);
  }
};

Blockly.Blocks['controls_repeat_times'] = {
  /**
   * Block for repeat n times (external number).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 .times do %2 %3 end",
      "args0": [
        {
          "type": "input_value",
          "name": "TIMES",
          "check": "Number"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "DO"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
      "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
      "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
    });
    this.setInputsInline(true);
  }
};

Blockly.Blocks['controls_whileUntil_do'] = {
  /**
   * Block for 'do while/until' loop.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [['while', 'while'],
         ['until', 'until']];
    this.setHelpUrl(Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL);
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendValueInput('BOOL')
        .setCheck('Boolean')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
    this.appendDummyInput()
        .appendField('do');
    this.appendStatementInput('DO');
    this.appendDummyInput()
        .appendField('end');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('MODE');
      var TOOLTIPS = {
        'WHILE': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
        'UNTIL': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
      };
      return TOOLTIPS[op];
    });
  }
};
