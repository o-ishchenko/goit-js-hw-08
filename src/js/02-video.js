import throttle from 'lodash.throttle';
import Player from '@vimeo/player'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

setSavedTime()
player.on('timeupdate', throttle(saveCurrentTime, 500))

function saveCurrentTime(time) {
    localStorage.setItem('videoplayer-current-time', time.seconds)
 }

function setSavedTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime) {
        player.setCurrentTime(currentTime)
      }
}  
