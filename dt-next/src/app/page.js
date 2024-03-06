
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Search from "@/components/Search/Search";



// async function getData(){

//   const res = await fetch(`http://localhost:3001/users`, {cache: 'no-cache'})

//   if(!res.ok) return notFound()
//   return res.json()
// }


export default async function Home () {
  // const users = await getData()

  return (
    <main className={styles.main}>
      <Search />
    </main>
  );
}
