"use client";
import { use } from "react";
import styles from "./page.module.css";
import { StudySpace } from "@/src/services/server/meeting/type";
import ImageButton from "./_components/ImageButton";

export default function MeetingUI({
  spaces,
}: {
  spaces: Promise<StudySpace[]>;
}) {
  const data = use(spaces);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>List Meeting Room at City Campus</div>
        <ul className={styles.listRoom}>
          {data.map((item) => {
            return (
              <li key={item.name}>
                <div className={styles.rowRoom}>
                  <div className={styles.nameRoom}>{item.name}</div>
                  <div className={styles.linkRoom}>
                    <a
                      href={item.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Click here
                    </a>
                  </div>
                  <div className={styles.imgRoom}>
                    <div className={styles.imgFront}>
                      <ImageButton
                        alt={item.name}
                        src={
                          !item.image_front
                            ? "/meeting/No-Image.png"
                            : item.image_front
                        }
                        className={styles.imgBtnFront}
                      ></ImageButton>
                    </div>
                    <div className={styles.imgOV}>
                      <ImageButton
                        alt={item.name}
                        src={
                          !item.image_overview
                            ? "/meeting/No-Image.png"
                            : item.image_overview
                        }
                        className={styles.imgBtnOV}
                      ></ImageButton>
                    </div>
                  </div>
                  <div className={styles.noteRoom}>
                    {item.note ? item.note : "No Description"}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
