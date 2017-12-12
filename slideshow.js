var slideApp = angular.module("mycarousel",[]);

slideApp.controller("slides", function($scope) {

    getImages();
    
    $scope.images = '<?php echo $images; ?>';
    console.log($scope.images);
    
});

function getImages(){
    $.get("slide_show.php");
    return false;
}