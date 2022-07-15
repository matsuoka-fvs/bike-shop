import Head from "next/head";
import styles from "./layout.module.css";

const name = "Bike Shop !";
export const siteTitle = "bike shop";

function Layout({children}) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				<div className={styles.header_inner}>
					<h1 className={styles.title}>{name}</h1>
				</div>
			</header>
			<main>
				{children}
			</main>
		</div>
	);
}

export default Layout;