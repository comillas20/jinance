import db from "@/db/drizzle";
import { notFound } from "next/navigation";
import { RecordForm } from "./components/record-form";

type PageProps = {
  params: Promise<{ wallet: string }>;
};

export default async function Page({ params }: PageProps) {
  const { wallet } = await params;

  const eWallet = await db.query.eWalletsTable.findFirst({
    where: (wallets, { eq }) => eq(wallets.url, wallet),
  });

  if (!eWallet) return notFound();

  return (
    <div className="space-y-4 p-2">
      <div>
        <h3>Create record</h3>
        <p className="text-sm">
          Create a new{" "}
          <strong className="text-secondary">{eWallet.name}</strong> record
        </p>
      </div>
      <RecordForm wallet={eWallet} />
    </div>
  );
}
