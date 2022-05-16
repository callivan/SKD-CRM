import React, { useEffect, useLayoutEffect } from "react";

import { useSelector } from "react-redux";
import { StateType } from "../../../../../store/rootTypes";

import { useNavigate } from "react-router-dom";

import { ErrorComponent } from "./ErrorComponent";

import { errorShow } from "./animation/show";

interface IErrorProps {
  className?: string;
}

export function Error({ className }: IErrorProps) {
  const navigate = useNavigate();
  const message = useSelector<StateType, string | null>(
    (state) => state.users.error
  );

  useLayoutEffect(() => {
    if (!message) return;
    errorShow();
  }, []);

  useEffect(() => {
    if (!message) {
      navigate("/", { replace: true });
    }
  }, []);

  if (!message) return null;

  return <ErrorComponent message={message} className={className} />;
}
