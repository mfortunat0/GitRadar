import Form from "../components/Form";
import Card from "../components/Card";
import Head from "next/head";
import { DataContextProvider } from "../context/DataContext";

export default function Home() {
  return (
    <>
      <DataContextProvider>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Form />
        <Card />
      </DataContextProvider>
    </>
  );
}
