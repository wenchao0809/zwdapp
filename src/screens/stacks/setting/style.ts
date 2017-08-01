import { Widgets } from "summer";
let {
    color_base,
    color_background,
    color_theme,
    font_size_caption
} = Widgets.theme;

export const styles: any = {
    header: {
        backgroundColor: "#FFF"
    },
    grid: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    listContainer: {
        backgroundColor: "#FFF",
        marginTop: 18
    },
    listItem: {
        height: 50,
    },
    lastItem: {
        borderBottomWidth: 0
    },
    logoutText: {
        color: color_theme,
        textAlign: "center"
    },
    cacheInfo: {
        color: color_base,
    }
}