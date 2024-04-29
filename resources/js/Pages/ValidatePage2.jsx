import FormValidate from "@/Components/FormValidate";
import PublicHeader from "@/Components/PublicHeader";
import { Navbar, Container, Nav, Image, Card, Row } from 'react-bootstrap';
import { useForm, usePage } from "@inertiajs/react";
import { MdOutlineQrCode2 } from "react-icons/md";

import React from "react";

export default function ValidatePage() {

    const { page } = usePage();
    return(
        <>
            <PublicHeader/>
            <Container fluid
                className="p-10 d-flex justify-center bg-slate-300"
            >
            <Row>
            <Container
                className="d-block align-items-center pt-10 px-10 py-20 pb-10 mx-0 mb-5 bg-slate-100"

            >
                <Card
                    className="border-0 bg-transparent"
                    style={{ maxWidth: '100%' }}
                 >
                    <Card.Body
                        className="text-info font-weight-bold mb-2"
                    >
                    <h3><strong>Validação de Documento</strong></h3>
                    </Card.Body>
                    <Card.Body
                        className="text-info font-weight-bold mb-0"
                    >
                    <h5>
                        Os dados de validação podem ser encontrados abaixo do QR code no documento.
                    </h5>
                    <h5>
                        Insira as informações da do documento.
                    </h5>
                    </Card.Body>
                </Card>
                <Container>
                    <FormValidate/>
                </Container>
                <Card
                    className="border-0 bg-transparent"
                     style={{ maxWidth: '100%' }}
                 >
                    <Card.Body
                        className="text-info font-weight-bold mb-4"
                    >
                    <h3><strong>Atenção!</strong></h3>
                    <h6>
                        Observe que é de extrema importância verificar se as letras maiúsculas e minúsculas foram
                        inseridas corretamente, de acordo com o que é mostrado no documento.
                    </h6>
                    <h6>
                        Preencha todos os campos para a verificação de documentos.
                    </h6>
                    </Card.Body>

                </Card>
                <Container className="d-flex justify-center"
                >

                    <div className="d-block">
                    <MdOutlineQrCode2 size={150}/>
                    <span className="mx-3">Código: AzQR134</span>
                    <br />
                    <span className="mx-3">CRC: 9KJG34</span>
                    </div>

                </Container>


            </Container>
            </Row>
        </Container>
        </>

    );
}
