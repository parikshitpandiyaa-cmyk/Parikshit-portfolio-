export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src="/profile.jpg"
          alt="Parikshit"
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid red"
          }}
        />

        <h1
          style={{
            color: "red",
            fontSize: "48px",
            marginTop: "20px"
          }}
        >
          Parikshit Pandiya
        </h1>

        <p style={{ color: "#cccccc" }}>
          Cinematic Video Editor
        </p>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2 style={{ color: "red" }}>
          My Reels
        </h2>

        <video
          src="/reel1.mp4"
          controls
          style={{
            width: "100%",
            marginTop: "20px",
            borderRadius: "20px"
          }}
        />

        <video
          src="/reel2.mp4"
          controls
          style={{
            width: "100%",
            marginTop: "20px",
            borderRadius: "20px"
          }}
        />

        <video
          src="/reel3.mp4"
          controls
          style={{
            width: "100%",
            marginTop: "20px",
            borderRadius: "20px"
          }}
        />
      </div>
    </div>
  );
}
