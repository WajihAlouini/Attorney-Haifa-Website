import { ServiceDetailPage } from "@/pages/services/ServiceDetailPage";
import { Translation } from "@/types";

interface PageProps {
  locale: string;
  t: Translation;
  whatsappLink: string;
  whatsappNumber: string;
}

export function RealEstateLawPage(props: Readonly<PageProps>) {
  return <ServiceDetailPage {...props} serviceKey="realEstate" />;
}
