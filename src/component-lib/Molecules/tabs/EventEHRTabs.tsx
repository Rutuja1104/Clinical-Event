import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

interface EventEHRTabsProps {
  tabList?: any;
  defaultSelectedValue?: string;
  onChangeTab: (tabName: any) => void;
}

export default function EventEHRTabs({
  tabList = [
    { label: "Tab1", value: "1" },
    { label: "Tab1", value: "2" },
  ],
  defaultSelectedValue = "1",
  onChangeTab,
}: EventEHRTabsProps) {
  const selectedTabStyle = {
    color: "#565656",
    textTransform: "none",
    fontWeight: 500,
    fontFamily: "Inter",
    fontSize: "16px",
    "&.Mui-selected": {
      backgroundColor: "#F0F9FF",
      color: "#005596",
    },
  };
  const [value, setValue] = React.useState(
    defaultSelectedValue ? defaultSelectedValue : "1"
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    onChangeTab(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            variant="fullWidth"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            {tabList?.map((data: any) => (
              <Tab
                key={data?.value}
                label={data?.label}
                value={data?.value}
                sx={selectedTabStyle}
              />
            ))}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
