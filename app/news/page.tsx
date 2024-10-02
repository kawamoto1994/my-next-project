import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagenation from "@/app/_components/Pagenation";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import SearchField from "../_components/SearchField";

export default async function Page() {
  // const { contents: news } = await getNewsList();

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField></SearchField>
      <NewsList news={news} />
      <Pagenation totalCount={totalCount}></Pagenation>
    </>
  );
}
