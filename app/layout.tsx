import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "KP Auto Care | Service & Genuine Parts",
	description:
		"Expert auto service, honest diagnostics, and trusted spare parts—all under one roof.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
