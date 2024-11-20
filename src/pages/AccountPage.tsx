import React, { useState } from 'react';
import TopNavBar from '../components/TopNavBar';
import { Provider, defaultTheme, Grid, View } from '@adobe/react-spectrum';
import TransitBar from "../components/TransitBar";
import TripPlanner from '../components/TripPlanner';
import Departures from "../components/Departures";
import UpdateAccount     from "../components/UpdateAccount";

// Nishil
// Arranges home page layout using react-spectrum and grid
const HomePage: React.FC = () => {
    const [selectedView, setSelectedView] = useState('planner');

    return (
        <Provider theme={defaultTheme}>
            <Grid
                areas={[
                    'header header',
                    'content content',
                    'footer  footer'
                ]}
                columns={['1fr', '1fr']}
                rows={['size-1000', '1fr', 'size-1000']}
                height="100vh"
                gap="size-0"
            >
                <View colorVersion={6} borderWidth="thin" backgroundColor="orange-500" gridArea="header">
                    <TopNavBar />
                </View>
                <View colorVersion={6} borderWidth="thin" backgroundColor="orange-500" gridArea="content">
                    <UpdateAccount />
                </View>
                <View colorVersion={6} borderWidth="thin" backgroundColor="orange-500" gridArea="footer" />
            </Grid>
        </Provider>
    );
}

export default HomePage;


