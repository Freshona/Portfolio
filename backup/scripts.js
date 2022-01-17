//alert('Hello PalmTree')
//let pokemonRepository = (function () {
  //let pokemonList = [{ name: 'weanut'}]; // empty array

/*let myName= "Dodo";
document.write(myName);
  //return {
    //add: function(pokemon) {
      //pokemonList.push(pokemon);
    //},
    //getAll: function() {
    //  return pokemonList;
    //}
  //};
//})();

let myFavouriteFood="Falafel";
document.write(myFavouriteFood);*/
//console.log(pokemonRepository.getAll());
//pokemonRepository.add({ type: 'poopsa'});
//console.log(pokemonRepository.getAll());

let pokemonList = [
        {name : 'bulbasaur', height : 0.7, type : ['grass', 'poison']},
        {name : 'squirtl', height: 0.5, type : "water"},
        {name : 'wartortle', height: 1.0, type : "water" },
let pokemonRepository = (function() {
        let pokemonList = [
                {name : 'bulbasaur', height : 0.7, type : ['grass', 'poison']},
                {name : 'squirtl', height: 0.5, type : "water"},
                {name : 'wartortle', height: 1.0, type : "water" },
                ];
    // adds new data to list
        function add(newPokemon) {
                pokemonList.push(newPokemon);
        };
        // displays array
        function getAll() {
                return pokemonList;
        };

    return {
            add: add,
            getAll: getAll
    };
})();

]
//console.log(pokemonRepository.getAll());
//pokemonRepository.add({ name:'woopsa'});
//console.log(pokemonRepository.getAll());

// forEach function loop to print details of each one
pokemonList.forEach(function(pokemon) {
        document.write(pokemon.name+ " " + pokemon.height + " " + pokemon.type + '</p>');
});

// END forEach
// forEach loop that gets data from the pokemon Array and displays it
pokemonRepository.getAll().forEach(function(newPokemon) {
        let pokemonName = newPokemon.name
        let pokemonHeight = newPokemon.height
        let pokemonType = newPokemon.type
        // write to document
        document.write(pokemonName + "  - Height: " + pokemonHeight + " - Powers:  " + pokemonType + '</p>');
        }
        ); 