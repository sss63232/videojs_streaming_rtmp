$(document).ready(() => {

    // videojs player 選項
    var options = {
        controls: false,
        autoplay: true,
        preload: 'auto',
    };
    var videoSrc = 'rtmp://m29m.hey55.com:1935/pop/spba-02';
    var videoSrc1 = './fade.mp4';

    // 設置 flash player
    var videoId = "player";
    var player = videojs(videoId, options);
    player.ready(() => {
        player.src({ type: 'rtmp/mp4', src: videoSrc });
        // player.src({ type: 'video/mp4', src: videoSrc1 });

        videojs.log("your player is ready");
        // player.play();
    });
});