import React from 'react';
import YouTube from 'react-youtube';
import styles from './YoutubeVideo.module.scss';


export default ({ data = [] }) => {



    const videolist = data
        .map((item, index) => (

            <div key={index}>
                <h2 className={styles.heading}>{item.heading}</h2>
                <div className={styles.wrapper}>
                    <YouTube videoId={youtube_parser(item.link)} opts={opts} />
                </div>
            </div>
        ))


    const opts = {
        height: 'auto',
        width: 'auto',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    // const _onReady = (event) => {
    //     event.target.pauseVideo();
    // }

    return (
        <div className={styles.maindiv}>
            <div className={styles.wrapper}>
                {videolist}
            </div>
        </div>
    );
}

// const onReady = _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
// }
// }
function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}