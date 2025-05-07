const videos = [
    {
        src: "/videos/narrative_demo.mp4",
        label: "Narrative Demo Reel",
        description: "A compilation of narrative film editing samples."
    },
    {
        src: "/videos/advertising_demo.mp4",
        label: "Advertising Demo Reel",
        description: "A showcase of advertising video editing projects."
    },
];

function Portfolio() {
    return (
        <div className="videos">
            {videos.map((video, index) => (
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
            ))}
        </div>
    );
}

export default Portfolio;
