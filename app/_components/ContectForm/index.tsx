// "use client";

// import { createContactData } from "@/app/_actions/contact";
// import { useFormState } from "react-dom";
// import styles from "./index.module.css";

// const initialState = {
//   steatus: "",
//   message: "",
// };

// export default function contactForm() {
//   const [state, formAction] = useFormState(createContactData, initialState);
//   console.log(state);
//   if (state.status === "success") {
//     return (
//       <p className={styles.success}>
//         お問い合わせいただき、ありがとうございます。<br></br>
//         お返事まで今しばらくお待ちください。
//       </p>
//     );
//   }
//   return (
//     <form className={styles.form} action={formAction}>
//       <div className={styles.horizontal}>
//         <div className={styles.item}>
//           <label className={styles.label} htmlFor="lastname">
//             姓
//           </label>
//           <input
//             type="text"
//             className={styles.textfield}
//             name="lastname"
//             id="lastname"
//           />
//         </div>
//         <div className={styles.item}>
//           <label className={styles.label} htmlFor="firstname">
//             名
//           </label>
//           <input
//             type="text"
//             className={styles.textfield}
//             name="firstname"
//             id="firstname"
//           />
//         </div>
//       </div>
//       <div className={styles.item}>
//         <label className={styles.label} htmlFor="company">
//           会社名
//         </label>
//         <input
//           type="text"
//           className={styles.textfield}
//           name="company"
//           id="company"
//         />
//       </div>
//       <div className={styles.item}>
//         <label className={styles.label} htmlFor="email">
//           メールアドレス
//         </label>
//         <input
//           type="text"
//           className={styles.textfield}
//           name="email"
//           id="email"
//         />
//       </div>
//       <div className={styles.item}>
//         <label className={styles.label} htmlFor="message">
//           メッセージ
//         </label>
//         <textarea className={styles.textarea} name="message" id="message" />
//       </div>

//       <div className={styles.actions}>
//         {state.status === "error" && (
//           <p className={styles.error}>{state.message}</p>
//         )}
//         <input type="submit" value="送信する" className={styles.button} />
//       </div>
//     </form>
//   );
// }

"use client";

import { createContactData } from "@/app/_actions/contact";
import { useState } from "react";
import styles from "./index.module.css";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, setState] = useState(initialState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); // currentTarget はフォーム要素
    const result = await createContactData(null, formData);
    setState(result);
  };

  if (state.status === "success") {
    return (
      <p className={styles.success}>
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.horizontal}>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="lastname">
            姓
          </label>
          <input
            type="text"
            className={styles.textfield}
            name="lastname"
            id="lastname"
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="firstname">
            名
          </label>
          <input
            type="text"
            className={styles.textfield}
            name="firstname"
            id="firstname"
          />
        </div>
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="company">
          会社名
        </label>
        <input
          type="text"
          className={styles.textfield}
          name="company"
          id="company"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
          メールアドレス
        </label>
        <input
          type="text"
          className={styles.textfield}
          name="email"
          id="email"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          メッセージ
        </label>
        <textarea className={styles.textarea} name="message" id="message" />
      </div>

      <div className={styles.actions}>
        {state.status === "error" && (
          <p className={styles.error}>{state.message}</p>
        )}
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  );
}
