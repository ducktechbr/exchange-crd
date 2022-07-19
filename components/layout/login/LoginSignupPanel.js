import styles from '/styles/components/LoginSignupPanel.module.scss';

import Login from './index';
import NewUser from '../user/newUser';
import { useState } from 'react';

export default function LoginSignupPanel(props) {
    const [loginView, setLoginView] = useState(true);
    const [signupView, setSignupView] = useState(false);

    const switchToLoginView = () => {
        setSignupView(false);
        setLoginView(true);
    };

    const switchToSignupView = () => {
        setLoginView(false);
        setSignupView(true);
    };

    const renderView = () => {
        if (loginView) {
            return <Login signUp={() => switchToSignupView()} />;
        }
        if (signupView) {
            return <NewUser login={() => switchToLoginView()} />;
        }
    };

    return (
        <div className={styles.loginSignupPanelContainer}>{renderView()}</div>
    );
}
