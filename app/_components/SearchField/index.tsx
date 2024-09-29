"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./index.module.css";
import { Suspense } from "react";

function SearchFieldCompornent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keke = function () {
    const params = new URLSearchParams();
    params.set("q", "keke");
    router.push(`/news/search?${params.toString()}`);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.elements.namedItem("q");

    // qのHTML要素がinput要素だったら
    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set("q", q.value.trim());
      router.push(`/news/search?${params.toString()}`);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.search}>
          <Image
            src="/search.svg"
            alt="検索"
            width={16}
            height={16}
            loading="eager"
          ></Image>
          <input
            type="text"
            name="q"
            defaultValue={searchParams.get("q") ?? undefined}
            placeholder="キーワードを入力"
            className={styles.searchInput}
          />
        </label>
        <button type="button" onClick={keke}>
          ボタン
        </button>
      </form>
    </>
  );
}

// export default function SearchField() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const keke = function () {
//     const params = new URLSearchParams();
//     params.set("q", "keke");
//     router.push(`/news/search?${params.toString()}`);
//   };
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const q = e.currentTarget.elements.namedItem("q");

//     // qのHTML要素がinput要素だったら
//     if (q instanceof HTMLInputElement) {
//       const params = new URLSearchParams();
//       params.set("q", q.value.trim());
//       router.push(`/news/search?${params.toString()}`);
//     }
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <label className={styles.search}>
//           <Image
//             src="/search.svg"
//             alt="検索"
//             width={16}
//             height={16}
//             loading="eager"
//           ></Image>
//           <input
//             type="text"
//             name="q"
//             defaultValue={searchParams.get("q") ?? undefined}
//             placeholder="キーワードを入力"
//             className={styles.searchInput}
//           />
//         </label>
//         <button type="button" onClick={keke}>
//           ボタン
//         </button>
//       </form>
//     </>
//   );
// }

export default function SearchField() {
  return (
    <Suspense>
      <SearchFieldCompornent></SearchFieldCompornent>
    </Suspense>
  );
}
