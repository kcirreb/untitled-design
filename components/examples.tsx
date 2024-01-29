import SalesCard from "./cards/sales-card";
import PermissionsCard from "./cards/permissions-card";
import SignInCard from "./cards/sign-in-card";
import TextCard from "./cards/text-card";
import TableCard from "./cards/table-card";
import FAQsCard from "./cards/faqs-card";

export default function Examples() {
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
