import React from "react";

import { ContactComponent } from "./ContactComponent";

interface IContactProps {
  className?: string;
}

export function Contact({ className }: IContactProps) {
  return <ContactComponent className={className} />;
}
