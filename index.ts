class Movie {
    title : string;
    studio : string;
    rating : string;
    constructor(t :string, s :string, r :string = "PG"){
        this.title = t;
        this.studio = s;
        this.rating = r;
    }
    getPG(input){
        let newList = [];
        let check;
        input.forEach(i => {
            check=i.rating;
            if(check.includes("PG"))
            newList.push(i);
        });
        console.log(newList);
    }
}
var movieArray = [
    new Movie('Avengers','Marvel','PG-15'),
    new Movie('Infinity War','Marvel','PG-13'),
    new Movie('Carnival','Zuke','PG-15'),
    new Movie('Assasin"s Creed','Marvel','R'),
    new Movie('Pioneer','Djnaho'),
]
let film = new Movie('Casino Royale','Eon Productions','PG­13');
film.getPG(movieArray);