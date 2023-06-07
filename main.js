const residentsBtn = document.querySelector('#getResidents')
const mainContainer = document.querySelector('main')
const residentsContainer = document.querySelector('#residentsContainer')

const btnEvent = (evt) => {
    axios.get('https://swapi.dev/api/planets?search=Alderaan')
        .then(response => {

            let planet = response.data.results
            let people = planet[0].residents

            // You wanna SET residentsContainer to an empty string to prevent each name appending the previous name
            // If you don't do this, your second name entry will come out to JohnDoe,Jeremy instead of Jeremy
            residentsContainer.innerHTML = ''

            for (let i = 0; i < people.length; i++){
                axios.get(people[i])
                    .then(response => {

                        // You want to use this instead of residentsContainer because you want to create a NEW element, not set the value of an existing one to a new name
                        let header = document.createElement('h2')

                        header.textContent = response.data.name

                        residentsContainer.appendChild(header)

                    })
                    .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
}

residentsBtn.addEventListener('click', btnEvent)