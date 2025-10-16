export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #1c002d, #e1003c)",
      color: "white",
      textAlign: "center",
      fontFamily: "system-ui, sans-serif"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Protegemos tu hogar en 24h
      </h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "500px" }}>
        Instalación profesional de sistemas de seguridad NOOCUPAS.
      </p>
      <a
        href="https://wa.me/34600000000"
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          borderRadius: "9999px",
          background: "#25d366",
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Contactar por WhatsApp
      </a>
    </main>
  )
}
