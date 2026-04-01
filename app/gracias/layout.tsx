import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitud Recibida | DR Pools",
  robots: {
    index: false,
    follow: true,
  },
};

export default function GraciasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
