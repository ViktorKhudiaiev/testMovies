/**
 * Created by Виктор on 03.11.2015.
 */
var angularApp = angular.module("angularApp", ["ngTable"]);




angularApp.controller("MainController", function ($scope, $q, $http, MovieService, ListService, ngTableParams) {
    var dataForTable = [];
    $scope.listsForMovie = [];
    $scope.selectList = null;
    $scope.selectMovie = null;
    $scope.tableParams = new ngTableParams({
        page:1,
        count: 10
    },{
        getData: function ($defer) {
            $defer.resolve(dataForTable);
        },
        $scope: { $data: {} }
    });
    $scope.searchMovie = function (value) {
        MovieService.searchMovie(value).success(function (data) {
            dataForTable = data.results;
            $scope.tableParams.reload();
        });
    };
    ListService.getAllLists().success(function(data) {
        $scope.listsForMovie = data;
    });
    $scope.selectListFunc = function(list) {
        $scope.selectList = list;
    };

    $scope.saveMovie = function() {
        MovieService.saveMovie($scope.selectList.id, $scope.selectMovie.id, $scope.selectMovie.title,
            $scope.selectMovie.overview);
    };

    $scope.openModal = function(movie) {
        $scope.selectMovie = movie;
        var modalElem = $('#modalWindow').modal();
        modalElem.modal('show');
    }
    $('#selectList').dropdown();
});
angularApp.controller("ListController", function ($scope, $http, MovieService, ListService, ngTableParams) {
    var dataForTable = [];
    $scope.tableParams = new ngTableParams({
        page:1,
        count: 10
    },{
        getData: function ($defer) {
            $defer.resolve(dataForTable);
        },
        $scope: { $data: {} }
    });
    $scope.getData = function() {
        ListService.getAllLists().success(function (data) {
            dataForTable = data;
            $scope.tableParams.reload();
        });
    };
    $scope.getData();

    $scope.saveList = function(nameOfList) {
        ListService.saveList(nameOfList).success(function() {
            $scope.getData();
        });
    };

});

angularApp.controller("MovieController", function ($scope, $http, MovieService, ListService, ngTableParams) {
    var dataForTable = [];
    $scope.lists = [];
    $scope.tableParams = new ngTableParams({
        page:1,
        count: 10
    },{
        getData: function ($defer) {
            $defer.resolve(dataForTable);
        },
        $scope: { $data: {} }
    });

    ListService.getAllLists().success(function (data) {
        $scope.lists = data;
    });

    $scope.getData = function(list) {
        dataForTable = list.movie;
        $scope.tableParams.reload();
    };

    $scope.viewMovie = function(movie) {
      MovieService.goToMovie(movie.id);
    };

    $('#selectList').dropdown();
});