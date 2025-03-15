import Categories from "@/modules/Categories";
import Header from "@/modules/Header";
import Products from "@/modules/Products";

export default function Home() {
  return (
   <div className="max-w-[1340px] flex flex-col gap-3 bg-white mt-10 rounded-[10px] block mx-auto p-10">
      <Header/>
      <div  className="w-full h-[1px] bg-[#ededed]"/>
      <Categories/>
      <Products/>
   </div>
  );
}
