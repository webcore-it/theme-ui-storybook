import {merge, Theme} from "theme-ui";
import {base as preset} from "@theme-ui/presets";

const VARIANTS = {
    primary: {
        color: "bright",
        bg: "primary",
        my: 2
    }
};

export const CustomTheme: Theme = merge(
    preset as Theme,
    {
        colors: {
            dark: "#040404",
            bright: "#f0f0f0",
            primary: "#007777",
            secondary: "#770077",
            background: "bright",
            text: "dark",
        },
        fonts: {
            body: 'HelveticaNeue, "Helvetica Neue", sans-serif',
            heading: 'inherit',
            monospace: 'monospace',
        },
        alerts: {
            ...VARIANTS
        },
        buttons: {
            ...VARIANTS
        },
        messages: {
            ...VARIANTS
        }
    } as Partial<Theme>
);
