"use strict";
(function() {
  document.getElementById("convert-to-ruby-text-btn")
          .addEventListener("click", function() {
        var workspace = workspace || Blockly.getMainWorkspace();
        var xmlDom = Blockly.Xml.workspaceToDom(workspace);
        var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
        document.getElementById('xml_data').value = xmlText;
  });
  document.getElementById("convertToXMLButton")
          .addEventListener("click", function() {
        
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
    });
})();