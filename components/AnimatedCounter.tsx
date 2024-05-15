"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp end={amount} prefix="$" decimal="," decimals={2} />
    </div>
  );
};

export default AnimatedCounter;
