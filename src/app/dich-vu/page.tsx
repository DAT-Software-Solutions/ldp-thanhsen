import { redirect } from "next/navigation";

import { PAGE_LUAT_SU } from "@/components/layout/site-urls";

export default function DichVuPage() {
    redirect(PAGE_LUAT_SU);
}
