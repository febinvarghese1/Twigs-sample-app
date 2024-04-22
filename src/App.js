import React from "react";
import TicketCard from "./ticket-card";
import { ThemeProvider, Toastr, Box } from "@sparrowengg/twigs-react";

const App = () => {
  return (
    <ThemeProvider theme={{
      fonts: {
        body: 'DM Sans'
      }
    }}>
      <Toastr duration={1000} />
      <Box css={{  
        width: "100vw",
        height: "100vh",
        background: 'lightcoral'
      }}>
      <TicketCard />
      </Box>
    </ThemeProvider>
  );
};

export default App;
