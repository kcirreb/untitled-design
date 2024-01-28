import { Card } from "./ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const orders = [
  { orderNo: "1028", paymentStatus: "Paid", totalAmount: "$189.00" },
  { orderNo: "1029", paymentStatus: "Paid", totalAmount: "$279.00" },
  { orderNo: "1030", paymentStatus: "Unpaid", totalAmount: "$259.00" },
  { orderNo: "1031", paymentStatus: "Paid", totalAmount: "$139.00" },
  { orderNo: "1032", paymentStatus: "Pending", totalAmount: "$379.00" },
];

export default function TableCard() {
  return (
    <Card>
      <Table>
        <TableCaption className="mb-4">A list of recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Order No.</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderNo}>
              <TableCell>{order.orderNo}</TableCell>
              <TableCell>{order.paymentStatus}</TableCell>
              <TableCell className="text-right">{order.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right">$1,245.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  );
}
