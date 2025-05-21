// const videos = [
//     {
//         src: "/videos/narrative_demo.mp4",
//         label: "Narrative Demo Reel",
//         description: "A compilation of narrative film editing samples."
//     },
// ];

const Portfolio = () => {
    return (
        <div className="videos">
            <iframe className="video youtube" src="https://www.youtube.com/embed/uD3T-VSnpGY?si=vb4Ihj36aMpkKQCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {/* {videos.map((video, index) => (
                <div className="video" key={index}>
                    <video
                        controls
                        muted
                        loop
                        width="100%"
                        style={{ borderRadius: "8px" }}
                        aria-label={video.label}
                        title={video.label}
                    >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p className="sr-only">{video.description}</p>
                </div>
            ))} */}
        </div>
    );
}

export default Portfolio;
