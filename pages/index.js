import Head from 'next/head'
import styles from '../styles/index.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/Layout'
import Link from "next/link";


export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.main_inner}>
          <div className={styles.side_menue}>
            <p>絞り込み</p>
            <div>
               <p>メーカー</p>
               <div>
                 <p>ホンダ</p>
                 <p>ヤマハ</p>
                 <p>スズキ</p>
                 <p>カワサキ</p>
               </div>
            </div>
           
          </div>
          <div>
            <h2 className={styles.title}>バイク一覧</h2>
          <div className={styles.bike_index}>
            
            <article className={styles.article}>
              <Link href="/bike/cb400-sf">
                <a >
                  <div>
                    <p className={`${utilStyles.font_small}`}>メーカー</p>
                    <p className={`${utilStyles.font_bold}`}>車種名</p>
                    <p className={`${utilStyles.font_small}`}> 
                      <span className={`${utilStyles.font_bold} ${utilStyles.font_normal}`}>値段</span>
                      　円
                    </p>
                    <img src="/images/cb400-sf.png" className={styles.bike_img} />
                  </div>
                </a>
              </Link>
            </article>
            <article className={styles.article}>
              <Link href="/">
                <a >
                  <div>
                    <p className={`${utilStyles.font_small}`}>メーカー</p>
                    <p className={`${utilStyles.font_bold}`}>車種名</p>
                    <p className={`${utilStyles.font_small}`}> 
                      <span className={`${utilStyles.font_bold} ${utilStyles.font_normal}`}>値段</span>
                      　円
                    </p>
                    <img src="/images/cb400-sf.png" className={styles.bike_img} />
                  </div>
                </a>
              </Link>
            </article>
            <article className={styles.article}>
              <Link href="/">
                <a >
                  <div>
                    <p className={`${utilStyles.font_small}`}>メーカー</p>
                    <p className={`${utilStyles.font_bold}`}>車種名</p>
                    <p className={`${utilStyles.font_small}`}> 
                      <span className={`${utilStyles.font_bold} ${utilStyles.font_normal}`}>値段</span>
                      　円
                    </p>
                    <img src="/images/cb400-sf.png" className={styles.bike_img} />
                  </div>
                </a>
              </Link>
            </article>
            <article className={styles.article}>
              <Link href="/">
                <a >
                  <div>
                    <p className={`${utilStyles.font_small}`}>メーカー</p>
                    <p className={`${utilStyles.font_bold}`}>車種名</p>
                    <p className={`${utilStyles.font_small}`}> 
                      <span className={`${utilStyles.font_bold} ${utilStyles.font_normal}`}>値段</span>
                      　円
                    </p>
                    <img src="/images/cb400-sf.png" className={styles.bike_img} />
                  </div>
                </a>
              </Link>
            </article>
            <article className={styles.article}>
              <Link href="/">
                <a >
                  <div>
                    <p className={`${utilStyles.font_small}`}>メーカー</p>
                    <p className={`${utilStyles.font_bold}`}>車種名</p>
                    <p className={`${utilStyles.font_small}`}> 
                      <span className={`${utilStyles.font_bold} ${utilStyles.font_normal}`}>値段</span>
                      　円
                    </p>
                    <img src="/images/cb400-sf.png" className={styles.bike_img} />
                  </div>
                </a>
              </Link>
            </article>
           </div>
          </div>
        </div>
      </main>
    </Layout>
    
  )
}
