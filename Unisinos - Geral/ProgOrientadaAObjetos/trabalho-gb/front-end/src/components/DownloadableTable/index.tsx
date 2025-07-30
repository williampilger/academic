import React from 'react';
import { RiDownloadCloud2Fill } from 'react-icons/ri';
import './style.scss';

type DownloadTableProps = {
  children: React.ReactElement<any>[] | React.ReactElement<any>,
  className?: string
}

const DownloadTable = (props: DownloadTableProps) => {

    const downloadCSV = () => {
        let children  = Array.isArray(props.children) ? props.children : [props.children];
        const tableRows: string[] = [];

        // Coletando dados das linhas da tabela
        children.forEach((child: React.ReactElement<any>) => {
            const rowData: string[] = React.Children.map(child.props.children, (cell: React.ReactElement<any>) =>
                String(cell.props.children)
            );
            tableRows.push(rowData.join(','));
        });

        // Criando o conteúdo CSV
        const csvContent = 'data:text/csv;charset=utf-8,' + tableRows.join('\n');
        const encodedURI = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedURI);
        link.setAttribute('download', 'data.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className={`downloadable-table-component ${props.className}`}>
            <table>{props.children}</table>
            <button className='table-down-btn' onClick={() => downloadCSV()}><RiDownloadCloud2Fill/></button>
        </div>
    );
}

export default DownloadTable;
