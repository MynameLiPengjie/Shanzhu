/**
 * Created by 杨靖 on 2017/7/18.
 */
(function(win,doc){
    //浏览器缩放时
    win.onresize=function(){
        change();
    };
    change();
    function change(){
        var oFs=doc.documentElement.clientWidth/320*20;

        //设置根目录字体大小
        doc.documentElement.style.fontSize=oFs+'px';
    }
})(window,document);



var app = angular.module('app',[]);
app.controller('myCtrl',function ($scope, $http) {
        $http.get('json/consume.json').success(function (data) {
            $scope.users = data.consomes;
            console.log($scope.users)

    });
   $scope.check = function () {
       $(".con").slideToggle();
   }
});