import { Box } from "@mui/material";
import Navigator from "./Navigator";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import lightTheme from "../styles/lightTheme";
import { useDispatch, useSelector  } from "react-redux";
import { updateDrawer } from '../store/applicationSlice';

export function TeamLayout({ children }: { children: React.ReactNode }) {
  const { drawer } = useSelector((state: any) => state.application);
  const isSmUp = useMediaQuery(lightTheme.breakpoints.up("sm"));
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box
        component="nav"
        sx={{ width: { sm: 256 }, flexShrink: { sm: 0 } }}
      >
        {isSmUp ? null : (
          <Navigator
            PaperProps={{ style: { width: 256 } }}
            variant="temporary"
            open={drawer}
            onClose={() => { dispatch(updateDrawer({ drawer: false }))}}
          />
        )}
        <Navigator
          PaperProps={{ style: { width: 256 } }}
          sx={{ display: { sm: "block", xs: "none" } }}
        />
      </Box>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        { children }
      </Box>
    </Box>
  );
}
