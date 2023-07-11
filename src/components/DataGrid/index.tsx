import React, { useState } from 'react';

import Paginator from '@liwe3/react-paginator';
import Modal from '@liwe3/react-modal';

interface Column {
    name: string;
    title?: string;
    type: 'string' | 'int' | 'number' | 'date';
    searchable?: boolean;
    align?: 'left' | 'center' | 'right';
}

interface Action {
    label: string;
    onClick: ( row: any ) => void;
    icon?: string;
}

interface Props {
    columns: Column[];
    data: any[];
    actions?: Action[];
}

const ROWS_PER_PAGE = 10;

const DataGrid: React.FC<Props> = ( { columns, data, actions } ) => {
    const [ page, setPage ] = useState( 1 );
    const [ searchTerm, setSearchTerm ] = useState( '' );
    const [ showColumnsModal, setShowColumnsModal ] = useState( false );
    const [ visibleColumns, setVisibleColumns ] = useState( columns.map( ( column ) => column.name ) );
    const filteredData = data.filter( ( row ) =>
        Object.values( row ).some( ( value ) => typeof value === 'string' && value.includes( searchTerm ) )
    );
    const totalPages = Math.ceil( filteredData.length / ROWS_PER_PAGE );
    const start = ( page - 1 ) * ROWS_PER_PAGE;
    const end = start + ROWS_PER_PAGE;
    const visibleData = filteredData.slice( start, end );

    const doSearchTerm = ( term: string ) => {
        setPage( 1 );
        setSearchTerm( term );
    };

    const paginatorPageChange = ( page: number ) => {
        setPage( page );
    };

    const toggleColumnVisibility = ( columnName: string ) => {
        if ( visibleColumns.includes( columnName ) ) {
            setVisibleColumns( visibleColumns.filter( ( name ) => name !== columnName ) );
        } else {
            setVisibleColumns( [ ...visibleColumns, columnName ] );
        }
    };

    const handleColumnsModalSave = () => {
        setShowColumnsModal( false );
    };

    return (
        <div className="liwe3-datagrid">
            <table>
                <thead>
                    <tr>
                        {visibleColumns.map( ( columnName ) => {
                            const column = columns.find( ( c ) => c.name === columnName );
                            return (
                                <th key={columnName} align={column?.align ?? 'left'}>
                                    {column?.title ?? columnName}
                                </th>
                            );
                        } )}
                        {actions && <th>Actions</th>}
                        <th>
                            <button onClick={() => setShowColumnsModal( true )}>Columns</button>
                        </th>
                    </tr>
                    <tr>
                        {columns.map( ( column ) =>
                            column.searchable ? (
                                <th key={column.name}>
                                    <input
                                        type="text"
                                        placeholder={`Search ${ column.name }`}
                                        value={searchTerm}
                                        onChange={( e ) => doSearchTerm( e.target.value )}
                                    />
                                </th>
                            ) : (
                                <th key={column.name} />
                            )
                        )}
                        {actions && <th />}
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {visibleData.map( ( row, i ) => (
                        <tr key={i}>
                            {visibleColumns.map( ( columnName ) => (
                                <td key={columnName} align={columns.find( ( c ) => c.name === columnName )?.align ?? 'left'}>
                                    {row[ columnName ]}
                                </td>
                            ) )}
                            {actions && (
                                <td>
                                    {actions.map( ( action, i ) => (
                                        <button key={i} onClick={() => action.onClick( row )}>
                                            {action.label}
                                        </button>
                                    ) )}
                                </td>
                            )}
                            <td />
                        </tr>
                    ) )}
                </tbody>
            </table>
            <Paginator
                currentPage={page}
                totalRows={data.length}
                rowsPerPage={ROWS_PER_PAGE}
                onPageChange={paginatorPageChange}
            />
            {showColumnsModal &&
                <Modal
                    title="Columns"
                    body={columns.map( ( column ) => (
                        <div key={column.name}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={visibleColumns.includes( column.name )}
                                    onChange={() => toggleColumnVisibility( column.name )}
                                />
                                {column.title ?? column.name}
                            </label>
                        </div>
                    ) )}

                    onOk={handleColumnsModalSave}
                />
            }
        </div>
    );
};

export default DataGrid;