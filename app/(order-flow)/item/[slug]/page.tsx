import DetailPage from "@/features/user/menu/components/DetailPage";

const ItemPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (!slug) return null;

  return <DetailPage slug={slug} />;
};

export default ItemPage;
