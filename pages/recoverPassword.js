import styles from '/styles/pages/Login.module.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Link from 'next/link';

/**
 * =====
 * Login
 * =====
 * @author codethebasics by DuckTech
 */
export default function RecoverPassword() {
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    useEffect(() => {}, []);

    const handleRecoverPassword = async (data) => {
        console.log(data);
    };

    return (
        <form
            className={styles.loginContainer}
            onSubmit={handleSubmit(handleRecoverPassword)}
        >
            <div className={styles.formControl} style={{ textAlign: 'center' }}>
                <img src="/img/logo_CRD.png" height={50} />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="inputUsername">Email</label>
                <input
                    type="email"
                    id="inputUsername"
                    placeholder="seu@email.com"
                    {...register('username')}
                />
            </div>
            <div className={styles.formControl}>
                <button className={styles.cta}>Recuperar Senha</button>
                <div className={styles.subform}>
                    <div>
                        <Link href="/login">
                            <a>Entrar</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/newUser">
                            <a>Cadastre-se</a>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
}
