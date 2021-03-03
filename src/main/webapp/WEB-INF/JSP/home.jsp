<html ng-app="myApp">
  <head>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular-animate.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore.js"></script>
    <script src="../js/app.js"></script>
    <link href="../styles/styles.css" rel="stylesheet" type="text/css" />
  </head>
  
  <body class="container" ng-controller="myController">
    <h1>Welcome to MyRestuarant</h1>
    <br/>
    <br/>
     <button class="btn-danger" ng-click="getMenu();">Click to Start Ordering</button>
    <div class="row">
      <table class="table col-md-9 col-md-offset-3">
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Price</th>
          <th class="qty">Qty</th>
          <th>Total</th>
        </tr>
        <tr class="animate-repeat" ng-repeat="item in menu ">
          <td>{{ item.itemId }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.price | currency }}</td>
          <td><input type="number" ng-model="item.qty" class="qty"></td>
          <td>{{ item.qty * item.price | currency }}</td>
          <td>
            <button class="btn-primary" ng-click="addItem(item)">Add to Cart</button></td>
        </tr>
      </table>
    </div>
    <div class="row">
      <h2>Your Order Details:</h2>
      <ul>
        <li class="animate-repeat" ng-repeat="item in cart">
          <span>{{ item.qty + ' x ' + item.title + ' = ' + (getCost(item) | currency) }}</span>
          </br>
          </br>
        </li>
      </ul>
      <h3>Total: {{ getTotal() | currency }}</h3>
      </br>
          </br>
      <h5>Please Enter below details and click on Place order</h5>
      <form class="col-md-9 col-md-offset-3">
			<label for="name">Name:</label> 
			<input type="text" id="name" ng-model="name"><br> <br> 
			<label for="address">Address:</label>
			<input type="text" id="address" ng-model="address"><br> <br>
			<label for="card">CardDetails:</label> 
			<input type="text" id="card" ng-model="card"><br> <br> 
		</form>
      <button class="btn-danger" ng-click="clearCart();">Clear Cart</button>
      <button class="btn-danger" ng-click="placeOrder();">Click to Place Order</button>
		<h1 ng-show="showConfirm">Your Order Confirmation Number is : {{orderConfirmNum}}</h1>
	</div>
  </body>
</html>