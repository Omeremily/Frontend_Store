import React, { useEffect } from "react";

interface VideoProps {
    src: string;
}

const Video: React.FC<VideoProps> = ({ src }) => {
    useEffect(() => {
        const videoElement = document.getElementById("storeVideo") as HTMLVideoElement;
        if (videoElement) {
            videoElement.autoplay = true;
            videoElement.muted = true;
            videoElement.loop = true;
        }
    }, []);

    return (
        <video id="storeVideo">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default Video;
