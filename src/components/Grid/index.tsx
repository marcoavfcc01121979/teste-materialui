import * as React from 'react';
import { 
  DataGrid, 
  GridColDef, 
  GridCsvExportOptions, 
  GridCsvGetRowsToExportParams, 
  gridPaginatedVisibleSortedGridRowIdsSelector, 
  GridToolbarContainer, 
  GridToolbarExport, 
  useGridApiContext 
} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Button, ButtonProps, createSvgIcon } from '@mui/material';
import { DataGridPro } from '@mui/x-data-grid-pro';

const getRowsFromCurrentPage = ({ apiRef }: GridCsvGetRowsToExportParams) =>
  gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);

  const ExportIcon = createSvgIcon(
    <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />,
    "SaveAlt"
  );

function CustomToolbar() {
  const apiRef = useGridApiContext();

  const handleExport = (options: GridCsvExportOptions) =>
    apiRef.current.exportDataAsCsv(options);

  const buttonBaseProps: ButtonProps = {
    color: "primary",
    size: "small",
    startIcon: <ExportIcon />
  };

  return (
    <GridToolbarContainer>
      {/* <GridToolbarExport /> */}
      <Button
          {...buttonBaseProps}
          onClick={() =>
            handleExport({ getRowsToExport: getRowsFromCurrentPage })
          }
        >
          Exportar
      </Button>
    </GridToolbarContainer>
  );
}

const columns: GridColDef[] = [
  { field: 'pedido', headerClassName: 'style', headerAlign: 'center',headerName: 'PEDIDO', width: 130 },
  { field: 'item', headerClassName: 'style', headerAlign: 'center',headerName: 'ITEM', width: 130 },
  { field: 'condicaoEspecial', headerClassName: 'style', headerAlign: 'center',headerName: 'CONDIÇÃO ESPECIAL', width: 200 },
  { field: 'atraso', headerClassName: 'style', headerAlign: 'center',headerName: 'ATRASO', width: 150 },
  { field: 'faseAtual', headerClassName: 'style', headerAlign: 'center',headerName: 'FASE ATUAL', width: 150 },
  { field: 'fornecedor', headerClassName: 'style', headerAlign: 'center',headerName: 'FORNECEDOR', width: 235 },
  { field: 'foco', headerClassName: 'style', headerAlign: 'center',headerName: 'FOCO', width: 150 },
  { field: 'ultimaAnotacao', headerClassName: 'style', headerAlign: 'center',headerName: 'ULTIMA ANOTAÇÃO', width: 200 },
  { field: 'qtd', headerClassName: 'style', headerAlign: 'center',headerName: 'QTD', width: 70 },
  { field: 'centro', headerClassName: 'style', headerAlign: 'center',headerName: 'CENTRO', width: 100 },
];

const rows = [
  { 
    id: 1, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 2, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 3, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 4, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 5, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 6, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 7, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 8, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 9, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 10, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 11, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 12, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 13, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 14, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 15, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 16, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 17, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 18, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 19, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 20, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 21, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 22, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 23, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 24, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 25, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 26, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 27, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 28, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 29, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 30, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 31, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 32, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 33, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 34, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 35, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 36, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 37, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 38, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 39, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 40, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 41, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 42, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 43, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 44, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 45, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 46, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 47, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 48, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 49, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 50, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 51, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 52, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 53, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 54, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 55, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 56, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 57, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 58, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 59, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 60, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 61, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 62, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 63, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 64, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 65, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 66, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 67, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 68, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 69, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 70, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 71, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 72, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 73, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 74, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 75, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 76, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 77, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 78, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 79, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 80, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 81, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 82, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 83, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
  { 
    id: 84, pedido: 459933492, 
    item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
    atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
    lastName: 'Snow', firstName: 'Jon', 
    age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
    foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
    qtd: '16 UN', centro: 4115
  },
];

setTimeout(() => {
  document.querySelector("#root > div > div.MuiBox-root.css-5dekct > div > div:nth-child(1) > div").style.position = 'relative'
}, 5000);

export default function DataTable() {
  const [pedidos, setPedidos] = React.useState([]);

  const data = React.useRef({
    rows: [
      { 
        id: 1, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 2, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 3, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 4, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 5, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 6, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 7, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 8, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 9, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 10, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 11, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 12, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 13, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 14, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 15, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 16, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 17, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 18, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 19, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 20, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 21, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 22, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 23, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 24, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 25, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 26, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 27, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 28, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 29, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 30, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 31, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 32, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 33, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 34, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 35, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 36, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 37, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 38, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 39, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 40, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 41, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 42, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 43, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 44, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 45, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 46, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 47, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 48, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 49, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 50, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 51, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 52, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 53, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 54, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 55, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 56, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 57, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 58, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 59, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 60, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 61, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 62, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 63, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 64, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 65, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 66, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 67, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 68, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 69, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 70, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 71, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 72, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 73, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 74, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 75, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 76, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 77, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 78, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 79, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 80, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 81, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 82, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 83, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
      { 
        id: 84, pedido: 459933492, 
        item: 10, condicaoEspecial: 'Cancelar (Ex. 20)', 
        atraso: 'No prazo (24 dias)', faseAtual: 'Faturado',
        lastName: 'Snow', firstName: 'Jon', 
        age: 35, fornecedor: 'Yokogawa América do Sult Ltda.',
        foco: 'Frete Especial', ultimaAnotacao: 'Não cumpriu o agendamento; Solicitado 1 vez ;  10/03 (...)',
        qtd: '16 UN', centro: 4115
      },
    ],
    columns: [
      { field: 'pedido', headerClassName: 'style', headerAlign: 'center',headerName: 'PEDIDO', width: 130 },
      { field: 'item', headerClassName: 'style', headerAlign: 'center',headerName: 'ITEM', width: 130 },
      { field: 'condicaoEspecial', headerClassName: 'style', headerAlign: 'center',headerName: 'CONDIÇÃO ESPECIAL', width: 200 },
      { field: 'atraso', headerClassName: 'style', headerAlign: 'center',headerName: 'ATRASO', width: 150 },
      { field: 'faseAtual', headerClassName: 'style', headerAlign: 'center',headerName: 'FASE ATUAL', width: 150 },
      { field: 'fornecedor', headerClassName: 'style', headerAlign: 'center',headerName: 'FORNECEDOR', width: 235 },
      { field: 'foco', headerClassName: 'style', headerAlign: 'center',headerName: 'FOCO', width: 150 },
      { field: 'ultimaAnotacao', headerClassName: 'style', headerAlign: 'center',headerName: 'ULTIMA ANOTAÇÃO', width: 200 },
      { field: 'qtd', headerClassName: 'style', headerAlign: 'center',headerName: 'QTD', width: 70 },
      { field: 'centro', headerClassName: 'style', headerAlign: 'center',headerName: 'CENTRO', width: 100 }
    ],
  })

  React.useEffect(() => {
    setPedidos(data.current.rows);
  },[])

  console.log("pedidos ", pedidos)
  return (
    <Box
      sx={{
        marginTop: '24px',
        width: '100%',
        height: 520,
        paddingInline: 2,
        '& .style': { backgroundColor: '#0A3D62', color: '#FFF' },
        '.css-ptiqhd-MuiSvgIcon-root': {
          color: '#fff'
        },
        '.css-1w5m2wr-MuiDataGrid-virtualScroller': {
          backgroundColor: '#F2F2F3'
        },
        '.css-1j9kmqg-MuiDataGrid-toolbarContainer': {
          position: 'absolute',
          right: '200px',
          marginTop: '-102px'
        },
        '.css-1knaqv7-MuiButtonBase-root-MuiButton-root': {
          background: '#0A3D62',
          color: '#E3E3E3',
          fontStyle: 'normal',
          textTransform: 'none'
        }, 
        '.css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar': {
          display: 'none'
        }
      }}
    >
      <DataGridPro
        rows={pedidos}
        columns={columns}
        loading={!pedidos.length}
        rowHeight={30}
        components={{
          Toolbar: CustomToolbar
        }}
      />
    </Box>
  );
}
