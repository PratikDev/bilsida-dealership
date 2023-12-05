import { CarFront } from "lucide-react";
import Analytics from "../Analytics";

export default function ProfileAnalyticsComp() {
  return (
    <>
      <section className="grid grid-cols-3 divide-x-2 shadow-md rounded-3xl bg-background p-5">
        <Analytics
          number={5212}
          percentage={16}
          profit
          title="Visits on car info page"
        />

        <Analytics
          number={1973}
          percentage={1}
          profit={false}
          title="Visits on your site"
        />

        <Analytics
          number={52}
          title="Cars in stock"
          Icon={CarFront}
          withDescription={false}
        />
      </section>
    </>
  );
}
