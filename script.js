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




        // Make elements more CSS friendly - Class to Parent-SECTION - Squarespace
        // Make elements more CSS friendly - Class to Parent-SECTION - Squarespace
        // Make elements more CSS friendly - Class to Parent-SECTION - Squarespace
        // Make elements more CSS friendly - Class to Parent-SECTION - Squarespace
        // Make elements more CSS friendly - Class to Parent-SECTION - Squarespace
        // TODO
        (function() {
          var classToParentSectionElements    = document.getElementsByClassName("css-helpers-class-to-parent-section-element"),
            i = 0,
            classToParentSectionElementsLen = classToParentSectionElements.length;

            // loop through classToParentSectionElements
            for (i ; i < classToParentSectionElementsLen; i++){
              // debugger;
              var element                      = classToParentSectionElements[i],
                  classForParentParentElement  = element.getAttribute("data-class-to-parent-section-element"),
                  elementSection               = element.parentNode.parentNode,
                  parentParentElementSection   = (function () {
                      var parent             = element.parentNode,
                      isNotSectionNode       = parent.nodeName !== "SECTION",
                      isNotIndexSectionClass = !(parent.className.indexOf("index-section") > -1 && parent.id);
                      console.log(parent);
                      // debugger;
                      // TODO - Improve checking for while()
                      // var not updating during while
                      // maybe use something else - another approach?
                      var canLoopRun = isNotSectionNode;
                      if( canLoopRun ) {
                            canLoopRun = isNotIndexSectionClass;
                      }
                      while(canLoopRun) {
                        parent = parent.parentNode;
                        isNotSectionNode       = parent.nodeName !== "SECTION",
                        isNotIndexSectionClass = !(parent.className.indexOf("index-section") > -1 && parent.id);
                        canLoopRun = isNotSectionNode;
                        if( canLoopRun ) {
                          canLoopRun = isNotIndexSectionClass;
                        }
                      }
                      return parent;
                  })();

              elementSection.setAttribute("id", "class-to-parent-section-element-" + classForParentParentElement);
              parentParentElementSection.className += " " + classForParentParentElement;
            }
        }) ();
        // END: Make elements more CSS friendly - Class to Parent-SECTION - Squarespace





        // Make elements more CSS friendly - Class to <body> - Squarespace
        // Make elements more CSS friendly - Class to <body> - Squarespace
        // Make elements more CSS friendly - Class to <body> - Squarespace
        // Make elements more CSS friendly - Class to <body> - Squarespace
        // Make elements more CSS friendly - Class to <body> - Squarespace
        (function() {
          // HTML example: <div id="sqs-fs_add-page-classes" data-classes="about-page"></div>
          "use strict";
          var addPageClasses = document.querySelector("#sqs-fs_add-page-classes");
          if(addPageClasses) {
              var classesForBody    = addPageClasses.getAttribute("data-classes")
                                        .split(" "),
                  classesForBodyLen = classesForBody.length;
              for (var idx = 0; idx < classesForBodyLen; idx++) {
                document.body.className += (" " + classesForBody[idx]);
              }
          }
        })();
        // END: Make elements more CSS friendly - Class to <body> - Squarespace



  } // if(!hasLoadedInControlPannel)
})();
