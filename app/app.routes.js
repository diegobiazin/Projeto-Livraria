baseApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "livroCtrl",
            templateUrl: "app/components/livro/livroView.html"
        })

    .when("/livro", {
        controller: "livroCtrl",
        templateUrl: "app/components/livro/livroView.html"
    })
});