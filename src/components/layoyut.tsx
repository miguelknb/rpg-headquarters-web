import { Box } from "@chakra-ui/react"
import React from "react"
import NavBar from "../components/navbar"

const Layout: React.FC<any> = ({children}) => {

  return <>
  <Box>
    <NavBar></NavBar>    
    {children}
  </Box>
  </>
}

export default Layout