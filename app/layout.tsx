// force rebuild
export const metadata = {
  title: "Santa Calls Dashboard",
  description: "Track build progress for the Santa Calls project.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
