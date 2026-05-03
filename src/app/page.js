import HeroSection from "@/components/Hero";
import ProductList from "@/components/ProductList";
import SummerCareTips from "@/components/SummerCareTips";
import TopBrands from "@/components/TopBrands";
import TopProducts from "@/components/TopProducts";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TopProducts />
      <ProductList />
      <SummerCareTips />
      <TopBrands />
    </div>
  );
}
