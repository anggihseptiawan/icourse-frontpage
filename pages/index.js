import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>ICourse</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container mx-auto">
				<h1 className="text-2xl">Haloooooo</h1>
			</main>
		</div>
	);
}
