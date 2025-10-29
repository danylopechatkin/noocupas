export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(236,72,153,0.18) 0%, transparent 60%), radial-gradient(circle at 80% 0%, rgba(124,58,237,0.2) 0%, transparent 60%)",
        color: "white",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Inter", system-ui, Roboto, sans-serif',
        display: "flex",
        flexDirection: "column",
        padding: "2rem 1rem 4rem",
        alignItems: "center",
      }}
    >
      {/* HERO */}
      <section
        style={{
          width: "100%",
          maxWidth: "1200px",
          textAlign: "center",
          padding: "3rem 1rem 4rem",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background:
              "linear-gradient(90deg, rgba(236,72,153,0.15), rgba(124,58,237,0.15))",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "9999px",
            padding: "0.4rem 0.8rem",
            fontSize: "0.8rem",
            fontWeight: 500,
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          Instalación en 24h • Sin permanencia • CRA 24/7
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 3vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#fff",
            margin: "0 0 1rem",
          }}
        >
          Seguridad anti-okupas instalada{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(90deg,#ec4899,#7c3aed,#ec4899)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            en 24 horas
          </span>
        </h1>

        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            color: "rgba(255,255,255,0.7)",
            fontSize: "1.125rem",
            lineHeight: 1.4,
          }}
        >
          Protegemos tu vivienda vacía, local o alquiler turístico. Sistema Ajax
          + sirena + aviso inmediato + central receptora de alarmas.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
            marginTop: "2rem",
          }}
        >
          <a
            href="#precios"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#ec4899,#7c3aed,#ec4899)",
              borderRadius: "9999px",
              padding: "0.9rem 1.25rem",
              fontWeight: 600,
              color: "#fff",
              textDecoration: "none",
              minWidth: "180px",
              textAlign: "center",
              border: "0",
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
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            WhatsApp urgente
          </a>
        </div>

        <div
          style={{
            marginTop: "1.5rem",
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.8rem",
          }}
        >
          Respuesta humana en menos de 15 min.
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section
        style={{
          width: "100%",
          maxWidth: "1200px",
          padding: "2rem 1rem 3rem",
          color: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          ¿Cómo funciona?
        </h2>

        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          }}
        >
          {/* Paso 1 */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "1rem",
              padding: "1rem 1.25rem",
              minHeight: "150px",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.6)",
                marginBottom: "0.5rem",
              }}
            >
              1. Inspección
            </div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              Hablamos contigo / WhatsApp
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.9rem",
                lineHeight: 1.4,
              }}
            >
              Nos mandas dirección y fotos básicas. Evaluamos puntos de acceso y
              riesgo de ocupación.
            </div>
          </div>

          {/* Paso 2 */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "1rem",
              padding: "1rem 1.25rem",
              minHeight: "150px",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.6)",
                marginBottom: "0.5rem",
              }}
            >
              2. Instalación en 24h
            </div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              Equipo Ajax profesional
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.9rem",
                lineHeight: 1.4,
              }}
            >
              Colocamos sensores, sirena, botón SOS. Limpio, sin obras largas.
              Firmas recepción digitalmente.
            </div>
          </div>

          {/* Paso 3 */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "1rem",
              padding: "1rem 1.25rem",
              minHeight: "150px",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.6)",
                marginBottom: "0.5rem",
              }}
            >
              3. Monitoreo 24/7
            </div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              CRA + aviso inmediato
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.9rem",
                lineHeight: 1.4,
              }}
            >
              Detectamos intento de ocupación y te llamamos al instante. Aviso a
              fuerzas de seguridad si hace falta.
            </div>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section
        id="precios"
        style={{
          width: "100%",
          maxWidth: "1200px",
          padding: "2rem 1rem 4rem",
          color: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Planes y precios
        </h2>

        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          }}
        >
          {/* Básico */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "1rem",
              padding: "1.25rem 1.25rem 1rem",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "0.5rem",
              }}
            >
              Básico
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#fff" }}>
              29€/mes
            </div>
            <ul
              style={{
                marginTop: "0.75rem",
                paddingLeft: "1rem",
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.9rem",
                lineHeight: 1.4,
              }}
            >
              <li>Sensor puerta/ventana</li>
              <li>Sirena interior</li>
              <li>Aviso inmediato al móvil</li>
            </ul>
          </div>

          {/* Pro */}
          <div
            style={{
              background:
                "linear-gradient(90deg,rgba(236,72,153,0.07),rgba(124,58,237,0.07))",
              border:
                "1px solid rgba(236,72,153,0.4), rgba(124,58,237,0.4)",
              borderRadius: "1rem",
              padding: "1.25rem 1.25rem 1rem",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.8)",
                marginBottom: "0.5rem",
                fontWeight: 600,
              }}
            >
              Pro (recomendado)
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#fff" }}>
              39€/mes
            </div>
            <ul
              style={{
                marginTop: "0.75rem",
                paddingLeft: "1rem",
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.9rem",
                lineHeight: 1.4,
              }}
            >
              <li>Todo del Básico</li>
              <li>Detección movimiento</li>
              <li>Botón SOS / pánico</li>
              <li>Instalación incluida</li>
            </ul>
          </div>

          {/* Pro+ */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "1rem",
              padding: "1.25rem 1.25rem 1rem",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "0.5rem",
              }}
            >
              Pro+
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#fff" }}>
              49€/mes
            </div>
            <ul
              style={{
                marginTop: "0.75rem",
                paddingLeft: "1rem",
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.9rem",
                lineHeight: 1.4,
              }}
            >
              <li>Todo del Pro</li>
              <li>Sirena exterior alta potencia</li>
              <li>Conexión CRA 24/7</li>
              <li>Asistencia en intento de ocupación</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Sin permanencia. Cancelas cuando ya no necesitas protección.
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          width: "100%",
          maxWidth: "1200px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "1.5rem",
          color: "rgba(255,255,255,0.4)",
          fontSize: "0.8rem",
          textAlign: "center",
        }}
      >
        NOOCUPAS © {new Date().getFullYear()} · Seguridad anti-okupas en toda España · WhatsApp 24h
      </footer>
      {/* rebuild trigger */}
    </main>
  );
}
