(function(){
  var hasLoadedInControlPannel =  document.body.className.indexOf("sqs-edit-mode") > 0;
  


  if(!hasLoadedInControlPannel){

        // Make elements more CSS friendly - Squarespace
        // Make elements more CSS friendly - Squarespace
        // Make elements more CSS friendly - Squarespace
        // Make elements more CSS friendly - Squarespace
        // Make elements more CSS friendly - Squarespace
        var inFronOfElements = document.getElementsByClassName("css-helpers-in-front-of"),
            i = 0
            inFronOfElementsLen = inFronOfElements.length;

        // loop through inFronOfElements
        for (i ; i < inFronOfElementsLen; i++){
          var element               = inFronOfElements[i],
              classForAfterSection  = element.getAttribute("data-in-front-of")
              elementSection        = element.parentNode.parentNode;

          elementSection.setAttribute("id", "in-front-of-" + classForAfterSection);
          elementSection.nextSibling.className += " " + classForAfterSection;
        }
        // END: Make elements more CSS friendly - Squarespace







        // Make elements more CSS friendly - Class to parent - Squarespace
        // Make elements more CSS friendly - Class to parent - Squarespace
        // Make elements more CSS friendly - Class to parent - Squarespace
        // Make elements more CSS friendly - Class to parent - Squarespace
        // Make elements more CSS friendly - Class to parent - Squarespace
        var classToParentElements    = document.getElementsByClassName("css-helpers-class-to-parent-element"),
            i = 0
            classToParentElementsLen = classToParentElements.length;

            // loop through classToParentElements
            for (i ; i < classToParentElementsLen; i++){
              var element                = classToParentElements[i],
                  classForParentElement  = element.getAttribute("data-class-to-parent-element")
                  elementSection         = element.parentNode.parentNode,
                  parentElementSection   = elementSection.parentNode;

              elementSection.setAttribute("id", "class-to-parent-element-" + classForParentElement);
              parentElementSection.className += " " + classForParentElement;
            }
        // END: Make elements more CSS friendly - Class to parent - Squarespace










        // Make elements more CSS friendly - Class to Parent-Parent - Squarespace
        // Make elements more CSS friendly - Class to Parent-Parent - Squarespace
        // Make elements more CSS friendly - Class to Parent-Parent - Squarespace
        // Make elements more CSS friendly - Class to Parent-Parent - Squarespace
        // Make elements more CSS friendly - Class to Parent-Parent - Squarespace
        (function() {
          var classToParentParentElements    = document.getElementsByClassName("css-helpers-class-to-parent-parent-element"),
            i = 0
            classToParentParentElementsLen = classToParentParentElements.length;

            // loop through classToParentParentElements
            for (i ; i < classToParentParentElementsLen; i++){
              var element                      = classToParentParentElements[i],
                  classForParentParentElement  = element.getAttribute("data-class-to-parent-parent-element")
                  elementSection               = element.parentNode.parentNode,
                  parentParentElementSection   = elementSection.parentNode.parentNode;

              elementSection.setAttribute("id", "class-to-parent-parent-element-" + classForParentParentElement);
              parentParentElementSection.className += " " + classForParentParentElement;
            }
        }) ();
        // END: Make elements more CSS friendly - Class to Parent-Parent - Squarespace





  } // if(!hasLoadedInControlPannel)
})()
