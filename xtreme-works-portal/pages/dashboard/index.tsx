import Head from "next/head";
import { useSelector } from "react-redux";
import { updateAuthorization } from "../../store/authorizationSlice";

import { TeamLayout } from "../../layout/Dashboard";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Header from "../../layout/Header";
import { NestLayout } from "../../layout/Nested";

const lightColor = "rgba(255, 255, 255, 0.7)";

interface HeaderProps {
  onDrawerToggle: () => void;
}

function DashboardPage(props: HeaderProps) {
  const { dashboard_tab } = useSelector((state: any) => state.application);
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {dashboard_tab === 0
        ? "1"
        : dashboard_tab === 1
        ? "2"
        : dashboard_tab === 2
        ? "3"
        : "4"}
    </div>
  );
}

const getLayout = (page) => <TeamLayout>{page}</TeamLayout>;

export const TeamPageLayout = NestLayout(getLayout, Header);

DashboardPage.PageLayout = TeamPageLayout;

export default DashboardPage;
