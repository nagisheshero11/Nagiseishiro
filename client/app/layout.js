import './globals.css';

export const metadata = {
    title: 'Nagi Seishiro',
    description: 'Personal Portfolio of Nagi Seishiro',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
