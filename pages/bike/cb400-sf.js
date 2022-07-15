import Layout from '../../components/Layout'
import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/show.module.css'
import utilStyles from '../../styles/utils.module.css'

export default function() {
	return (
		<Layout>
			<Head>
				<title>CB400-sf</title>
			</Head>
			<div className={`${styles.inner}`}>
				<div className={`${styles.name_box}`}>
					<h2 className={`${styles.name} ${utilStyles.heading2xl}`}>ホンダ　CB400-sf</h2>
					<div className={`${styles.detail_area}`}>
						<img src="/images/cb400-sf-show.png" className={styles.bike_img} />
						<div className={`${styles.price_area}`}>
							<p > 
								(税込)　
								<span className={`${utilStyles.font_bold} ${utilStyles.font_big}`}>800,000</span>
								　円
							</p>
							<p>
								排気量：
								<span className={`${utilStyles.font_bold} ${utilStyles.font_big}`}>400</span>
								cc
							</p>
							<p>
								燃費：
								<span className={`${utilStyles.font_bold} ${utilStyles.font_big}`}>25.0</span>
								km/L
							</p>
							<p>
								エンジン：
								<span className={`${utilStyles.font_bold} ${utilStyles.font_big}`}>4</span>
								気筒

							</p>
						</div>
					</div>
				</div>
				
			</div>
			<Link href="/">
				<a>ホームへ戻る</a>
			</Link>
			
		</Layout>
		
	);
}