/*Array de Pokemones*/
const pokemonList = [
    {
        name: "Charizard",
        sprite: "https://play.pokemonshowdown.com/sprites/gen4/charizard.png",
        gif: "https://play.pokemonshowdown.com/sprites/gen5ani/charizard.gif",
        shiny: "https://play.pokemonshowdown.com/sprites/gen5ani-shiny/charizard.gif"
    },
    {
        name: "Garchomp",
        sprite: "https://play.pokemonshowdown.com/sprites/gen4/garchomp.png",
        gif: "https://play.pokemonshowdown.com/sprites/gen5ani/garchomp.gif",
        shiny: "https://play.pokemonshowdown.com/sprites/gen5ani-shiny/garchomp.gif"

    },
    {
        name: "Pikachu",
        sprite: "https://play.pokemonshowdown.com/sprites/gen4/pikachu.png",
        gif: "https://play.pokemonshowdown.com/sprites/gen5ani/pikachu.gif",
        shiny: "https://play.pokemonshowdown.com/sprites/gen5ani-shiny/pikachu.gif"
    },
    {
        name: "Milotic",
        sprite: "https://images.wikidexcdn.net/mwuploads/wikidex/b/b1/latest/20230302020429/Milotic.png",
        gif: "https://images.wikidexcdn.net/mwuploads/wikidex/a/ad/latest/20140111173350/Milotic_XY.gif",
        shiny: "https://images.wikidexcdn.net/mwuploads/wikidex/d/d8/latest/20110123182129/Milotic_NB_variocolor.gif"
    },
    {
        name: "Lucario",
        sprite: "https://images.wikidexcdn.net/mwuploads/wikidex/d/d0/latest/20150621180604/Lucario.png",
        gif: "https://images.wikidexcdn.net/mwuploads/wikidex/2/24/latest/20140814023939/Lucario_XY.gif",
        shiny: "https://images.wikidexcdn.net/mwuploads/wikidex/3/30/latest/20140811233005/Lucario_XY_variocolor.gif"
    },
    {
        name: "Zapdos",
        sprite: "https://images.wikidexcdn.net/mwuploads/wikidex/d/d8/latest/20160316194916/Zapdos.png",
        gif: "https://images.wikidexcdn.net/mwuploads/wikidex/0/0e/latest/20140111162718/Zapdos_XY.gif",
        shiny: "https://images.wikidexcdn.net/mwuploads/wikidex/e/eb/latest/20140505191200/Zapdos_XY_variocolor.gif"
    }

];

function getRandomPokemon() {
    const index = Math.floor(Math.random() * pokemonList.length);
    return pokemonList[index];
}

function isShiny() {
    return true;
}

let leftPokemon = getRandomPokemon();
let rightPokemon = getRandomPokemon();

// Asegurar que no sean el mismo
while (rightPokemon.name === leftPokemon.name) {
    rightPokemon = getRandomPokemon();
}

const button = document.querySelector('.poke-button');
const imgLeft = document.querySelector('.poke-img.left');
const imgRight = document.querySelector('.poke-img.right');
const battlePoster = document.getElementById('battle-poster');

function generateBattlePoster() {
    battlePoster.style.display = "flex";
    battlePoster.innerHTML = "";

    let poke1 = leftPokemon;
    let poke2 = rightPokemon;

    while (poke1.name === poke2.name) {
        poke2 = getRandomPokemon();
    }

    const vsImg = document.createElement("img");
    vsImg.src = "https://static.vecteezy.com/system/resources/thumbnails/028/824/564/small_2x/vs-letters-versus-png.png";
    vsImg.alt = "VS";
    vsImg.classList.add("img-vs");

    // Función auxiliar para crear imagen y shiny efecto
    function createPokeImg(pokemon) {
        const container = document.createElement("div");
        container.style.position = "relative";
        container.style.display = "flex";
        container.style.justifyContent = "center";

        const img = document.createElement("img");

        const shinySelected = isShiny() && pokemon.shiny;

        img.src = shinySelected ? pokemon.shiny : pokemon.gif;
        img.alt = pokemon.name + (shinySelected ? " (Shiny)" : "");
        container.appendChild(img);

        if (shinySelected) {
            const shinyLabel = document.createElement("div");
            shinyLabel.textContent = "✨ ¡SHINY! ✨";
            shinyLabel.style.position = "absolute";
            shinyLabel.style.bottom = "-20px";
            shinyLabel.style.background = "gold";
            shinyLabel.style.color = "black";
            shinyLabel.style.fontWeight = "bold";
            shinyLabel.style.padding = "4px 8px";
            shinyLabel.style.borderRadius = "8px";
            shinyLabel.style.boxShadow = "0 0 10px yellow";
            shinyLabel.style.animation = "flash 1s infinite alternate";
            container.style.paddingBottom = "30px";

            container.appendChild(shinyLabel);
        }

        return container;
    }

    const container1 = createPokeImg(poke1);
    const container2 = createPokeImg(poke2);

    battlePoster.appendChild(container1);
    battlePoster.appendChild(vsImg);
    battlePoster.appendChild(container2);
    battlePoster.style.gap = "0";
}

// Establecer imágenes iniciales al cargar
imgLeft.src = "https://play.pokemonshowdown.com/sprites/trainers/lillie.png";
imgRight.src = "https://play.pokemonshowdown.com/sprites/trainers/blue-masters.png";

button.addEventListener("mouseenter", () => {
    imgLeft.src = leftPokemon.sprite;
    imgRight.src = rightPokemon.sprite;
});

button.addEventListener("mouseleave", () => {
    imgLeft.src = "https://play.pokemonshowdown.com/sprites/trainers/lillie.png";
    imgRight.src = "https://play.pokemonshowdown.com/sprites/trainers/blue-masters.png";
});

/*Al hacer clic*/
button.addEventListener("click", () => {
    generateBattlePoster();

    const vsImg = document.createElement("img");
    vsImg.src = "https://static.vecteezy.com/system/resources/thumbnails/028/824/564/small_2x/vs-letters-versus-png.png";
    vsImg.alt = "VS";
    vsImg.classList.add("img-vs");

    battlePoster.style.gap = "0";
});










