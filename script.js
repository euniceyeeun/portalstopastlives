const container = document.getElementById('main-container');
const videos = [];
const videoCount = 7;

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

for (let i = 0; i < videoCount; i++) {

    const video = document.createElement('video');

    video.autoplay = true;
    video.muted = true;
    video.loop = true;

    video.addEventListener("mouseover", () => {
      video.muted = false;
    });

    video.addEventListener("mouseout", () => {
      video.muted = true;
    });

    const source = document.createElement('source');
    source.setAttribute('src', `assets/${videos[i]}.mp4`);
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    container.appendChild(video);
}
