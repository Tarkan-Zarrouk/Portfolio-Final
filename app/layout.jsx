import "../src/styles.css";

export const metadata = {
  title: "Tarkan Zarrouk — Software Developer",
  description:
    "Tarkan Zarrouk — software developer building thoughtful digital products and practical machine learning systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
