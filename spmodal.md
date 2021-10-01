## HTML
# Service Portal Basic Modal
This represents TWO different syntax macros.  Once for the html field and one for the client script field.  BOTH macros must be used in their respective fields for functional code.


<!-- Modal Content -->
<script type="text/ng-template" id="myModal.html">
  <div class="modal-header">
    <h3 class="modal-title">Modal Header</h3>
  </div>
  <div class="modal-body">
    Modal Body
  </div>
  <div class="modal-footer">
    <button class="btn btn-primary" type="button" ng-click="closeModal()">OK</button>
  </div>
</script>

<!-- Non-Modal Content -->
<button type="button" class="btn btn-primary btn-lg" ng-click="openModal()">Open Modal</button>


## Client Script

//Set modal options
var modalOptions = {
  templateUrl:'myModal.html', //Template URL, as indicated in HTML <script> tag for modal content
  scope:$scope //For simplicity, share parent scope - Use separate scope/controller for complex cases
};

//Open modal window & instantiate modal object
$scope.openModal = function(){
  $scope.modalInstance = $uibModal.open(modalOptions);
};

//Close modal window
$scope.closeModal = function(){
  $scope.modalInstance.close();
};
