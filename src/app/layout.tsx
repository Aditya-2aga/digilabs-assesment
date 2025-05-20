import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  themeColor: '#2b63d9',
  initialScale: 1,
  minimumScale: 1,
};

export const metadata = {
  title: 'LookScout',
  description: 'A frontend project',
  manifest: '/manifest.json',
  other: {
    'LookScout': 'LookScout'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      {children}
        <script id="dhws-errorTracker" src="/dhws-error-tracker.js"></script>
       <script id="dhws-elementInspector" src="/dhws-web-inspector.js"></script>
</body>
    </html>
  );
}
