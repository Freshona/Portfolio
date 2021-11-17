//alert('Hello PalmTree')

/*let myName= "Dodo";
document.write(myName);

let myFavouriteFood="Falafel";
document.write(myFavouriteFood);*/

let pokemonList = [
        {name : 'bulbasaur', height : 0.7, type : ['grass', 'poison']},
        {name : 'squirtl', height: 0.5, type : "water"},
        {name : 'wartortle', height: 1.0, type : "water" },

]

// forEach function loop to print details of each one
pokemonList.forEach(function(pokemon) {
        document.write(pokemon.name+ " " + pokemon.height + " " + pokemon.type + '</p>');
});
        
// END forEach