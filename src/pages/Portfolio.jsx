const videos = [
    { src: "/videos/advertising_demo.mp4" },
    { src: "/videos/narrative_demo.mp4" },
];

function Portfolio() {
    return (
        <div className="videos">
            {videos.map((video, index) => (
                <div className="video" key={index}>
                    <video controls muted loop width="100%" style={{ borderRadius: "8px" }}>
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
        </div>
    );
}

export default Portfolio;
