import React from 'react';
import './gesture-handler';
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './sources/Apis/Redux';
import { ToastConfig } from './sources/Utils';
import Toast from 'react-native-toast-message';
import Routes from './sources/Routes';


const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <Routes />
                <Toast config={ToastConfig} />
            </SafeAreaProvider>
        </Provider>
    )
};


export default App