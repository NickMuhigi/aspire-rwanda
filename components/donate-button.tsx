"use client";
import { useState } from "react";
import DonateModal from "./donate-modal";

type Props = {
  className?: string;
  children: React.ReactNode;
  tag?: "button" | "a";
};

export default function DonateButton({ className, children, tag = "button" }: Props) {
  const [open, setOpen] = useState(false);
  const Tag = tag;
  return (
    <>
      <Tag className={className} onClick={() => setOpen(true)} type={tag === "button" ? "button" : undefined}>
        {children}
      </Tag>
      {open && <DonateModal onClose={() => setOpen(false)} />}
    </>
  );
}
