import React, { ChangeEvent, MouseEvent, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { CarteiraPedidos, Container, ImgPetrobras, InfoCarteiraDePedidosSubTitulos, InfoCarteiraDePedidosTitulos, InfoChave, InfoNome, InfoTringulo } from './styles';
import triangulo from '../../assets/Triangle-pulldown.svg';
import imgPetrobras from '../../assets/marca-petrobras.svg'

export default function Header() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" sx={{ height: 64, borderBottom: 1, borderColor: '#FDC82F', background: '#0A3D62'  }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0.5 ,color: '#FDC82F' }}
            >
              <MenuIcon sx={{ width: 33, height: 33 }} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, width: 84, height: 30 }}>
              eDilig
            </Typography>
              <Container>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  // onClick={handleMenu}
                  color="inherit"
                  sx={{ marginRight: -1 }}
                >
                  <AccountCircle sx={{ width: 45, height: 45, top: 7, left: 1037 }} />
                </IconButton>
                <div>
                  <InfoNome>Marco Ferreira</InfoNome>
                  <InfoTringulo>
                    <InfoChave>DT8s</InfoChave>
                    <img src={triangulo} alt="Trinagulo" />
                  </InfoTringulo>
                </div>
                <ImgPetrobras>
                  { /*<img src={imgPetrobras} alt="Imagen Petrobras" /> */ }
                </ImgPetrobras>
              </Container>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <CarteiraPedidos>
                <InfoCarteiraDePedidosTitulos>Carteiras de pedidos</InfoCarteiraDePedidosTitulos>
                <InfoCarteiraDePedidosSubTitulos>home / carteira-de-pedidos</InfoCarteiraDePedidosSubTitulos>
            </CarteiraPedidos>
        </AppBar>
      </Box>
    </>
  );
}
