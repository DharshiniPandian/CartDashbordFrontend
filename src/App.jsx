import { Box, Container, Stack } from "@mui/material"
import React, { useState, useEffect } from "react"
import Sales from "./pages/Sales";
import Router from "./router/Router";
import SideBar from "./components/SideBar";
import Temp from "./temp";

function App() {
  return (
    <Stack direction ='row'>
    <Box flex={1}>
    <SideBar /></Box>
    <Box flex={16}>
    <Router /></Box>
  </Stack>  

  // <Temp/>

  )
}

export default App
