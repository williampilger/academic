import { ReactNode } from 'react';

type Props = {
    legend?: string;
    children: ReactNode;
}

export const PhotoShild = ( {children, legend} : Props ) => {
    return (
        <div>
            {children}
            <p>{legend}</p>
        </div>
    );
}