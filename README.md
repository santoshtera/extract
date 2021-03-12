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







 <script type="text/ng-template" id="list.html">
    <ul dnd-list="list">
        <li ng-repeat="item in list" ng-click = "getValuesFromTable(item)"
            dnd-draggable="item"
            dnd-effect-allowed="move"
            dnd-moved="list.splice($index, 1)"
            dnd-selected="models.selected = item"
            ng-class="{selected: models.selected === item}"
            ng-include="item.type + '.html'">
        </li>
    </ul>
</script>

<script type="text/ng-template" id="item.html">
    <div class="item">{{item.name}}</div>
	<div class="item">{{item.id}}</div>
</script>

<!-- Just an image -->
<nav class="navbar navbar-light bg-light" style="background: #0085cf;height:90px">
  
    <h1 style="color: #fff">EDH</h1>
 
</nav>
<div class="" ng-contoller="NestedListsDemoController">
    <div class="row">
        <div class="col-md-3">
             <div class="toolbox box box-grey box-padding">
        <h3>Select Steps</h3>
        <ul>
           <li ng-repeat="item in models.templates"
                dnd-draggable="item"
                dnd-effect-allowed="copy"
                dnd-copied="item.id = item.id + 1"
                >
                <button type="button" class="btn btn-default" disabled="disabled">{{item.name}}</button>
            </li>
        </ul>
        <div class="trashcan box box-grey box-padding">
	    <h3>Please Drop step here to remove</h3>
        <ul dnd-list="[]">
            <li><img src="nested/trashcan.jpg"></li>
        </ul>
    </div>
    </div>
        </div>
         <div ng-repeat="(zone, list) in models.dropzones" class="col-md-4">
            <div class="dropzone box box-yellow">
            	<h3>Steps Selected</h3>
                <div ng-include="'list.html'"></div>
            </div>
        </div>
        <div class="col-md-4">

  		<form ng-if="models.selected" class="box box-grey box-padding" ng-submit="saveForLater(formItem)">
        	<h3>{{models.selected.name}} found Item {{foundItem}}</h3>
       		
       		<div class="form-group row">
    			<label for="extractName" class="col-sm-6 col-form-label" style="margin-top: 10px">Id</label>
    			<div class="col-sm-6">
      			<input type="text"  class="form-control" ng-model="formItem.id">
    	    </div>
  			</div>
  			<div class="form-group row">
    			<label for="extractName" class="col-sm-6 col-form-label" style="margin-top: 10px">Extract Name</label>
    			<div class="col-sm-6">
      			<input type="text"  class="form-control" ng-model="formItem.extractName">
    	    </div>
  			</div>
  			<div class="form-group row">
    			<label for="spName" class="col-sm-6 col-form-label" style="margin-top: 10px">Store Procedure</label>
    			<div class="col-sm-6">
      			<input type="text"  class="form-control" ng-model="formItem.spName">
    	    </div>
  			</div>
  			<div class="form-group row">
    			<label for="inputData" class="col-sm-6 col-form-label" style="margin-top: 10px">Input Data</label>
    			<div class="col-sm-6">
      			<input type="text"  class="form-control" ng-model="formItem.inputData" >
    	    </div>
  			</div>
  			
  			<div class="form-group row">
    			<label for="outputData" class="col-sm-6 col-form-label" style="margin-top: 10px">Output Data</label>
    			<div class="col-sm-6">
      			<input type="text"  class="form-control" ng-model="formItem.outputData">
    	    </div>
  			</div>
  			
  			<div class="form-group row">
    			<label for="stepType" class="col-sm-6 col-form-label" style="margin-top: 10px">Step Type</label>
    			<div class="col-sm-6">
      			<input type="text"  class="form-control" ng-model="formItem.stepType">
    	    </div>
  			</div>
  			
       		<div class="form-group row">
    			<label for="stepName" class="col-sm-6 col-form-label" style="margin-top: 10px">Step Name</label>
    			<div class="col-sm-6">
      			<input type="text"  class="form-control" ng-model="formItem.stepName = models.selected.name" disabled>
    	    </div>
  			</div>
  			
  			<div class="form-group row">
    			<label for="stepName" class="col-sm-6 col-form-label" style="margin-top: 10px">Step Order</label>
    			<div class="col-sm-6">
      			<input type="number"  class="form-control" ng-model="formItem.stepOrder" >
    	    </div>
  			</div>
            <input ng-show="false" type="text" ng-model="formItem.id = models.selected.id" class="form-control" style="margin-top: 5px" />
        
       	    <strong>Query </strong>
            <textarea type="text" ng-model="formItem.query"  class="form-control" style="margin-top: 5px"></textarea>

        	<strong>Query Parameters </strong> 
        	<textarea type="text" ng-model="formItem.parameters" class="form-control" style="margin-top: 5px"></textarea>

        	<strong>Query Prefix </strong> 
       		<textarea type="text" ng-model="formItem.prefix" class="form-control" style="margin-top: 5px"></textarea>
			<strong>Query Suffix </strong> 
        	<input type="text" ng-model="formItem.suffix" class="form-control" style="margin-top: 5px" />
			<strong>Query Metadata</strong> 
        	<textarea type="text" ng-model="formItem.metadata" class="form-control" style="margin-top: 5px"></textarea>
        
       
        
        <button type="submit" class="btn btn-primary" style="margin-top: 5px">Save for Later</button>        
   	 	<button class="btn btn-info" ng-click="open()" style="margin: 15px;">Open Modal</button>
   	 </form>
	</div>
 </div>
</div>
<div class="row">
	<div class="col-md-12">
		<div class="table-responsive">
  			<table class="table">
  <thead>
    <tr>
    <th scope="col">Id ##</th>
      <th scope="col">Extract Name</th>
      <th scope="col">Store Procedure</th>
      <th scope="col">Input Data</th>
      <th scope="col">Output Data</th>
      <th scope="col">Step Type</th>
      <th scope="col">Step Name</th>
      <th scope="col">Step Order</th>
      <th scope="col">Query Parameters</th>
      <th scope="col">Query Prefix</th>
      <th scope="col">Query Suffix</th>
      <th scope="col">Query Metadata</th>
    </tr>
  </thead>
  
  <tbody ng-repeat=" item in tableItem">
    <tr>
    <td>{{item.id}}</td>
      <td>{{item.extractName}}</td>
      <td>{{item.spName}}</td>
      <td>{{item.inputData}}</td>
      <td>{{item.outData}}</td>
      <td>{{item.stepType}}</td>
      <td>{{item.stepName}}</td>
      <td>{{item.stepOrder}}</td>
      <td>{{item.parameters}}</td>
      <td>{{item.prefix}}</td>
      <td>{{item.suffix}}</td>
      <td>{{item.metadata}}</td>
    </tr>
  
  </tbody>
  
  <!--  <tbody ng-repeat="(k,v) in models.dropzones">
    <tr ng-repeat = "item in v">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.parameters}}</td>
      <td>{{item.parameters}}</td>
      
      
    </tr> 
  
  </tbody> -->
</table>
</div>
	
	</div>
</div>
<div class="row">
	<div class="col-md-4 col-md-offset-md-8">
		<button type="submit" class="btn btn-primary" ng-click="submit();"> Submit </button>
	</div>
</div>

	
