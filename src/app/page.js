import HeroSection from "@/components/Hero";
import ProductList from "@/components/ProductList";
import SummerAnimation from "@/components/SummerAnimation";
import SummerCareTips from "@/components/SummerCareTips";
import TopBrands from "@/components/TopBrands";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductList />
      <SummerCareTips />
      <TopBrands />
      <SummerAnimation />
    </div>
  );
}
