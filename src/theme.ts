import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig={
    initialColorMode: 'dark'
}

const theme = extendTheme({ config,
    colors: {
        gray:{
            50:'#f1e4ff',
            100:'#d1b4ff',
            200:'#b183fc',
            300:'#9153f9',
            400:'#7222f6',
            500:'#5909dd',
            600:'#4506ad',
            700:'#31037d',
            800:'#1e014d',
            900:'#0c001f',
        }
    }
})

export default theme;