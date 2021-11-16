import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeRoute";
import AboutStack from "./aboutRouter";

const SaidRouteDrawerNavigation = createDrawerNavigator({
    Home:{
        screen :HomeStack
    },
    About:{
        screen :AboutStack
    }
});

export default createAppContainer(SaidRouteDrawerNavigation);