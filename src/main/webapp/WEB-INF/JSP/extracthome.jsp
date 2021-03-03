<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Extract Web</title>

    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min.js"></script>
    <script src="../framework/vendor/angular-drag-and-drop-lists.js"></script>

    <script src="../framework/vendor/prism.js"></script>
    <script src="../framework/demo-framework.js"></script> 
    <script src="../framework/view-source.js"></script> 
    <script src="../nested/nested.js"></script>
    
    
    <!-- Stuff that is only required in this demo (no need to copy) -->
    <link rel="stylesheet" href="../framework/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="../framework/vendor/bootstrap-theme.min.css">
    <link rel="stylesheet" href="../framework/vendor/prism.css"> 
    <link rel="stylesheet" href="../framework/demo-framework.css">
   
    <link rel="stylesheet" type="text/css" href="../nested/nested.css" />

</head>
<body ng-app="demo">
    <div class="container">
        <div ng-view></div>
    </div>

</body>
