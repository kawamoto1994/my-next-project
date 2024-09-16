import { list } from "postcss";
import styles from "./index.module.css";
import Image from "next/image";
import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";
import Link from "next/link";
import { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length == 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li className={styles.list} key={article.id}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            {article.thumbnail ? (
              <Image
                className={styles.image}
                src={article.thumbnail.url}
                alt=""
                width={article.thumbnail.width}
                height={article.thumbnail.height}
              ></Image>
            ) : (
              <Image
                className={styles.image}
                src="/no-image.png"
                alt="No image"
                width={1200}
                height={630}
              ></Image>
            )}

            <dl className={styles.list}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category[0]}></Category>
                <Date date={article.publishedAt ?? article.createdAt}></Date>
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
