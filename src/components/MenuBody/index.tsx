import React from 'react'

import { AppBar, Autocomplete, Box, Button, TextField, Toolbar, Typography } from '@mui/material'

import engrenagem from '../../assets/ico-engrenagem.svg';
import line from '../../assets/line.svg';
import chevron from '../../assets/pi-chevrondown.svg';
import vector from '../../assets/vectorButtonMenu.svg';
import home from '../../assets/ico-home.svg';
import configuration from '../../assets/vector-configuration.svg';
import notification from '../../assets/ico-notification.svg';
import providers from '../../assets/fluent_target-arrow.svg';


import { Container, Icones, Menu, TextButton, TituloMenu } from './styles';

export default function MenuBody() {
    return(
        <>
            <Box sx={{  display: 'flex',  paddingInline: 2 }}>
                <AppBar position='relative' sx={{ marginTop: '59px', height: '49px', background: '#0A3D62', borderRadius: '8px' }}>
                    <Toolbar>
                        <Typography component="div" sx={{ 
                            flexGrow: 1, 
                            width: 4, 
                            height: 1.7,
                            fontStyle: 'normal',
                            fontWeight: 500, 
                            fontSize: '15px',
                            lineHeight: '17px',
                            marginBottom: '25px',
                            color: '#E3E3E3'
                        }}>
                            Menu
                        </Typography>
                        
                        <Container>
                            <div>
                                <Icones>
                                    <img src={engrenagem} alt="engrenagem" style={{ marginRight: '10px', marginBottom: '13px' }} />
                                    <img src={line} alt="linha" style={{ marginRight: '10px', marginBottom: '13px' }} />
                                    <img src={chevron} alt="chevron" style={{ marginRight: '-5px', marginBottom: '13px' }} />
                                </Icones>
                            </div>
                        </Container>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ flexGrow: 1, paddingInline: 2 }}>
                <AppBar position="static">
                    <Menu>
                        <Box sx={{ flexGrow: 1, paddingInline: 6, paddingBottom: 1, paddingTop: 2, display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <TituloMenu>Foram encontrados: 1.289 itens </TituloMenu>
                            </div>

                            <Button size="small" sx={{ background: "#0A3D62", marginLeft: 2, paddingLeft: 2, paddingRight: 1.5 }}>
                                <div style={{ display: `flex` }}>
                                    <img style={{ width: '10px', height: '25px' }} src={configuration} alt="vector configuration" />
                                    <TextButton>Configurar Colunas</TextButton>
                                </div>
                            </Button>
                        </Box>
                    </Menu>
                </AppBar>
            </Box>
        </>
    )
}
