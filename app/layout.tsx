export const metadata = {
  title: "NOOCUPAS — Seguridad anti-okupas en 24h",
  description:
    "Instalamos alarma profesional en 24 horas y monitorizamos tu propiedad 24/7.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          backgroundColor: "#000",
          color: "#fff",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Inter", system-ui, Roboto, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
