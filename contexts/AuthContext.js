import { createContext, useEffect, useState } from 'react';
import { recoverUserInfo, signInRequest } from '../services/auth.service';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

/**
 * ======================
 * Authentication Context
 * ======================
 * @author codethebasics by DuckTech
 */
export const AuthContext = createContext({});

/**
 * ---------------------------------
 * Authentication provider component
 * ---------------------------------
 */
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const { 'credcoin.token': token } = parseCookies();
        if (token) {
            recoverUserInfo(token).then((response) => setUser(response.user));
        }
    }, []);

    const isAuthenticated = !!user;

    /**
     * --------------
     * SignIn request
     * --------------
     */
    const signIn = async ({ username, password }) => {
        // Recover token and user
        const { token, user } = await signInRequest({
            username,
            password,
        });

        // Set cookie with 1 hour maxAge
        setCookie(undefined, 'credcoin.token', token, {
            maxAge: 60 * 60 * 1, // 1 hour
        });

        // Set user into state
        setUser(user);

        // Redirect user
        Router.push('/home');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}
