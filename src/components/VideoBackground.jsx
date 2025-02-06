const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-black/80">
      <video
        autoPlay
        muted
        loop
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover opacity-30"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-graphs-and-connections-97099-large.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoBackground;