import AcceptTeamInvitation from "@/components/fragments/basejump/accept-team-invitation";
import { redirect } from "next/navigation";

export default async function AcceptInvitationPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  if (!token) {
    redirect("/");
  }

  return (
    <div className="max-w-md mx-auto w-full my-12">
      <AcceptTeamInvitation token={token} />
    </div>
  );
}
