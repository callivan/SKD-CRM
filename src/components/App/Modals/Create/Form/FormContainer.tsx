import React from "react";

import { FormComponent } from "./FormComponent";

interface IFormProps {
  className?: string;
}

export function Form({ className }: IFormProps) {
  return <FormComponent className={className} />;
}
