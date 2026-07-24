import PlantDetailPage, {
  generateMetadata as catalogGenerateMetadata,
  generateStaticParams as catalogGenerateStaticParams,
} from "../../catalog/[slug]/page";

export const generateMetadata = catalogGenerateMetadata;
export const generateStaticParams = catalogGenerateStaticParams;

export default PlantDetailPage;
