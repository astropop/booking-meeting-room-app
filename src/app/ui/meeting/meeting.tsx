"use client";
import { use, useCallback, useMemo, useState } from "react";
import styles from "./page.module.css";
import { StudySpace } from "@/src/services/server/meeting/type";
import ImageButton from "./_components/ImageButton";
import React from "react";

const MeetingList = React.memo(({ data }: { data: StudySpace[] }) => {
  console.log("Load-4 - MeetingList Child");
  return (
    <ul className={styles.listRoom}>
      {data.map((item) => {
        return (
          <li key={item.name}>
            <div className={styles.rowRoom}>
              <div className={styles.nameRoom}>{item.name}</div>
              <div className={styles.linkRoom}>
                <a href={item.url} target='_blank' rel='noopener noreferrer'>
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
  );
});

export default function MeetingUI({
  spaces,
}: {
  spaces: Promise<StudySpace[]>;
}) {
  console.log("Load-3 - MeetingUI");
  const data = use(spaces);

  // const [items, setItems] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>List Meeting Room at City Campus</div>
        <input
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <MeetingList data={filteredData} />
      </div>
    </>
  );
}
