import stations from "./stations.js"


const searchInput = document.querySelector('.search');
const searchOptions = document.querySelector('.options');


function getOptions(word, stations) {
    return stations.filter(s => {
        const regex = new RegExp(word, 'gi');
        return s.name.match(regex);
    })
}

function displayOptions() {
    // console.log('this.value >>', this.value);
    const options = getOptions(this.value, stations);

    const html = options
    .map(station => {
        return `<div class="product">
     
        <img src="./css/img/${station.img}" alt="${station.name}"/>
        <h3>${station.name}</h3>
     
        </div>`;
        document.body.insertAdjacentHTML('beforeend', html);
    
    })
 .slice(0, 50)
.join('');


searchOptions.innerHTML = this.value ? html: null;
    }

 searchInput.addEventListener('change', displayOptions);


