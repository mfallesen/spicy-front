import { Avatar, Button, Pane, Text } from 'evergreen-ui'
import React from 'react'
import { Switch } from 'evergreen-ui'

export default function Navbar() {
    return (
        <Pane
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin={24}
        >
            <Button appearance="primary">Profile</Button>
            <Text>Some Text</Text>
            <Avatar name="Mike Fallesen" size={40} />
            <Switch />
            <Button appearance="primary">Login/Logout</Button>
        </Pane>
    )
}
