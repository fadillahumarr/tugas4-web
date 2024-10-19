import Image from "next/image";

import Card from "./_components/Card";

import {
  GiteRounded,
  RssFeedRounded,
  DnsRounded,
  DomainRounded,
  HttpRounded,
  WebRounded,
} from "@mui/icons-material";

const Home = () => {
  const articles = [
    {
      id: 1,
      title: "Cara Kerja Internet Secara Umum",
      icon: <RssFeedRounded fontSize="large" />,
    },
    {
      id: 2,
      title: "Definisi dan Cara Kerja HTTP dan HTTPS",
      icon: <HttpRounded fontSize="large" />,
    },
    {
      id: 3,
      title: "Definisi dan Cara Kerja Nama Domain",
      icon: <DomainRounded fontSize="large" />,
    },
    {
      id: 4,
      title: "Definisi dan Cara Kerja DNS",
      icon: <DnsRounded fontSize="large" />,
    },
    {
      id: 5,
      title: "Definisi dan Cara Kerja Hosting",
      icon: <GiteRounded fontSize="large" />,
    },
    {
      id: 6,
      title: "Definisi dan Cara Kerja Browser",
      icon: <WebRounded fontSize="large" />,
    },
  ];
  return (
    <div className="flex flex-col justify-center w-screen h-screen py-12 px-32 gap-5 bg-gradient-to-t from-black to-slate-800">
      <h1 className=" text-white text-5xl font-bold text-center">
        Pemahaman Infrastruktur Internet
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {articles.map((article) => (
          <Card
            key={article.id}
            id={article.id}
            title={article.title}
            icon={article.icon}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
