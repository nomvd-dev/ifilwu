import React from 'react';
import Audio from '../../music/y2mate.com - Bobby Helms  Jingle Bell Rock Lyrics.mp3';
import Video from '../../video/y2mate.com - Bobby Helms  Jingle Bell Rock Lyrics_v240P.mp4';
// import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';

const ChristmasTree = () => {
    // useEffect(() => {
    //     window.onload(() => {
    //         document.getElementById('audio').play();
    //     })
    // }, [])
    return (
        <>
            <div className="tree-container">
                {/* <ReactAudioPlayer src={Audio} autoPlay controls /> */}
                {/* <video id='vid' width="200" height="100" controls autoPlay>
                    <source src={Video} type="video/mp4" />
                </video> */}
                <audio id='audio' src={Audio} controls autoPlay loop/>
                <h3>Merry Christmas</h3>
                <div className="tree">
                    <div className="shadow ts-3d" />
                    <div className="trunk ts-3d">
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                    <div className="leaves-bottom ts-3d">
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                    <div className="leaves-middle ts-3d">
                        <div className="ts-3d" />
                        <div className="ts-3d" />
                        <div className="ts-3d" />
                        <div className="ts-3d" />
                    </div>
                    <div className="leaves-top ts-3d">
                        <div className="ts-3d" />
                        <div className="ts-3d" />
                        <div className="ts-3d" />
                        <div className="ts-3d" />
                    </div>
                    <div className="star star-1 ts-3d" />
                    <div className="star star-2 ts-3d" />
                    <div className="star star-3 ts-3d" />
                    <div className="star star-4 ts-3d" />
                    <div className="star star-5 ts-3d" />
                    <div className="shine ts-3d" />
                </div>
                <div className="snow-container">
                    <div className="snow snow-1 snow-y-1" />
                    <div className="snow snow-2 snow-y-2" />
                    <div className="snow snow-3 snow-y-3" />
                    <div className="snow snow-4 snow-y-3" />
                    <div className="snow snow-5 snow-y-2" />
                    <div className="snow snow-6 snow-y-1" />
                    <div className="snow snow-7 snow-y-1" />
                    <div className="snow snow-8 snow-y-2" />
                    <div className="snow snow-9 snow-y-3" />
                    <div className="snow snow-10 snow-y-3" />
                </div>
            </div>

        </>
    )
}

export default ChristmasTree
