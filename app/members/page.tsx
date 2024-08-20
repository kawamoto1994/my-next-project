import { profile } from "console";
import styles from "./page.module.css";
import Image from "next/image";
import { getMemberList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";

// const data = {
//   // contents: [ は、プロパティ
//   // プロパティの中に、それぞれの人物のプロパティ（キー + 値）が入ってる
//   contents: [
//     {
//       id: "1",
//       image: {
//         url: "/img-member1.jpg",
//         width: 240,
//         height: 240,
//       },
//       name: "デイビット・チャン",
//       position: "CEO",
//       profile:
//         "グローバルテクノロジー企業でのお豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。自身の経験と洞察力によ理、業界のトレンドを見極めて戦略的な方針を策定し、会社の成長を牽引している。",
//     },
//     {
//       id: "2",
//       image: {
//         url: "/img-member2.jpg",
//         width: 240,
//         height: 240,
//       },
//       name: "エミリー・サンダース",
//       position: "COO",
//       profile:
//         "グローバルテクノロジー企業でのお豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。自身の経験と洞察力によ理、業界のトレンドを見極めて戦略的な方針を策定し、会社の成長を牽引している。",
//     },
//     {
//       id: "3",
//       image: {
//         url: "/img-member3.jpg",
//         width: 240,
//         height: 240,
//       },
//       name: "ジョン・ウィルソン",
//       position: "CTO",
//       profile:
//         "先進技術の研究開発と製品イノベ０ションの分野で優れた経験を持つテクノロジーエキスパート。以前は、大手テクノロジー企業の研究開発部門で主柱エンジニアとして勤務し、革新的な製品の開発に関わった。最新の技術トレンドに精通し、当社の製品ポートフォリオを革新的かつ競争力のあるものにする為に、リサーチと開発をリードしている。",
//     },
//   ],
// };

export default async function Page() {
  const data = await getMemberList({ limit: MEMBERS_LIST_LIMIT });
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                width={member.image.width}
                height={member.image.height}
                alt=""
                className={styles.image}
              ></Image>
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
                <dd className={styles.profile}>
                  母親の名前：
                  {member.family?.[0]?.mother || "母親の情報はありません"}
                </dd>
                <dd className={styles.profile}>
                  父親の名前：
                  {member.family?.[0]?.father || "父親の情報はありません"}
                </dd>
                <dd className={styles.profile}>
                  子どもの有無：
                  {(member.family?.[0]?.children && "有") || "無"}
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
