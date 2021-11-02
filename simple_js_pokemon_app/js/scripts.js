//alert('Hello PalmTree')

/*let myName= "Dodo";
document.write(myName);

let myFavouriteFood="Falafel";
document.write(myFavouriteFood);*/

let pokemonList = [
        {name : 'bulbasaur', height : 0.7, types : ['grass ', 'poison']},
        {name : 'squirtl', height: 0.5, types : "water"},
        {name : 'wartortle', height: 1.0, type : "water" },

];

for (let i = 0; i < pokemonList.length; i++) {
       if (pokemonList[i].height === 1){
               document.write('<p>' + pokemonList[i].name + " is one huge pokemon!" + '</p>');
       } else {
        document.write('<p>' + pokemonList[i].name + '</p>');
        document.write('<p>' + pokemonList[i].height + '</p>');
       }
}