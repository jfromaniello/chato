module.exports = function(app) {
    app.get('/', function(request, response, error) {
        response.render("index", {
            layout: false,
            url: request.headers.host
        });
    });
};