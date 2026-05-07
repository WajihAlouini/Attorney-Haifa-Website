import { ServiceDetailPage } from "@/pages/services/ServiceDetailPage";
import { Translation } from "@/types";

interface PageProps {
  locale: string;
  t: Translation;
  whatsappLink: string;
  whatsappNumber: string;
}

export function CriminalLawPage(props: Readonly<PageProps>) {
  return <ServiceDetailPage {...props} serviceKey="criminal" />;
}
