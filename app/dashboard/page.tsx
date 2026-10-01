// import ReferenceDashboardClient from "../../components/ReferenceDashboardClient";

// export default function Page() {
//   return <ReferenceDashboardClient />;
// }


// new claude code

import DashboardClient from "./DashboardClient";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default function Page() {
  return <DashboardClient />;
}
