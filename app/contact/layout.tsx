import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

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
