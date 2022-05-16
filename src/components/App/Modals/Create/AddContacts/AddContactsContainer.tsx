import React from "react";

import { AddContactsComponent } from "./AddContactsComponent";

interface IAddContactsProps {
  className?: string;
}

export function AddContacts({ className }: IAddContactsProps) {
  return <AddContactsComponent className={className} />;
}
