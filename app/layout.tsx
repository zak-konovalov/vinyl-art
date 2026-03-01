export const metadata = {
  title: "Vinyl-art",
  description: "Рекламное агентство Vinyl-art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}