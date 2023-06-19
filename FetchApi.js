// var countryInp = document.getElementById("in");
// var countryBorders = [];
// function showCountryInfo() {
//     let countryName;
//     countryName = countryInp.value;
//     if (firstflow) {
//         countryName = 'india';
//         firstflow = false;
//     }
//     let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
//     fetch(finalURL)
//         .then((response) => response.json())
//         .then((data) => {
//             countryInp = data[0];
//             console.log('countryInfo:');
            
//             document.getElementById('main-country').innerHTML =
//                 `<div class="cards1">
//                 <div class="image ">
//                     <img src="${countryInp.flags.png} " alt="">
//                 </div>
//                 <div class="title">
//                     <h1>
//                         ${countryInp.name.common}
//                     </h1>
//                 </div>
//                 <div class="des">
//                     <p><b>${countryInp.capital}</b></p>
//                     <p class='p-info'>${countryInp.flags.alt}</p>
//                     <button><a target="_blank" href="${countryInp.maps.googleMaps}">View Map</a></button>
//                 </div>
//             </div>`;

//             countryBorders = [];
//             for (i = 0; i < countryInp.borders.length; i++) {
//                 fetch('https://restcountries.com/v3.1/alpha/' + countryInp.borders[i])
//                     .then((response) => response.json())
//                     .then((data) => {
//                         countryBorders.push(data[0])
//                         console.log('countryBorder');
//                         console.log(countryBorders);
//                         showBorders();
//                     });
//             }
//         });
// };





// function showBorders() {
//     let borderCountainer = document.getElementById('borders');
//     borderCountainer.innerHTML = '';
//     countryBorders.map(border => {
//         let ele = document.createElement('div');
//         ele.classList.add('cards');
//         ele.innerHTML = `<div class="image ">
//                     <img src="${border.flags.png} " alt="">
//                 </div>
//                 <div class="title">
//                     <h1>
//                     ${border.name.common}
//                     </h1>
//                 </div>
//                 <div class="des">
//                     <p><b>${border.capital}</b></p>
//                     <p class='p-info'>${border.flags.alt}</p>
//                     <button><a target="_blank" href="${border.maps.googleMaps}">View Map</a></button>
//                 </div>`;
//         borderCountainer.appendChild(ele);
//     })
// }
// var countryInp = document.getElementById("in");
// var countryBorders = [];

// function showCountryInfo() {
//     let countryName;
//     countryName = countryInp.value;
//     if (firstflow) {
//         countryName = 'india';
//         firstflow = false;
//     }
//     let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
//     fetch(finalURL)
//         .then((response) => response.json())
//         .then((data) => {
//             countryInp = data[0];
//             console.log('countryInfo:');

//             document.getElementById('main-country').innerHTML =
//                 `<div class="cards1">
//                 <div class="image ">
//                     <img src="${countryInp.flags?.png || ''}" alt="">
//                 </div>
//                 <div class="title">
//                     <h1>
//                         ${countryInp.name?.common || ''}
//                     </h1>
//                 </div>
//                 <div class="des">
//                     <p><b>${countryInp.capital || ''}</b></p>
//                     <p class='p-info'>${countryInp.flags?.alt || ''}</p>
//                     <button><a target="_blank" href="${countryInp.maps?.googleMaps || ''}">View Map</a></button>
//                 </div>
//             </div>`;

//             countryBorders = [];
//             for (let i = 0; i < countryInp.borders.length; i++) {
//                 fetch('https://restcountries.com/v3.1/alpha/' + countryInp.borders[i])
//                     .then((response) => response.json())
//                     .then((data) => {
//                         countryBorders.push(data[0]);
//                         console.log('countryBorder');
//                         console.log(countryBorders);
//                         showBorders();
//                     });
//             }
//         });
// }

// function showBorders() {
//     let borderCountainer = document.getElementById('borders');
//     borderCountainer.innerHTML = '';
//     countryBorders.map((border) => {
//         let ele = document.createElement('div');
//         ele.classList.add('cards');
//         ele.innerHTML = `<div class="image ">
//                     <img src="${border.flags?.png || ''}" alt="">
//                 </div>
//                 <div class="title">
//                     <h1>
//                     ${border.name?.common || ''}
//                     </h1>
//                 </div>
//                 <div class="des">
//                     <p><b>${border.capital || ''}</b></p>
//                     <p class='p-info'>${border.flags?.alt || ''}</p>
//                     <button><a target="_blank" href="${border.maps?.googleMaps || ''}">View Map</a></button>
//                 </div>`;
//         borderCountainer.appendChild(ele);
//     });
// }


var countryInp = document.getElementById("in");
console.log(countryInp);
var countryBorders = [];

function showCountryInfo() {
    let countryName;
    countryName = countryInp.value;
    console.log(countryName);
    if (firstflow) {
        countryName = 'india';
        firstflow = false;
    }
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            countryInp = data[0];
            console.log('countryInfo:');

            document.getElementById('main-country').innerHTML =
                `<div class="cards1">
                <div class="image ">
                    <img src="${countryInp.flags?.png || ''}" alt="">
                </div>
                <div class="title">
                    <h1>
                        ${countryInp.name?.common || ''}
                    </h1>
                </div>
                <div class="des">
                    <p><b>${countryInp.capital || ''}</b></p>
                    <p class='p-info'>${countryInp.flags?.alt || ''}</p>
                    <button><a target="_blank" href="${countryInp.maps?.googleMaps || ''}">View Map</a></button>
                </div>
            </div>`;

            countryBorders = [];
            for (let i = 0; i < countryInp.borders.length; i++) {
                fetch('https://restcountries.com/v3.1/alpha/' + countryInp.borders[i])
                    .then((response) => response.json())
                    .then((data) => {
                        countryBorders.push(data[0]);
                        console.log('countryBorder');
                        console.log(countryBorders);
                        showBorders();
                    });
            }
        });
}

function showBorders() {
    let borderCountainer = document.getElementById('borders');
    borderCountainer.innerHTML = '';
    countryBorders.map((border) => {
        let ele = document.createElement('div');
        ele.classList.add('cards');
        ele.innerHTML = `<div class="image ">
                    <img src="${border.flags?.png || ''}" alt="">
                </div>
                <div class="title">
                    <h1>
                    ${border.name?.common || ''}
                    </h1>
                </div>
                <div class="des">
                    <p><b>${border.capital || ''}</b></p>
                    <p class='p-info'>${border.flags?.alt || ''}</p>
                    <button><a target="_blank" href="${border.maps?.googleMaps || ''}">View Map</a></button>
                </div>`;
        borderCountainer.appendChild(ele);
    });
}
