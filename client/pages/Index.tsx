import Layout from "@/components/Layout";
import { HomeHero } from "@/components/HomeHero";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Categories } from "@/components/Categories";
import { SaleBanner } from "@/components/SaleBanner";
import { ShopCollection } from "@/components/ShopCollection";
import { BlogSection } from "@/components/BlogSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { InstagramSection } from "@/components/InstagramSection";

export default function Index() {
  return (
    <Layout>
      <HomeHero />
      <ProductCarousel />
      <Categories />
      <SaleBanner />
      <ShopCollection />
      <BlogSection />
      <NewsletterSection />
      <InstagramSection />
    </Layout>
  );
}
