import SalesCard from "./sales-card";
import PermissionsCard from "./permissions-card";
import SignInCard from "./sign-in-card";
import TextCard from "./text-card";
import TableCard from "./table-card";
import FAQsCard from "./faqs-card";

export default function Template() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="grid gap-4 xl:grid-cols-2">
        <div className="space-y-4">
          <SalesCard />
          <PermissionsCard />
        </div>
        <div className="space-y-4">
          <SignInCard />
          <FAQsCard />
        </div>
      </div>

      <div className="space-y-4">
        <TextCard />
        <TableCard />
      </div>
    </div>
  );
}
