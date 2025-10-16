
export const metadata = {
  title: "NOOCUPAS — Seguridad instalada en 24h",
  description: "Protegemos tu vivienda con monitoreo 24/7 y respuesta inmediata.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, background: "#0a0a0a", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
