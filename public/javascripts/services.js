/**
 * Created by ������ on 03.11.2015.
 */


angularApp.factory("MovieService", function($http) {
    var MovieService = {
        searchMovie: function (nameOfMovie) {
            return $http({
                url: 'http://api.themoviedb.org/3/search/movie',
                method: 'GET',
                header:{'Accept':'application/json'},
                params:{'api_key':'7a4de0fe5da237bdb52d1168dae8cd14', 'query': nameOfMovie}
            })
        },
        saveMovie : function (listId, movieId, title, overview) {
            return $http({
                url: '/saveMovie',
                method: 'POST',
                params:{listId : listId, movieId : movieId, title : title, overview : overview}
            })
        }
    };
    return MovieService;
});

angularApp.factory("ListService", function($http) {
   var ListService = {
       getAllLists : function () {
           return $http({
               url: '/getAllLists',
               method: 'GET'
           })
       },
       saveList : function(name) {
           return $http({
               url: '/saveList',
               method: 'POST',
               params: {name: name}
           })
       }
   };
    return ListService;
});