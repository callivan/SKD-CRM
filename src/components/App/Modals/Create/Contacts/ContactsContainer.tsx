import React, { useContext } from "react";
import { SET_CONTACT } from "../../../../../hooks/useUserReducer";
import { UserContext } from "../CreateContainer";
import { generationId } from "../functions/generationId";
import { ContactsComponent } from "./ContactsComponent";

interface IContactsProps {
  className?: string;
}

export function Contacts({ className }: IContactsProps) {
  const userContext = useContext(UserContext);

  if (!userContext) return null;

  const { userState, userDispatch } = userContext;

  function HandleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target;

    if (!target || !(target instanceof HTMLElement)) return;

    if (target.classList.contains("add-contacts__btn")) {

      userDispatch({
        type: SET_CONTACT,
        payload: {
          id: userState.social
            ? generationId(userState.social.map((contact) => contact.id))
            : generationId(null),
          type: "phone",
          data: "",
        },
      });
    }
  }

  return (
    <div
      className={[
        "add-contacts",
        className,
        userState.social && userState.social.length ? "add" : "",
      ].join(" ")}
      onClick={(e) => HandleClick(e)}
    >
      <ContactsComponent state={userState} dispatch={userDispatch} />
    </div>
  );
}
