import { FOOTER_BRANCHES } from "@/components/layout/footer-data";

export type BranchRegion = {
  region: string;
  addresses: string[];
};

/** Phân nhóm từ FOOTER_BRANCHES — một nguồn địa chỉ với footer. */
export const BRANCH_REGIONS: BranchRegion[] = [
  {
    region: "Chi nhánh miền Nam",
    addresses: [
      FOOTER_BRANCHES[0],
      FOOTER_BRANCHES[3],
      FOOTER_BRANCHES[5],
    ],
  },
  {
    region: "Chi nhánh miền Trung",
    addresses: [FOOTER_BRANCHES[1], FOOTER_BRANCHES[4]],
  },
  {
    region: "Chi nhánh miền Bắc",
    addresses: [FOOTER_BRANCHES[2]],
  },
];
