// console.log('%c HI', 'color: firebrick')

const loadDogs_URL = 'https://dog.ceo/api/breeds/image/random/4'

//first fetch and load the dog images to the page//

const loadDogs = () => {
    fetch(loadDogs_URL)
    .then((response) => response.json())
    .then((dogs) => {
        // displayDogs(dogs)
        console.log(dogs)
    })
    
}

function displayDogs(dogs) {
    dogs.forEach(dogs)
}


// const dogContainer = document.getElementById('dog-image-container')
// dogContainer.append(dogs)





//then load the dog images to the page//

const init = (dogs) => {
    loadDogs()
    displayDogs(dogs)
}

init()