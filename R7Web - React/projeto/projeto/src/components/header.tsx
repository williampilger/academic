type Props = {
    titulo?: string;
}

export const Header = ( {titulo} : Props) => {
    return (
        <header>
            <h1>{titulo}</h1>
            <hr />
        </header>
    );
}