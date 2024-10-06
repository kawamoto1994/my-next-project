import styles from "./page.module.css";
import ContectForm from "@/app/_components/ContectForm";

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        ご質問、ご相談は下記フォームよりお問い合わせください。<br></br>
        内容確認後、担当者より３営業日以内にご連絡いたします。
      </p>
      <ContectForm></ContectForm>
    </div>
  );
}
