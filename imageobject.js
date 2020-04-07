let objectArray = [];
// console.log(photoLinks);
// ImageObject
function ImageObject(name, description) {
    let imgObj = this;
    imgObj.name = name;
    imgObj.description = description;
    console.log("");                                                                                                                                                                                                                                                                                                                                                                                                          
}

function createObject() {
    for (counter = 0; counter < photoLinks.length; counter++) {
        objectArray.push(new ImageObject(photoLinks[counter], counter));
    }
}
function placePhoto(imgObj) {
    let photoDiv = document.createElement('div');
    photoDiv.className = 'photoDiv';
    let photo = document.createElement('img');
    photo.src = imgObj.name; //url
    photo.alt = 'Photo of the galaxy, stars and planets.';
    photo.title = imgObj.description;
    photoDiv.append(photo);
    photoWrapper.append(photoDiv);
}
function showRandomImages() {
   for(let i=photoLinks.length; i>0; i--) {
    let randomNumber = Math.floor(Math.random()*objectArray.length);
    //placePhoto(photoLinks[randomNumber] );
    placePhoto(objectArray[randomNumber]);
    objectArray.splice(randomNumber, 1);
    } 
}
function createJSON() {
    let id = document.getElementById('json');
    let applicationData = "application/json;charset=utf-8,"
        + encodeURIComponent(JSON.stringify(objectArray));

    let json        =   document.createElement('a');
    json.href       =  'data:' + applicationData;
    json.download   =  'json.json';
    json.innerHTML  =  'Ready to download your json file';
    id.appendChild(json);
}

function requestListener() {
    let obj = JSON.parse(this.response)
}
function createGetRequest() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", requestListener);

    request.open("GET", "data/json.json", false)
    request.send();
}
// createObject();
// createJSON();
createGetRequest();
showRandomImages();