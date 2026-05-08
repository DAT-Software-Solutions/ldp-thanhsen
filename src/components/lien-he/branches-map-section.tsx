import { MapPinIcon } from "@heroicons/react/24/outline";

import {
  BRANCHES_HEADING,
  BRANCHES_SUBTITLE,
  CONTACT_MAP_EMBED_URL,
} from "./contact-page-data";
import { BRANCH_REGIONS } from "./branches-data";

export const BranchesMapSection = () => (
  <section
    aria-labelledby="branches-heading"
    className="bg-[#F8F9FA] text-neutral-900"
  >
    <div className="custom-container px-4 py-12 sm:px-6 lg:py-16">
      <header className="mx-auto max-w-2xl text-center">
        <h2
          id="branches-heading"
          className="font-serif text-mobile-heading-2 font-semibold text-neutral-black sm:text-heading-4 lg:text-heading-3"
        >
          {BRANCHES_HEADING}
        </h2>
        <p className="mt-4 text-mobile-body-2 text-neutral-600 sm:text-body-2">
          {BRANCHES_SUBTITLE}
        </p>
      </header>

      <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200/80 lg:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
          <div className="border-b border-neutral-100 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:border-neutral-100">
            <div className="space-y-8">
              {BRANCH_REGIONS.map(({ region, addresses }) => (
                <div key={region}>
                  <h3 className="font-serif text-mobile-heading-3 font-semibold text-neutral-black sm:text-heading-4">
                    {region}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {addresses.map((address) => (
                      <li key={address} className="flex gap-2">
                        <MapPinIcon
                          className="mt-0.5 size-5 shrink-0 text-primary"
                          aria-hidden
                        />
                        <span className="text-mobile-body-2 text-neutral-700 sm:text-body-3">
                          {address}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[280px] min-w-0 bg-neutral-100 lg:min-h-[420px]">
            <iframe
              title="Bản đồ vị trí"
              src={CONTACT_MAP_EMBED_URL}
              className="absolute inset-0 h-full w-full border-0 grayscale-[35%] contrast-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
