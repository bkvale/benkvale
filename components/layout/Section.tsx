import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
}

export function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="w-full">
      {children}
    </section>
  );
}

