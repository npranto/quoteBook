angular.module('quoteBook')
	.controller('mainCtrl', function ($scope, dataService) {

		$scope.test = "This is a test!";

		$scope.quotes = dataService.getData();

		$scope.deleteQuote = function(index){
			$scope.quotes = dataService.removeData(index);
		}

		$scope.addQuote = function(){
			var newQuote = {
				text: $scope.newQuoteText,
				author: $scope.newQuoteAuthor
			}
			if (dataService.addData(newQuote)) {
				$scope.newQuoteText = "";
				$scope.newQuoteAuthor = "";
			}
			$scope.quotes = dataService.getData();
		}

// end ctrl
	});

