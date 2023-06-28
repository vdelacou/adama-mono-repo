import '../styles/globals.css';
// include styles from the ui package
import '@adama/components-landing-page-ui/dist/index.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
