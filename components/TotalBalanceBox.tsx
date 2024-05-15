import React from "react";

import { formatAmount } from "@/lib/utils";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughtNutChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart />
      </div>

      <div className="flex flex-col gap-6">
        <h2>Bank Accounts:{totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <h2 className="total-balance-label">Total Current Balance:</h2>
          <h2 className="total-balance-amount">
            <AnimatedCounter amount={totalCurrentBalance} />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
