import bannerImg from "@/assets/bannerImg.jpg";
import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 h-full">
        <img
          src={bannerImg}
          alt="Security team in front of city skyline"
          className="object-cover w-full h-full"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative w-10/12 mx-auto px-4">
        <div className="pt-40 md:pt-48 lg:pt-56 max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            The First Line Of Defence For Your Security
          </h1>
          <p className="text-md md:text-lg text-white/90 max-w-xl">
            On Guard Group where security meets excellence in crowd control. As
            a premier security firm specializing in ensuring the safety and
            security of licensed venues and events, we take pride in our
            commitment to professionalism, extensive training, and unparalleled
            customer service.
          </p>
          <div className="mt-8 space-x-4 ">
            <Button size="lg"  className="text-lg font-medium px-8 py-7">
              Learn More
            </Button>
            <Button variant="secondary" size="lg"  className="text-lg font-medium px-8 py-7">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
