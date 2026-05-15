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
            border: "4px solid blue"
          }}
        />

        <h1
          style={{
            color: "blue",
            fontSize: "44px",
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
        <h2 style={{ color: "yellow" }}>
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
<div style={{ marginTop: "30px" }}>
  <a
    href="https://instagram.com/parikshit_pandiya"
    style={{
      backgroundColor: "red",
      color: "white",
      padding: "12px 20px",
      marginRight: "10px",
      textDecoration: "none",
      borderRadius: "10px"
    }}
  >
    Instagram
  </a>

  <a
    href="https://wa.me/918107285850"
    style={{
      backgroundColor: "red",
      color: "white",
      padding: "12px 20px",
      marginRight: "10px",
      textDecoration: "none",
      borderRadius: "10px"
    }}
  >
    WhatsApp
  </a>

  <a
    href="mailto:parikshitpandiyaa@gmail.com"
    style={{
      backgroundColor: "red",
      color: "white",
      padding: "12px 20px",
      textDecoration: "none",
      borderRadius: "10px"
    }}
  >
    Email
  </a>
</div>
