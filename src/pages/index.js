import Image from "next/image";
import { Inter } from "next/font/google";
import SearchInput from "../components/SearchInput";
import { useEffect } from "react";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchInput handleChange={setSearchTerm} />
    </main>
  );
}
