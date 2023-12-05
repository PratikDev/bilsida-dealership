import { mostPopularsList } from "@/CONSTANTS";

import ProfileAnalyticsComp from "@/components/Pages/ProfileAnalyticsComp";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DataTable = ({ list, title }: { list: Object[]; title: string }) => {
  const keys = Object.keys(list[0]);

  return (
    <div className="bg-background rounded-3xl overflow-hidden shadow-md">
      <Table className="caption-top">
        <TableCaption className="text-left text-3xl text-gray-700 dark:text-gray-100 font-bold px-8 py-5">
          {title}
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="px-8 capitalize">Place</TableHead>

            {keys.map((key, index) => (
              <TableHead key={index} className="px-8 capitalize">
                {key}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {list.map((listItem, index) => (
            <TableRow key={index}>
              <TableCell className="px-8">{index + 1}</TableCell>

              {Object.values(listItem).map((value, index) => (
                <TableCell key={index} className="px-8">
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className="space-y-6 p-8">
        <ProfileAnalyticsComp />
        <DataTable list={mostPopularsList} title={`Most popular listings`} />
      </div>
    </>
  );
}
