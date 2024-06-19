import React from "react";
import Link from "next/link";
import Button from "./ui/Button";

function InfoBox({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800,",
  buttonInfo,
  children,
}) {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-m`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children} </p>
      <Button intent="secondary" text={buttonInfo.text}>
      <Link
        href={buttonInfo.link}
      />
      </Button>
    </div>
  );
}

export default InfoBox;
