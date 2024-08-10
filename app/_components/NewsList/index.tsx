import { list } from "postcss";
import styles from "./index.module.css";
import Image from "next/image";

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
          <div className={styles.link}>
            <Image
              className={styles.image}
              src="/no-image.png"
              alt="No image"
              width={1200}
              height={630}
            ></Image>
            <dl className={styles.list}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <span className={styles.tag}>{article.category.name}</span>
                <span className={styles.date}>
                  <Image
                    src="/clock.svg"
                    width={16}
                    height={16}
                    alt=""
                    priority
                  ></Image>
                  {article.publishedAt}
                </span>
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}
