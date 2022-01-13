
export const ListaPresenca = () => {
    
    let lista = [
        'William',
        'Alexandre',
        'Diego',
        'Monica',
        'Tiago',
        'Fulano'
    ];

    return (
        <div>
            <h2>Lista de presença</h2>
            <ul>
                {lista.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
}