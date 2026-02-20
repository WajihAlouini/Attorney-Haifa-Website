import { OfficePhoto } from "@/types";

export const whatsappNumber = "+216 98 643 612";
export const mapShareUrl = "https://maps.app.goo.gl/oB8duerHn7ry62ZA8";
export const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d800!2d10.1143183!3d35.6740222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fdc5660ace3633%3A0x21b2299c213b1bdf!2z2YXZg9iq2Kgg2KfZhNij2LPYqtin2LDYqSDZh9mK2YHYp9ihINin2YTZgti22KfZhdmKL0NhYmluZXQgTWHDrnRyZSBIYWlmYSBHdWVkaGFtaQ!5e1!3m2!1sen!2stn!4v1764943006823!5m2!1sen!2stn";
export const GOOGLE_PLACE_ID = "ChIJRwtQ-P8PrkYRU8r2Ra2K8aA";

export const logoUrl = "/favicon.png";
export const heroBg = "/hero-bg.jpg";

import entryOffice from "@/assets/office/entry.webp?format=avif;webp&w=1200&as=picture";
import hallwayOffice from "@/assets/office/hallway.webp?format=avif;webp&w=1200&as=picture";
import office1 from "@/assets/office/office1.webp?format=avif;webp&w=1200&as=picture";
import office2 from "@/assets/office/office2.webp?format=avif;webp&w=1200&as=picture";

export const officePhotos: OfficePhoto[] = [
  { ...entryOffice, alt: "Office entry in Kairouan" } as OfficePhoto,
  {
    ...hallwayOffice,
    alt: "Hallway leading to consultation rooms",
  } as OfficePhoto,
  { ...office1, alt: "Primary consultation room" } as OfficePhoto,
  { ...office2, alt: "Workspace for document review" } as OfficePhoto,
];
