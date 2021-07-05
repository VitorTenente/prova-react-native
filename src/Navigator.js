import React from 'react'
import { 
    createAppContainer
} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Dashboard from './screens/Dashboard'
import Menu from './components/Menu'
import DefaultCards from './screens/DefaultCards'
import PricingTables from './screens/Pricing'
import ContentBlocks from './screens/Content'
import Forms from './screens/Forms'

const menuConfig = {
    initialRouteName: 'Dashboard',
    contentComponent: Menu,
    contentOptions: {
        labelStyles: { 
            fontWeight: 'normal',
            fontSize: 20
        },
    }
}

const menuRoutes = {
    Dashboard,
    DefaultCards,
    PricingTables,
    ContentBlocks,
    Forms
}

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig)

export default createAppContainer(menuNavigator)