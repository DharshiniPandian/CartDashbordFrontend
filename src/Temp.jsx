import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';  // For Grid2 usage
import { Container, Stack } from "@mui/material"

function ThreeColumnGrid() {
    return (
    //   <Grid container spacing={2}>  {/* Define this as a container */}
    //     {/* First column */}
    //     <Grid >  {/* Define each column as an item */}
    //       <Box
    //         sx={{
    //           bgcolor: 'primary.main',
    //           color: 'pink',
    //           minHeight: '100vh', // Full viewport height to visualize equal columns
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           width:'auto'
    //         }}
    //       >
    //         <Typography variant="h6" align="center">Column 1</Typography>
    //       </Box>
    //     </Grid>
  
    //     {/* Second column */}
    //     <Grid >  {/* Define each column as an item */}
    //       <Box
    //         sx={{
    //           bgcolor: 'secondary.main',
    //           color: 'red',
    //           minHeight: '100vh',
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //            width:'auto'
    //         }}
    //       >
    //         <Typography variant="h6" align="center">Column 2</Typography>
    //       </Box>
    //     </Grid>
  
    //     {/* Third column */}
    //     <Grid >  {/* Define each column as an item */}
    //       <Box
    //         sx={{
    //           bgcolor: 'error.main',
    //           color: 'blue',
    //           minHeight: '100vh',
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //            width:'auto'
    //         }}
    //       >
    //         <Typography variant="h6" align="center">Column 3</Typography>
    //       </Box>
    //     </Grid>
    //   </Grid>
    <Stack direction='row'>
     <Box flex={4}>
        hello
     </Box>
     <Box flex={4} sx={{backgroundColor:'red', height:'100vh'}}>
        hello
     </Box>
     <Box flex={4}>
        hello
     </Box>

    </Stack>
    );
  }
  
  export default ThreeColumnGrid;