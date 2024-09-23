import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import { notFound, useSearchParams } from "next/navigation";
import Pagenation from "@/app/_components/Pagenation";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  // const current = parseInt(params.current, 10);
  // const { contents: news } = await getNewsList();
  // const { contents: news } = await getNewsList({
  //   limit: 10,
  //   offset: 10 * (current - 1),
  // });

  // より厳密に書いてみる
  // const searchParams = useSearchParams();
  // const page = searchParams.get("page");

  // 'page' が null または 'NaN' になる可能性に対処
  // const current = page ? parseInt(page, 10) || 1 : 1;

  const current = parseInt(params.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <NewsList news={news}></NewsList>
      <Pagenation totalCount={totalCount} current={current}></Pagenation>
    </>
  );
}
