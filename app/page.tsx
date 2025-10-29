export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(236,72,153,0.18) 0%, transparent 60%), radial-gradient(circle at 80% 0%, rgba(124,58,237,0.15) 0%, transparent 50%)",
        color: "white",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Inter", system-ui, Roboto, sans-serif',
        display: "flex",
        flexDirection: "column",
        padding: "2rem 1rem 4rem",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <section style={{ maxWidth: "800px", width: "100%" }}>
        <div
          style={{
            background: "linear-gradient(90deg,#ec4899,#8b5cf6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: 600,
            fontSize: "0.9rem",
            marginBottom: "1rem"
          }}
        >
          Protección anti-okupas
        </div>

        <h1
          style={{
            fontSize: "2.4rem",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#fff",
            margin: "0 0 1rem"
          }}
        >
          Instalación de alarma 
          <br />
          en 24 horas
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1.1rem",
            lineHeight: 1.4,
            maxWidth: "600px",
            margin: "0 auto 2rem"
          }}
        >
          Protegemos tu piso vacío, local comercial o vivienda turística.
          Alarma Ajax, sirena, botón SOS y aviso inmediato a la central 24/7.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem"
          }}
        >
          <a
            href="#planes"
            style={{
              background: "linear-gradient(90deg,#8b5cf6,#ec4899)",
              borderRadius: "9999px",
              padding: "0.9rem 1.25rem",
              fontWeight: 600,
              color: "#fff",
              textDecoration: "none",
              minWidth: "180px",
              textAlign: "center"
            }}
          >
            Ver planes
          </a>

          <a
            href="https://wa.me/34600000000"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "9999px",
              padding: "0.9rem 1.25rem",
              fontWeight: 600,
              color: "#fff",
              textDecoration: "none",
              minWidth: "180px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.2)"
            }}
          >
            WhatsApp urgente
          </a>
        </div>

        <div
          style={{
            marginTop: "1.5rem",
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.8rem"
          }}
        >
          Respuesta humana en menos de 15 min.
        </div>
      </section>
    </main>
  );
}
