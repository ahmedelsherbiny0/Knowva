import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import HomeIcon from "@mui/icons-material/Home";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import {
  DashboardLayout,
  ThemeSwitcher,
  type SidebarFooterProps,
} from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { Icon } from "@iconify/react";
import { GlobalStyles } from "@mui/system";
import Home from "../Pages/Home";
import UserProfile from "../Pages/UserProfile";
import EnrolledCourses from "../Pages/EnrolledCourses";
import HelpCenter from "../Pages/HelpCenter";
import Module1Lesson1 from "../Components/Module1Lesson1";
import { grammer_slides } from "../data/carouselData.json";
import Carousel from "../Components/Carousel";

const pages = ["home", "user-profile", "enrolled-courses", "help-center"];

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "home",
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    segment: "user-profile",
    title: "User's Profile",
    icon: <AccountCircleIcon />,
  },
  {
    segment: "enrolled-courses",
    title: "Enrolled Courses",
    icon: <LocalLibraryIcon />,
    children: [
      {
        segment: "English A2",
        title: "English A2",
        icon: <LocalLibraryIcon />,
        children: [
          {
            segment: "Module 1",
            title: "Module 1",
            icon: <LocalLibraryIcon />,
            children: [
              {
                segment: "Lesson 1",
                title: "Lesson 1",
                icon: <LocalLibraryIcon />,
              },
              {
                segment: "Lesson 2",
                title: "Lesson 2",
                icon: <LocalLibraryIcon />,
              },
              {
                segment: "Lesson 3",
                title: "Lesson 3",
                icon: <LocalLibraryIcon />,
              },
              {
                segment: "Lesson 4",
                title: "Lesson 4",
                icon: <LocalLibraryIcon />,
              },
            ],
          },
          {
            segment: "enrolled-courses",
            title: "Module 2",
            icon: <LocalLibraryIcon />,
            children: [
              {
                segment: "M2-Lesson 1",
                title: "Lesson 5",
                icon: <LocalLibraryIcon />,
              },
              {
                segment: "M2-Lesson 2",
                title: "Lesson 6",
                icon: <LocalLibraryIcon />,
              },
              {
                segment: "M2-Lesson 3",
                title: "Lesson 7",
                icon: <LocalLibraryIcon />,
              },
              {
                segment: "M2-Lesson 4",
                title: "Lesson 8",
                icon: <LocalLibraryIcon />,
              },
            ],
          },
          {
            segment: "enrolled-courses",
            title: "Module 3",
            icon: <LocalLibraryIcon />,
            children: [
              {
                segment: "M3-Lesson 1",
                title: "Lesson 9",
                icon: <LocalLibraryIcon />,
              },
              {
                segment: "M3-Lesson 2",
                title: "Lesson 10",
                icon: <LocalLibraryIcon />,
              },
              {
                segment: "M3-Lesson 3",
                title: "Lesson 11",
                icon: <LocalLibraryIcon />,
              },
              {
                segment: "M3-Lesson 4",
                title: "Lesson 12",
                icon: <LocalLibraryIcon />,
              },
            ],
          },
          {
            segment: "enrolled-courses",
            title: "Module 4",
            icon: <LocalLibraryIcon />,
            children: [
              {
                segment: "M4-Lesson 1",
                title: "Lesson 13",
                icon: <LocalLibraryIcon />,
              },
              {
                segment: "M4-Lesson 2",
                title: "Lesson 14",
                icon: <LocalLibraryIcon />,
              },
              {
                segment: "M4-Lesson 3",
                title: "Lesson 15",
                icon: <LocalLibraryIcon />,
              },
              {
                segment: "M4-Lesson 4",
                title: "Lesson 16",
                icon: <LocalLibraryIcon />,
              },
            ],
          },
        ],
      },
      {
        segment: "enrolled-courses",
        title: "German C1",
        icon: <LocalLibraryIcon />,
      },
    ],
  },
  {
    segment: "help-center",
    title: "Help Center",
    icon: <SupportAgentIcon />,
  },
  {
    segment: "logout",
    title: "Logout",
    icon: <LogoutIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  console.log(pathname);
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {pathname === "/home" && <Home />}
      {pathname === "/user-profile" && <UserProfile />}
      {pathname === "/enrolled-courses" && <EnrolledCourses />}
      {pathname === "/help-center" && <HelpCenter />}
      {pathname === "/enrolled-courses/English%20A2/Module%201/Lesson%201" && (
        <Module1Lesson1 />
      )}
    </Box>
  );
}


function ToolbarActionsSearch() {
  return (
    <Stack direction="row">
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: "inline", md: "none" },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{ display: { xs: "none", md: "inline-block" }, mr: 1 }}
      />
      <ThemeSwitcher />
    </Stack>
  );
}

function SidebarFooter({ mini }: SidebarFooterProps) {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: "nowrap", overflow: "hidden" }}
    >
      {mini
        ? ""
        : `© ${new Date().getFullYear()} Made with love by passionate developers`}
    </Typography>
  );
}

function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Icon icon="tdesign:education" className={`w-8 h-8 text-[#42a5f5]`} />{" "}
      <Typography variant="h6">Knowva</Typography>
    </Stack>
  );
}

interface DemoProps {
  window?: () => Window;
}

export default function DashboardLayoutSlots(props: DemoProps) {
  const { window } = props;
  const router = useDemoRouter("/dashboard");
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <GlobalStyles
        styles={{
          ".MuiDrawer-root, .MuiDrawer-paper": {
            width: 280,
          },
        }}
      />
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
          toolbarActions: ToolbarActionsSearch,
          sidebarFooter: SidebarFooter,
        }}
      >
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
