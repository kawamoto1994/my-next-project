import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

type Props = {
  children: React.ReactNode;
};

// 型の定数 Props.children の値を 定数 children に代入
// const children = Props.children;
export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー"></Hero>
      <Sheet>{children}</Sheet>;
    </>
  );
}
