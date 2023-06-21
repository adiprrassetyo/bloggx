import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

// get data
async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              Lorem ipsum dolor sit amet consekdnas adipsowkas
            </h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consekdnas adipsowkas Lorem ipsum dolor
              sit amet consekdnas adipsowkas Lorem ipsum dolor sit amet
              consekdnas adipsowkas Lorem ipsum dolor sit amet consekdnas
              adipsowkasLorem ipsum dolor sit amet consekdnas adipsowkas
            </p>
            <div className={styles.author}>
              <Image
                src="https://media.istockphoto.com/id/1294915041/id/foto/ilustrasi-3d-berdiri-pria-dengan-lengan-disilangkan-potret-kartun-tersenyum-karakter-pria.webp?s=1024x1024&w=is&k=20&c=LRenllkv9SYp12V_gtTJeKgME4fFL1deee0Ut0xo9E4="
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>Adi PRasetyo</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consekdnas adipsowkas Lorem ipsum dolor
            sit amet consekdnas adipsowkas Lorem ipsum dolor sit amet consekdnas
            adipsowkas Lorem ipsum dolor sit amet consekdnas adipsowkas Lorem
            ipsum dolor sit amet consekdnas adipsowkas Lorem ipsum dolor sit
            amet consekdnas adipsowkasLorem ipsum dolor sit amet consekdnas
            adipsowkasLorem ipsum dolor sit amet consekdnas adipsowkas Lorem
            ipsum dolor sit amet consekdnas adipsowkas Lorem ipsum dolor sit
            amet consekdnas adipsowkas Lorem ipsum dolor sit amet consekdnas
            adipsowkasLorem ipsum dolor sit amet consekdnas adipsowkasLorem
            ipsum dolor sit amet consekdnas adipsowkas Lorem ipsum dolor sit
            amet consekdnas adipsowkas Lorem ipsum dolor sit amet consekdnas
            adipsowkas Lorem ipsum dolor sit amet consekdnas adipsowkasLorem
            ipsum dolor sit amet consekdnas adipsowkas
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
