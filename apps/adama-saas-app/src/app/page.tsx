import { auth } from "@clerk/nextjs";

export default async function Page() {
  const { orgId, orgSlug, userId } = auth();
  return (
    <div className="flex">
      {JSON.stringify(userId)}
      {JSON.stringify(orgId)}
      {JSON.stringify(orgSlug)}
    </div>
  );
}
