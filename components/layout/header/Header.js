import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import styles from '../../../styles/components/Header.module.scss';

export default function Header(props) {
    const { user } = useContext(AuthContext);

    return (
        <div id={styles.header}>
            <div className={styles.mobileHeaderLogo}>
                <div>
                    <img height={35} src="/img/short-icon.png" />
                </div>
            </div>
            <div className={styles.breadcrumbContainer}>
                {props.paths.map((p, index) => (
                    <div key={index} className={styles.pathFragment}>
                        <span className={styles.separator}>
                            {index > 0 ? (
                                <img src="/img/caret-right-black.svg" />
                            ) : (
                                ''
                            )}
                        </span>
                        <span>{p}</span>
                    </div>
                ))}
            </div>
            <div className={styles.navlinks}>
                <div className={styles.inputContainer}>
                    <input id={styles.searchbar} />
                    <img height={25} src="/img/search-gray.svg" />
                </div>
                <div className={styles.profile}>
                    <img height={30} src="/img/user-blue.svg" />
                </div>
            </div>
        </div>
    );
}

Header.defaultProps = {
    paths: [],
};
