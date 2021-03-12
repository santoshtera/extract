# UI 

## STEPS
* 1. Copy "main/resources/static/framework" & "main/resources/static/nested" folder to your project.
* 2. Copy "extracthome.jsp" to your jsp folder and change the name in Controller.


##Day 2 ---

1. Update -- nested.js and nest.html in /static/nested folder.  Take update of these two files.
2. Done only to add rows to table, we will look into trash thing tomorrow. 


## Day 3 --
1. include these lines in home.jsp -->  
<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0underscore.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.js"></script>
  2. update nest.hmtl, next.js

 ## Day 4 --
 1. Include above two js files in home.jsp
 2. Take update if nested.js
 3. include "Found Item {{foundItem}}" some where in nested.html to see the data.
 
 ## Day 5 -- 
 1. Update index.html with <script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.12.1.js"></script>
 2. Take update of nested.js --> look for update in $scope.submit(), added $scope.open() and added new controller at bottom.
 3. Take update if nested.html only change at --> <script type="text/ng-template" id="modalTemplate.html">  