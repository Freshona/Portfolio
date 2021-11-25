
let pokemonRepository = (function() {
        let pokemonList = [
                {name : 'Bulbasaur', height : 0.7, type : ['grass', 'poison']},
                {name : 'Squirtl', height: 0.5, type : "water"},
                {name : 'Wartortle', height: 1.0, type : "water" },
                {name : 'Venusaur', height: 2,  type : ['grass,', 'poison']},
                {name : 'Butterfree', height: 1.1, type : ['bug', 'flying']},
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

// forEach loop that gets data from the pokemon Array and displays it
pokemonRepository.getAll().forEach(function(newPokemon) {
        let pokemonName = newPokemon.name
        let pokemonHeight = newPokemon.height
        let pokemonType = newPokemon.type

        //creates list and buttons within container div 
        let main = document.querySelector('main');
        main.classList.add('container');
        let listPokemon = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li')
        listItem.classList.add('list-unstyled'); //styling
        let buttonOne = document.createElement('button');
                buttonOne.innerText = pokemonName;
                 buttonOne.classList.add('selected'); //styling

                 //appends button to list and list to unordered list
        listItem.appendChild(buttonOne);
        listPokemon.appendChild(listItem);
        }
 ); 