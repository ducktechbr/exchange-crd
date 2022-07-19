import { useEffect } from 'react';
import Router from 'next/router';

export default function Index(props) {
    useEffect(() => {
        // redirect
        props.setPaths(['Home']);
        Router.push('/home');
    }, []);

    return <></>;
}
