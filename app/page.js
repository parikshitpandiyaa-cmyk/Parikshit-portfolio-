export default function Home() {
          src="/profile.jpg"
          alt="Parikshit"
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid red",
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            color: "red",
            fontSize: "52px",
            marginBottom: "10px",
          }}
        >
          Parikshit Pandiya
        </h1>

        <p style={{ fontSize: "22px", color: "#cccccc" }}>
          Cinematic Video Editor
        </p>

        <p style={{ marginTop: "10px", color: "#aaaaaa" }}>
          Instagram: @parikshit_pandiya
        </p>
      </div>

      <div style={{ marginTop: "60px" }}>
        <h2
          style={{
            color: "red",
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "40px",
          }}
        >
          My Cinematic Reels
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
          }}
        >
          {reels.map((video, index) => (
            <video
              key={index}
              src={video}
              controls
              style={{
                width: "100%",
                borderRadius: "20px",
                border: "2px solid red",
              }}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "60px",
          textAlign: "center",
          color: "#cccccc",
        }}
      >
        <p>Email: parikshitpandiyaa@gmail.com</p>
        <p>WhatsApp: +91 8107285850</p>
      </div>
    </div>
  );
}
