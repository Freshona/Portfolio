//alert('Hello PalmTree')

/*let myName= "Dodo";
document.write(myName);

let myFavouriteFood="Falafel";
document.write(myFavouriteFood);*/

let pokemonList = [
        {name : 'bulbasaur', height : 7, types : ['grass ', 'poison']},
        {name : 'squirtl', height: 5, types : "water"},
        {name : 'wartortle', height: 10, type : "water" },

];

for (let i = 0; i < pokemonList.length; i++) {
      /* document.write(pokemonList[i]); this was my original code. obviously wrong*/
        document.write("<p>" + pokemonList[i].name + "</p>");
        // printing pokemonList[i]’s other details
        console.log(pokemonList[i].name);
        console.log(pokemonList[i].height);
}