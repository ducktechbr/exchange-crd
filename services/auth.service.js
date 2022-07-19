import { v4 as uuid } from 'uuid';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import $ from 'jquery';

/**
 * ====================================
 * Authentication service via API Proxy
 * ====================================
 * @author codethebasics
 */

// Simulates server side delay
const delay = (amount = 1000) =>
    new Promise((resolve) => setTimeout(resolve, amount));

/**
 * ------
 * SignIn
 * ------
 */
export async function signInRequest(data) {
    const { username, password } = data;

    const user = await fetch(process.env.NEXT_PUBLIC_CRD_PROXY_API_AUTH, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    }).then((response) => response.json());

    return user.response;
}

/**
 * -------------------------------------
 * Recover user data if token is present
 * -------------------------------------
 */
export async function recoverUserInfo(token) {
    const decoded = jwt.decode(token);
    return {
        token: decoded,
        user: {
            id: parseInt(decoded.id),
            name: decoded.name,
            email: decoded.name,
            level_id: decoded.level_id,
            document_user: decoded.document_user,
        },
    };
}

/**
 * --------
 * New user
 * --------
 */
export async function newUser(data) {
    const {
        name,
        document_type_id,
        document_user,
        email,
        password,
        whatsapp,
        uf,
        city,
    } = data;

    const isUserRegistered = await fetch(
        process.env.NEXT_PUBLIC_CRD_PROXY_API_AUTH + '/new',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                document_type_id: document_type_id,
                document_user: document_user
                    .replaceAll('.', '')
                    .replaceAll('-', ''),
                email: email,
                password: password,
                whatsapp: whatsapp,
                uf: uf,
                city: city,
            }),
        }
    ).then((response) => response.json());

    console.log('retorno', isUserRegistered);

    return isUserRegistered;
}
