import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
