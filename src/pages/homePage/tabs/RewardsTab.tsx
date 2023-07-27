import useGetRewardsQuery from "graphql/generated/queries/getRewardsQuery";
import { LargeText } from "mixins/Font";
import React from "react"
import Bone from 'images/bone.png'
import { RewardsText, BonesText, BoneImage, DescriptionText } from "../styles/RewardsTab";

export type RewardsTabProps = {}

export const RewardsTab = ({}: RewardsTabProps) => {
  const { data, loading } = useGetRewardsQuery();

  const rewards = data && data.getRewards.success ? data.getRewards.data : null;

  if (loading) {
    return <>Loading...</>
  }

  return (
    <>
      {rewards ? (
        <>
          <RewardsText>Your rewards</RewardsText>
          <BoneImage src={Bone} alt="Bone" />
          <BonesText>{rewards.bones} Bones</BonesText>
          <DescriptionText>
            You’ll earn a bone every time you achieve a “good boy” status.
          </DescriptionText>
        </>
      ) : (
        <LargeText>No reward data available.</LargeText>
      )}
    </>
  );
};
