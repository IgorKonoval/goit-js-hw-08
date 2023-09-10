import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = Number(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(playTime, 1000));

function playTime(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

player.setCurrentTime(currentTime);
