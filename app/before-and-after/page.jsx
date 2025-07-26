"use client";
import Layout from "@/components/layout/Layout";
import BeforeAfterSliderComponent from "../../components/BeforeAndAfter";

const BeforeAndAfterPage = () => {
  return (
    <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Before And After">
     <section>
  <div className="container my-7">
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      
      <div className="break-inside-avoid">
        <BeforeAfterSliderComponent
          firstImage={{
            imageUrl: "/assets/images/before_after/image_2.png",
            alt: "Before Image",
          }}
          secondImage={{
            imageUrl: "/assets/images/before_after/image_2-2.png",
            alt: "After Image",
          }}
        />
      </div>
      <div className="break-inside-avoid">
        <BeforeAfterSliderComponent
          firstImage={{
            imageUrl: "/assets/images/before_after/image_3.png",
            alt: "Before Image",
          }}
          secondImage={{
            imageUrl: "/assets/images/before_after/image_3-3.png",
            alt: "After Image",
          }}
        />
      </div>
      <div className="break-inside-avoid">
        <BeforeAfterSliderComponent
          firstImage={{
            imageUrl: "/assets/images/before_after/image_4.png",
            alt: "Before Image",
          }}
          secondImage={{
            imageUrl: "/assets/images/before_after/image_4-4.png",
            alt: "After Image",
          }}
        />
      </div>
      <div className="break-inside-avoid">
        <BeforeAfterSliderComponent
          firstImage={{
            imageUrl: "/assets/images/before_after/image_5.png",
            alt: "Before Image",
          }}
          secondImage={{
            imageUrl: "/assets/images/before_after/image5-5.png",
            alt: "After Image",
          }}
        />
      </div>
      <div className="break-inside-avoid">
        <BeforeAfterSliderComponent
          firstImage={{
            imageUrl: "/assets/images/before_after/image_6.png",
            alt: "Before Image",
          }}
          secondImage={{
            imageUrl: "/assets/images/before_after/image_6-6.png",
            alt: "After Image",
          }}
        />
      </div>
      <div className="break-inside-avoid">
        <BeforeAfterSliderComponent
          firstImage={{
            imageUrl: "/assets/images/before_after/image_8.png",
            alt: "Before Image",
          }}
          secondImage={{
            imageUrl: "/assets/images/before_after/image_8-8.png",
            alt: "After Image",
          }}
        />
      </div>
    </div>
  </div>
</section>

    </Layout>
  );
};

export default BeforeAndAfterPage;
