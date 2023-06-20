/* eslint-disable jsx-a11y/alt-text */
/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022.12.06 - Bom Princípio - RS
 */
import React, { useState } from 'react';
import { DefaultButton } from '../StyledComponents/styled_buttons';
import loading_icon from './resources/loading.svg';
import './style.scss';


// eslint-disable-next-line import/no-anonymous-default-export
export default (props: {
    children: React.ReactElement | string,
    className?: string,
    inactive?: boolean,
    bold?: boolean,
    inverse?: boolean,
    action: () => Promise<boolean>,
    small?: boolean
}) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [failed, setFailed] = useState<boolean>(false);

    const flagFail = () => {
        setFailed(true);
        setTimeout(() => {
            setFailed(false);
        }, 2000);
    }

    return (
        <DefaultButton className={`LoadingButton ${props.className} ${failed ? 'failed' : ''}`} bold={props.bold} inverse={props.inverse} inactive={props.inactive} onClick={async e => {
            e.preventDefault();
            if (!props.inactive) {
                if (!loading) {
                    setLoading(true);
                    if (! await props.action()) {
                        flagFail();
                    }
                    setLoading(false);
                }
            }
        }}>
            <span>{props.children}</span>
            {
                loading &&
                <img src={loading_icon} className="loadingimg" />
            }
        </DefaultButton>
    );

}