
let pokemonRepository = (function() {
        let pokemonList = [
                {name : 'Butterfree', height: 1.1, type : ['bug', 'flying']},
                {name : 'Bulbasaur', height : 0.7, type : ['grass', 'poison']},
                {name : 'Wartortle', height: 1.0, type : "water" },
                {name : 'Venusaur', height: 2,  type : ['grass,', 'poison']},
                {name : 'Squirtl', height: 0.5, type : "water" },
        ];
    // adds new data to list
        function add(newPokemon) {
                pokemonList.push(newPokemon);
        };
        // displays array
        function getAll() {
                return pokemonList;
        };

        function addListItem(pokemon) {
                let listPokemon = document.querySelector('.pokemon-list');
                let listItem = document.createElement('li');
                listItem.classList.add('list-unstyled');
                //Button
                let buttonOne = document.createElement('button');
                  buttonOne.innerText = pokemon.name;
                  buttonOne.classList.add('button-style');
                listItem.appendChild(buttonOne);/*fixes button to list*/ 
                listPokemon.appendChild(listItem);
                //Button Event
                buttonOne.addEventListener('click', function () { 
                        showDetails(pokemon);
                });
              };
          

              function showDetails (pokemon) {
                      console.log(pokemon);
              }

              return {
                      add: add,
                      getAll: getAll,
                      addListItem: addListItem
              };   
          })();
          
          pokemonRepository.getAll().forEach(function (pokemon){
          pokemonRepository.addListItem(pokemon);
          });


     
     