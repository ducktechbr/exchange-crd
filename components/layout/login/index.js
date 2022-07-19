import styles from '../../../styles/components/Login.module.scss';

export default function Login(props) {
    return (
        <div id={styles.loginContainer}>
            <div className={styles.loginFormContainer}>
                <div className={styles.headerLogo}>
                    <div>Logo</div>
                </div>
                <div className={styles.headerText}>
                    <div>Log in</div>
                    <div>Use your smart account</div>
                </div>
                <div className={styles.inputContainer}>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className={styles.underInputContainer}>
                    <div>
                        <input
                            type="checkbox"
                            name="rememberMe"
                            id="rememberMeCheckbox"
                        />
                        <label htmlFor="rememberMeCheckbox">Remember me</label>
                    </div>
                    <div>
                        <a href="#">I forgot my password</a>
                    </div>
                </div>
                <div className={styles.ctaContainer}>
                    <button>Connect</button>
                </div>
                <div className={styles.createAccountContainer}>
                    <div>
                        <span>Doesn't have an account?</span>
                    </div>
                    <div>
                        <a href="#" onClick={props.signUp}>
                            Sign up here
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
