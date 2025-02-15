const q = document.getElementById('q');
const logo = document.getElementById('logo');
const info = document.getElementById('info');

q.addEventListener("mouseover",showInfo);
q.addEventListener("mouseout",hideInfo);

function showInfo() {
  logo.style.display="none";
  info.style.display="block";
}

function hideInfo() {
  info.style.display="none";
  logo.style.display="flex";
}

const introvid = document.getElementById('intro-video');
const introContainer = document.getElementById('intro-container');
const mainContainer = document.getElementById('main-container');
const loadingmsg = document.getElementById('msg');

logo.addEventListener("click",introFade);
introvid.addEventListener("click",introFade);

function introFade() {
  introContainer.style.opacity="0";
  setTimeout(() => {
    loadingmsg.style.opacity="1";
  },1000);
}

introContainer.addEventListener("transitionend", () => {
  introContainer.style.display="none";
  mainContainer.style.display="grid";
  setTimeout(mainFade,1000);
});

function mainFade() {
  console.log("mainFade");
  mainContainer.style.opacity="1";
}

const container = document.getElementById('main-container');
const videos = [];
const videoCount = 125;

for (let i = 1; i <= videoCount;i++) {
  videos.push(i);
}

shuffleArray(videos);

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at indices i and randomIndex
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

const observer = lozad();
observer.observe();

for (let i = 0; i < videoCount; i++) {

    const video = document.createElement('video');

    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    // video.preload = 'none';

    video.addEventListener("mouseover", () => {
      video.muted = false;
    });

    video.addEventListener("mouseout", () => {
      video.muted = true;
    });

    const source = document.createElement('source');
    source.setAttribute('data-src', `assets/${videos[i]}.mp4`);
    source.setAttribute('type', 'video/mp4');

    video.classList.add('lozad');
    video.style.opacity = 0;

    video.appendChild(source);
    container.appendChild(video);
    video.setAttribute("data-loaded" , "false");
    observer.observe();

}

let allVideos = document.getElementsByClassName('lozad');

for (let i = 0; i < videoCount; i++) {
  allVideos[i].addEventListener('loadeddata',function() {
    setTimeout(fadeInVideo(i),500);
  })
}

function fadeInVideo(i) {
  let video = allVideos[i];
  video.style.opacity = 1;
}
