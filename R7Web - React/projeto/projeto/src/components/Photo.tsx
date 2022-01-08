type Props = {
    url: string;
    alt?: string;
    legend?: string;
}

export const Photo = ( {url, alt, legend} : Props ) => {
    return (
        <div>
            <img src={url} alt={alt} />
            <p>{legend}</p>
        </div>
    );
}