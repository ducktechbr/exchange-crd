import Router from 'next/router';
import { useEffect } from 'react';
import { destroyCookie } from 'nookies';

export default function logout(props) {
    useEffect(() => {
        destroyCookie(null, 'credcoin.token');
        window.location.href = '/login';
    }, []);

    return <></>;
}
