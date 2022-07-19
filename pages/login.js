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
export default function Component() {
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    useEffect(() => {}, []);

    const handleSignIn = async (data) => {
        const username = data.username.toString().toLowerCase().trim();
        const password = data.password.toString().trim();
        await signIn({
            username: username,
            password: password,
        });
    };

    return (
        <form
            className={styles.loginContainer}
            onSubmit={handleSubmit(handleSignIn)}
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
                    autoComplete="on"
                    {...register('username')}
                />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="inputPassword">Senha</label>
                <input
                    type="password"
                    placeholder="•••••••"
                    autoComplete="on"
                    {...register('password')}
                />
            </div>
            <div className={styles.formControl}>
                <button className={styles.cta}>Entrar</button>
                <div className={styles.subform}>
                    <div>
                        <Link href="/newUser">
                            <a>Cadastre-se</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/recoverPassword">
                            <a>Esqueceu a senha?</a>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
}
