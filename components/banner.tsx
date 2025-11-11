import Image from "next/image";

interface AdBannerProps {
  imageUrl: string;
  altText?: string;
  link?: string;
}

export default function AdBanner({ imageUrl, altText = "Ad banner", link }: AdBannerProps) {
  const bannerImage = (
    <div className="w-full py-5 flex justify-center items-center bg-transparent px-4 sm:px-8 md:px-16">
      {/* px adds equal spacing left and right */}
      <div className="w-full max-w-full rounded-md overflow-hidden">
        <Image
          src={imageUrl}
          alt={altText}
          width={1200} // large width for scaling
          height={300} // adjust height as needed
          className="w-full h-auto rounded-md"
          priority
        />
      </div>
    </div>
  );

  return (
    <section className="w-full bg-transparent flex justify-center">
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full max-w-[1200px]">
          {bannerImage}
        </a>
      ) : (
        bannerImage
      )}
    </section>
  );
}
