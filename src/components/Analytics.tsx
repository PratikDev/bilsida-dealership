import {
  ArrowDown,
  ArrowUp,
  TrendingDown,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const AnalyticIconComp = ({
  Icon,
  stat,
}: {
  Icon: LucideIcon;
  stat?: boolean;
}) => {
  return (
    <>
      <div className="bg-green-100 p-5 rounded-full">
        <Icon
          className={`w-8 h-8 text-green-600 ${
            stat ? "border-green-600 border-l-2 border-b-2" : ""
          }`}
        />
      </div>
    </>
  );
};

type AnalyticsProps = {
  number: number;
  title: string;
  Icon?: LucideIcon;
  percentage?: number;
  profit?: boolean;
  withDescription?: boolean;
};
export default function Analytics({
  number,
  percentage = 0,
  Icon,
  title,
  profit = true,
  withDescription = true,
}: AnalyticsProps) {
  const analyticIcon = Icon ? (
    <AnalyticIconComp Icon={Icon} />
  ) : profit ? (
    <AnalyticIconComp Icon={TrendingUp} stat />
  ) : (
    <AnalyticIconComp Icon={TrendingDown} stat />
  );

  const ProfitIcon = profit ? ArrowUp : ArrowDown;

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        {analyticIcon}

        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <h2 className="font-bold text-3xl">{number}</h2>
          {withDescription && (
            <div className="flex items-center gap-1 text-sm">
              <p
                className={`inline-flex items-center font-bold ${
                  profit ? `text-green-500` : `text-red-500`
                }`}
              >
                <ProfitIcon className="w-4 h-4" />
                <span>{percentage}%</span>
              </p>
              <span className="text-red-500">this month</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
