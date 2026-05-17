"use client";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
        textAlign: "center"
      }}
    >
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
          border: "3px solid white",
          padding: "15px",
          borderRadius: "15px",
          display: "inline-block",
          marginTop: "20px"
        }}
      >
        Parikshit Pandiya
      </h1>

      <p
        style={{
          color: "#cccccc",
          fontSize: "18px",
          marginTop: "20px",
          lineHeight: "30px"
        }}
      >
        I am a cinematic video editor specializing in
        reels, travel videos, commercial edits, and professional storytelling content.
        I create high-quality edits that help creators and brands stand out on social media.
      </p>

      <div style={{ marginTop: "25px" }}>
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
            <p style={{ marginTop: "15px" }}>
        Cinematic Video Editor
      </p>

      <div style={{ marginTop: "30px" }}>
        <a
          onClick={() => {
            document.getElementById("edits").style.display = "block";
          }}
          style={{
            color: "white",
            textDecoration: "none",
            border: "2px solid blue",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            display: "inline-block"
          }}
        >
          My Editz
        </a>
      </div>

      <div
        id="edits"
        style={{
          display: "none",
          marginTop: "40px"
        }}
      >
        <video
          src="/reel1.mp4"
          controls
          style={{
            width: "100%",
            marginBottom: "20px",
            borderRadius: "20px"
          }}
        />

        <video
          src="/reel2.mp4"
          controls
          style={{
            width: "100%",
            marginBottom: "20px",
            borderRadius: "20px"
          }}
        />

        <video
          src="/reel3.mp4"
          controls
          style={{
            width: "100%",
            borderRadius: "20px"
          }}
        />
      </div>
    </div>
  );
          }
