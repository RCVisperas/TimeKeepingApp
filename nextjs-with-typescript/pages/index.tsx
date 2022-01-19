import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
const Home: NextPage = ({ ToogleTheme }) => {
  return (
    <Paper>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onClick={ToogleTheme}>Change Mode</Button>
          <div>
            <Stack
              sx={{
                my: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <form>
                <Typography variant="h1">New Category</Typography>

                <TextField
                  id="CategoryName"
                  label="Category Name"
                  required
                  sx={{
                    width: "100%",
                  }}
                />

                <Button
                  type={"submit"}
                  variant="outlined"
                  sx={{
                    marginLeft: 2,
                  }}
                >
                  Submit Category
                </Button>
              </form>
            </Stack>
            <Typography variant="h4" component="h1" gutterBottom></Typography>
            <Link href="/test" color="secondary">
              Go to the test page
            </Link>
            <ProTip />
            <Copyright />
          </div>
        </Box>
      </Container>
    </Paper>
  );
};

export default Home;
