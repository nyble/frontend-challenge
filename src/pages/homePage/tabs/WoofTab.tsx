import { useApolloClient } from "@apollo/client";
import { useToast } from "components/widget/toast/Toast";
import sendWoofMutation from "graphql/generated/mutations/woofMutation";
import React from "react"
import { StyledWoofButton, WoofText } from "../styles/WoofTab";

export const WoofTab = () => {
  const apolloClient = useApolloClient();
  const [openSuccessToast, openErrorToast] = useToast();

  const onWoof = () => {
    const timestamp = new Date().toISOString();

    sendWoofMutation(apolloClient, { timestamp })
      .then(() => openSuccessToast("Woofed!"))
      .catch(() => openErrorToast("Error during woof"));
  };

  return (
    <>
      <WoofText>Woof</WoofText>
      <StyledWoofButton onClick={onWoof}>Click here to woof</StyledWoofButton>
    </>
  )
}
