import { CSSProperties } from "react";

export interface AppTheme {
    light: CSSProperties;
    dark: CSSProperties;
}

export const AppStyle:AppTheme = {
    light: {
        backgroundColor: 'hsl(0, 0%, 98%)',
        transition: 'all 0.5s ease'
    },
    dark: {
        backgroundColor: 'hsl(207, 26%, 17%)',
        color: 'hsl(0, 0%, 100%)',
        transition: 'all 0.5s ease'
    }
}

export const ComponentStyle:AppTheme = {
    light: {
        backgroundColor: 'hsl(0, 0%, 100%)',
        color: 'hsl(200, 15%, 8%)',
        transition: 'all 0.5s ease'
    },
    dark: {
        backgroundColor: 'hsl(209, 23%, 22%)',
        color: 'hsl(0, 0%, 100%)',
        transition: 'all 0.5s ease',
        boxShadow: 'none'
    }
}