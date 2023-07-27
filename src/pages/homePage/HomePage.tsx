import React from "react";
import { TABS as HOME_PAGE_TABS, useHomePageState } from './homePageState';
import { HomePageTabWrapper, ButtonsContainer, LogoutButtonContainer, WelcomeText } from "./styles/HomePage";
import PageBackground from "pagesShared/Background";
import { AccountTab } from "./tabs/AccountTab";
import { RewardsTab } from "./tabs/RewardsTab";
import BalanceProjectionTab from "./tabs/BalanceProjectionTab";
import { WoofTab } from "./tabs/WoofTab";
import LogoutButton from "components/widget/logoutButton/LogoutButton";
import ColoredTabButton from "components/widget/tabButton/TabButton";
import { dollarSign, present, dog, balance } from "images/icons";
import Spacer from "components/position/Spacer";


const BALANCE_PROJECTIONS_TAB = "BALANCE_PROJECTIONS_TAB";

const TABS = { ...HOME_PAGE_TABS, BALANCE_PROJECTIONS_TAB };

const TAB_COMPONENTS = {
  [TABS.ACCOUNT_TAB]: <AccountTab />,
  [TABS.REWARDS_TAB]: <RewardsTab />,
  [TABS.WOOF_TAB]: <WoofTab />,
  [TABS.BALANCE_PROJECTIONS_TAB]: <BalanceProjectionTab />
};

const HomePage = () => {
  type TabKeys = typeof TABS[keyof typeof TABS];
  type TabOption = {
    tab: TabKeys,
    color: string,
    label: string,
    svgPath: string,
    outlineColor: string | null
  };
  const [state, dispatch] = useHomePageState();
  const [selectedTab, setSelectedTab] = React.useState<TabKeys>(TABS.ACCOUNT_TAB);

  const switchTab = (tab: TabKeys) => {
    setSelectedTab(tab);
    dispatch({ type: 'SWITCH_TAB', payload: { newTab: tab } });
  };

  const TabComponent = TAB_COMPONENTS[state.currTab];

  const tabOptions: TabOption[] = [
    {
      tab: TABS.ACCOUNT_TAB,
      color: "#CFE795",
      label: "Account",
      svgPath: dollarSign,
      outlineColor: null
    },
    {
      tab: TABS.REWARDS_TAB,
      color: "#CD7A9A",
      label: "Rewards",
      svgPath: present,
      outlineColor: "#CD7A9A"
    },
    {
      tab: TABS.WOOF_TAB,
      color: "#0F1B2D",
      label: "Woof",
      svgPath: dog,
      outlineColor: null
    },
    {
      tab: TABS.BALANCE_PROJECTIONS_TAB,
      color: "#A9D0F5",
      label: "Forecast",
      svgPath: balance,
      outlineColor: null
    },
  ];

  return (
    <PageBackground>
      <Spacer height={24} />
      <WelcomeText alignSelf="flex-start" textAlign="left" marginBottom="12px">
        Welcome back, Billy
      </WelcomeText>
      <ButtonsContainer>
        {tabOptions.map(({ tab, color, label, svgPath, outlineColor }) => (
          <ColoredTabButton
            key={tab}
            color={color}
            label={label}
            svgPath={svgPath}
            outlineColor={outlineColor}
            selected={selectedTab === tab}
            onClick={() => switchTab(tab)}
          />
        ))}
      </ButtonsContainer>
      <HomePageTabWrapper>
        {TabComponent}
      </HomePageTabWrapper>
      <LogoutButtonContainer>
        <LogoutButton onLogout={() => {}} />
      </LogoutButtonContainer>
    </PageBackground>
  );
};

export default HomePage;
