import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

export const metadata = {
  title: "お問い合わせ",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="contact" sub="お問い合わせ"></Hero>
      <Sheet>{children}</Sheet>;
    </>
  );
}
