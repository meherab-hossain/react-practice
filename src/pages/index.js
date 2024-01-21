import Header from "@/components/layaout/Header";
import { http } from "@/utils";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    http.get('products').then((response) =>{
      console.log(response?.data)
    })
  }, [])
  
  return (
    <main>
      <Header/>
      Hello Meherab!
    </main>
  );
}
