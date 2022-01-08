type Props = {
    titulo?: string;
}

export const Header = ( {titulo} : Props) => {
    return (
        <>
            <h1>{titulo}</h1>
            <hr />
        </>
    );
}