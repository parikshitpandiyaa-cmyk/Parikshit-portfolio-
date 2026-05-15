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
            border: "4px solid white"
          }}
        />
          <h1
          style={{
            color: "blue",
            border: "white",
            fontSize: "32px",
            marginTop: "20px"
          }}
        >
          Parikshit Pandiya
        </h1>
            <p
  style={{
    color: "#cccccc",
    fontSize: "18px",
    marginTop: "15px",
    maxWidth: "700px",
    lineHeight: "30px"
  }}
>
  I am a cinematic video editor specializing in reels,
  travel videos, commercial edits, and professional
  storytelling content. I create high-quality edits
  that help creators and brands stand out on social media.
</p>
              
            <div style={{ marginTop: "30px" }}>
  <a
    href="https://instagram.com/parikshit_pandiya"
    style={{
      backgroundColor: "green",
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
      backgroundColor: "green",
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
      backgroundColor: "green",
      color: "white",
      padding: "12px 20px",
      textDecoration: "none",
      borderRadius: "10px"
    }}
  >
    Email
  </a>
</div>


        <p style={{ color: "RGB" }}>
          Cinematic Video Editor
        </p>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2 style={{ color: "white" }}>
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
