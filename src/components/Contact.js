import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Iframe from 'react-iframe'

const ContactContainer = styled.div`
    padding: 60px;
    text-align: center;
    background-image: url('/assets/img/pattern-japanese-01.png');
`;

const ContactText = styled.div`
    font-family: Roboto;
    padding: 30px 0px;
    color: #e3dfcf;
`;

const TelContainer = styled.div`
    color: #e3dfcf;
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 60px 0px;
`;

const Tel = styled.div`
    display: flex;
    margin: 30px;
`;

const TelTitle = styled.div`
    font-family: Passion One;
    font-weight: 400;
    font-size: 20px;
    margin-right: 10px;
`;

const TelDescription = styled.div`
    font-family: Roboto;
    font-size: 20px;
`;

const NumberContainer = styled.div`
    color: #e3dfcf;
    margin: 60px 0px;
`;

const NumberTitle = styled.div`
    font-family: Passion One;
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 15px;
    color: #e3dfcf;
`;

const NumberDescription = styled.div`
    font-family: Roboto;
    margin: 15px 0px;
`;

const MapContainer = styled.div`
    border-radius: 10px;
    width: 600px;
    height: 300px;
    margin: auto;
    overflow: hidden;
`;

const Sponsor = styled.div`
    margin: 60px;
`;

const SponsorLogos = styled.div`
    display: flex;
    justify-content: center;
`;

const SpondorLogoItem = styled.img`
    width: 100px;
    height: 75px;
    object-fit: contain;
    margin: 15px 30px;
`;



const Contact = () => (
    <ContactContainer id="contact">
        <Title margin="auto" icon="/assets/img/contact-icon.png" title="Contato & Localização" />
        {/* <ContactText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Nulla dapibus sapien accumsan, vulputate augue vitae, iaculis massa.<br /> Phasellus tristique ex et ligula facilisis, quis sollicitudin ante egestas.
        </ContactText> */}
        <TelContainer>
            <Tel>
                <TelTitle>
                    Atendimento:
                </TelTitle>
                <TelDescription>
                    (11) 3758-1049 / (11) 3758-0547
                </TelDescription>
            </Tel>
            {/* <Tel>
                <TelTitle>
                    Delivery:
                </TelTitle>
                <TelDescription>
                    3758-1049
                </TelDescription>
            </Tel> */}
        </TelContainer>

        {/* <NumberContainer>
            <NumberTitle>Almoço:</NumberTitle>
            <NumberDescription>Segunda a Sexta-feira das 12:00h às 15:00h</NumberDescription>
        </NumberContainer> */}

        <NumberContainer>
            <NumberTitle>Horários de Funcionamento:</NumberTitle>
            <NumberDescription>Segunda-Feira: Fechado</NumberDescription>
            <NumberDescription>Terça-Feira: 11:30 às 15:00 / 18:30 às 22:30</NumberDescription>
            <NumberDescription>Quarta-Feira: 11:39 às 15:00 / 18:30 às 22:30</NumberDescription>
            <NumberDescription>Quinta-Feira:  11:30 às 15:00 / 18:30 às 23:00</NumberDescription>
            <NumberDescription>Sexta-Feira: 11:30 às 15:00 / 18:30 às 23:30</NumberDescription>
            <NumberDescription>Sábado: 12:00 às 16:00 / 18:30 às  00:00</NumberDescription>
            <NumberDescription>Domingo: 12:00 às 16:00 / 18:30 às 23:30</NumberDescription>
        </NumberContainer>

         <NumberContainer>
            <NumberTitle>Como chegar?</NumberTitle>
            <NumberDescription>Av. Morumbi, 6936 - São Paulo - SP</NumberDescription>
        </NumberContainer>

        <MapContainer>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.623902748927!2d-46.705872384520326!3d-23.617817569565855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50d0da68d4fd%3A0x17a66e9d9ecc5aac!2sAv.+Morumbi%2C+6936+-+Morumbi%2C+S%C3%A3o+Paulo+-+SP%2C+05650-002!5e0!3m2!1spt-BR!2sbr!4v1540772556200"
                width="600px"
                height="300px"
                display="initial"
                frameborder="0"
                style={{ border: 0 }}
                position="relative"
                allowFullScreen
            />
        </MapContainer>

        <Sponsor>
            <NumberTitle>Disponível em:</NumberTitle>
            <SponsorLogos>
                <SpondorLogoItem src="/assets/img/tripadvisor-logo.png" />
                <SpondorLogoItem src="/assets/img/ifood-logo.png" />
                {/* <SpondorLogoItem src="/assets/img/spoonrocket-logo.png" /> */}
                <SpondorLogoItem src="/assets/img/rappi-logo.png" />
            </SponsorLogos>
        </Sponsor>
    </ContactContainer>
);

export default Contact;