import styles from '../../../styles/components/NewUser.module.scss';

export default function NewUser(props) {
    return (
        <div id={styles.newUserContainer}>
            <div className={styles.newUserFormContainer}>
                <div className={styles.headerLogo}>
                    <div>Logo</div>
                </div>
                <div className={styles.headerText}>
                    <div>Sign up</div>
                    <div>Create your smart account</div>
                </div>
                <div className={styles.inputContainer}>
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm password" />
                </div>
                <div className={styles.underInputContainer}>
                    <div>
                        <input
                            type="checkbox"
                            name="rememberMe"
                            id="rememberMeCheckbox"
                        />
                        <label htmlFor="rememberMeCheckbox">
                            I agree to the Terms, Conditions and Privacy
                            Policies
                        </label>
                    </div>
                </div>
                <div className={styles.ctaContainer}>
                    <button>Create Account</button>
                </div>
                <div className={styles.createAccountContainer}>
                    <div>
                        <a href="#" onClick={props.login}>
                            Return to login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
