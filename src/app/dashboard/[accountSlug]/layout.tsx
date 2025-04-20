import DashboardHeader from "@/components/dashboard/dashboard-header";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function PersonalAccountDashboard({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ accountSlug: string }>;
}) {
  const supabaseClient = await createClient();

  const { accountSlug } = await params;

  const { data: teamAccount, error } = await supabaseClient.rpc(
    "get_account_by_slug",
    {
      slug: accountSlug,
    }
  );

  if (!teamAccount) {
    redirect("/dashboard");
  }

  const navigation = [
    {
      name: "Overview",
      href: `/dashboard/${accountSlug}`,
    },
    {
      name: "Settings",
      href: `/dashboard/${accountSlug}/settings`,
    },
  ];

  return (
    <>
      <DashboardHeader
        accountId={teamAccount.account_id}
        navigation={navigation}
      />
      <div className="w-full p-8">{children}</div>
    </>
  );
}
