let pokemonRepository = (function () {
  let pokemonList = [];

  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  // adds new data to list
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  // displays array
  function getAll() {
    return pokemonList;
  }
  
  //DOM Manipulation
  function addListItem(pokemon) {
    let listPokemon = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    listItem.classList.add("list-unstyled");
    //Button
    let buttonOne = document.createElement("button");
    buttonOne.innerText = pokemon.name;
    buttonOne.classList.add("button-style");
    listItem.appendChild(buttonOne); /*fixes button to list*/
    listPokemon.appendChild(listItem);
    //Button Event
    buttonOne.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        //adding details to items
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        items.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });

    //console.log(pokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  // data loaded
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
