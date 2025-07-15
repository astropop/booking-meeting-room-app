import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import ImageOpt from "@/components/ImageOpt";
import getData from "@/services/server/meeting/services";
import { StudySpace } from "@/services/server/meeting/type";

export default function Meeting() {
  const [data, setData] = useState<StudySpace[]>([]);
  useEffect(() => {
    const handleFetch = async () => {
      try {
        // you can use try catch whatever
        const result = await getData();
        setData(result);
      } catch (error) {
        console.log("render-result-error", error);
      } finally {
        console.log("render-result-fin");
      }
    };
    handleFetch();
    // load first time when loading page
  }, []);

  return (
    <>
      <Head>
        <title>Meeting Room List</title>
        <meta property='og:title' content='Meeting Room List' key='title' />
      </Head>
      <div className={styles.title}>List Meeting Room at City Campus</div>
      <ul className={styles.listRoom}>
        {data.map((item) => {
          return (
            <li key={item.name}>
              <table
                style={{
                  width: "100%",
                  height: "auto",
                  border: "1px solid black",
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ width: "5%" }}>{item.name}</td>
                    <td style={{ width: "10%" }}>
                      <a
                        href={item.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Click here
                      </a>
                    </td>
                    <td style={{ width: "75%" }}>
                      <ImageOpt
                        alt={item.name}
                        fallback={"/No-Image.png"}
                        src={item.image_front ?? ""}
                      ></ImageOpt>
                      <ImageOpt
                        alt={item.name}
                        fallback={"/No-Image.png"}
                        src={item.image_overview ?? ""}
                      ></ImageOpt>
                    </td>
                    <td style={{ width: "10%" }}>
                      {item.note ? item.note : "No Description"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          );
        })}
      </ul>
    </>
  );
}
