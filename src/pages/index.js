import Head from "next/head";
import { Inter } from "next/font/google";
import TodosEducandos from "@/components/TodosEducandos";
import Container from "react-bootstrap/Container";
import PaginaInicial from "@/components/PaginaInicial";
import PaqNavbar from "@/components/PaqNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PAQ - Educandos</title>
        <meta name="description" content="Página dos educandos do PAQ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PaqNavbar>
        <PaginaInicial />
      </PaqNavbar>
    </>
  );
}
