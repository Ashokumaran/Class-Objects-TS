var Movie = /** @class */ (function () {
    function Movie(t, s, r) {
        if (r === void 0) { r = "PG"; }
        this.title = t;
        this.studio = s;
        this.rating = r;
    }
    Movie.prototype.getPG = function (input) {
        var newList = [];
        var check;
        input.forEach(function (i) {
            check = i.rating;
            if (check.includes("PG"))
                newList.push(i);
        });
        console.log(newList);
    };
    return Movie;
}());
var movieArray = [
    new Movie('Avengers', 'Marvel', 'PG-15'),
    new Movie('Infinity War', 'Marvel', 'PG-13'),
    new Movie('Carnival', 'Zuke', 'PG-15'),
    new Movie('Assasin"s Creed', 'Marvel', 'R'),
    new Movie('Pioneer', 'Djnaho'),
];
var film = new Movie('Casino Royale', 'Eon Productions', 'PG­13');
film.getPG(movieArray);
