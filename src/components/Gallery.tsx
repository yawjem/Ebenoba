import Image from "next/image";

const shot = "overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5";
export function Gallery({ priority = true }: { priority?: boolean }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className={`${shot} relative col-span-3 aspect-video`}>
        <Image src="/images/about-banner.jpg" alt="Ebenoba promotion: Amazing deals await, shop more, save more" fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" priority={priority} />
      </div>
      <div className={`${shot} relative aspect-[4/5]`}>
        <Image src="/images/about-delivery.jpg" alt="An Ebenoba rider delivering a parcel to a smiling customer at her door" fill sizes="(min-width:1024px) 185px, 33vw" className="object-cover object-[62%_center]" />
      </div>
      <div className={`${shot} relative aspect-[4/5]`}>
        <Image src="/images/about-seller.jpg" alt="A seller celebrating a new order notification on her phone" fill sizes="(min-width:1024px) 185px, 33vw" className="object-cover object-[40%_center]" />
      </div>
      <div className={`${shot} relative aspect-[4/5]`}>
        <Image src="/images/about-app.jpg" alt="The Ebenoba app showing categories, deals and picked-for-you products" fill sizes="(min-width:1024px) 185px, 33vw" className="object-cover object-top" />
      </div>
    </div>
  );
}
