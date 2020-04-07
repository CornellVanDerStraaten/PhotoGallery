const photoLinks = [
    'https://o.aolcdn.com/images/dims?thumbnail=640%2C&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D4488%252C2525%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C900%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-images%252F2019-06%252Fad5ed8b0-996d-11e9-8beb-2ee08ac7ac1d%26client%3Da1acac3e1b3290917d92%26signature%3Df245a7606c708ab449b9700a0fd9fb9f28723ffe&client=amp-blogside-v2&signature=e2e13b1a646f851d14e50c764f764f1dbdfd3df7',
    'https://www.nasa.gov/sites/default/files/thumbnails/image/potw2002a.jpg',
    'https://thenypost.files.wordpress.com/2019/09/somethings-killing-galaxys2.jpg?quality=90&strip=all&w=618&h=410&crop=1',
    'https://www.nasa.gov/sites/default/files/thumbnails/image/ngc6338.jpg',
    'https://images.theconversation.com/files/223749/original/file-20180619-126537-5l632j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip',
    'https://upload.wikimedia.org/wikipedia/commons/0/00/Center_of_the_Milky_Way_Galaxy_IV_%E2%80%93_Composite.jpg',
    'https://blog.csiro.au/wp-content/uploads/2018/08/file-20180822-149484-cs44toreduced.jpg',
    'https://www.ilsjescreations.nl/wp-content/uploads/2016/10/galaxy.jpg',
    'https://cdn.arstechnica.net/wp-content/uploads/2019/10/M31_Abolfath_960-800x603.jpg',
    'https://cdn.images.express.co.uk/img/dynamic/151/590x/galaxy-collision-1073746.jpg?r=1547897644639',
    'https://www.sciencenews.org/wp-content/uploads/2020/02/021020_CC_monstergalaxy_feat-1028x579.jpg',
    'https://www.sciencenews.org/wp-content/uploads/2018/09/083018_MT_monster-galaxy_feat.jpg',
    'https://www.spaceanswers.com/wp-content/uploads/2017/08/eso1012a.jpg',
    'https://scx1.b-cdn.net/csz/news/800/2019/2-recordnumber.jpg',
    'https://inteng-storage.s3.amazonaws.com/img/iea/zBwgpJ5DOK/sizes/galaxy-clusters-ai_resize_md.jpg',
    'https://mcdn.wallpapersafari.com/medium/95/48/7NqE4z.jpg',
    'http://www.onderzoeksredactie.fhj.nl/wp-content/uploads/2019/04/Galaxy-768x512.jpg',
    'https://d3i6fh83elv35t.cloudfront.net/static/2019/08/pano1-1200x532.jpg',
    'https://www.wallpaperup.com/uploads/wallpapers/2015/03/26/646476/ac8e020501ecaaee56c518f0b8ace28d-1000.jpg'
];

const photoWrapper = document.getElementById('photoWrapper');

// function placePhoto(url) {
//     let photoDiv = document.createElement('div');
//     photoDiv.className = 'photoDiv';
//     let photo = document.createElement('img');
//     photo.src = url;
//     photo.alt = 'Photo of the galaxy, stars and planets.';
//     photoDiv.append(photo);
//     photoWrapper.append(photoDiv);
// }
// function showRandomImages() {
//    for(let i=photoLinks.length; i>0; i--) {
//     let randomNumber = Math.floor(Math.random()*photoLinks.length);
//     placePhoto(photoLinks[randomNumber] );
//     photoLinks.splice(randomNumber, 1);
//     } 
// }
