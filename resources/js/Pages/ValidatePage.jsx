import FormValidate from "@/Components/FormValidate";
import PublicHeader from "@/Components/PublicHeader";
import { Navbar, Container, Nav, Image, Card, Row, Col } from 'react-bootstrap';
import { useForm, usePage } from "@inertiajs/react";
import { MdOutlineQrCode2 } from "react-icons/md";

import React from "react";

export default function ValidatePage() {


    return(
        <Row className="vh-100 d-block bg-slate-300">
            <PublicHeader/>


            <Row fluid
                className="p-4 mx-0 my-0 d-flex justify-center p-md-10 bg-slate-300 "

            >
                <Card className="col-12 col-md-9 centered pb-3" style={{maxWidth: '100%'}} >
                    <Card.Body
                        className="bg-white"
                    >
                        <Row>
                            <Col xs={12} sm={6} md={6}

                            >
                            <Card
                                className="border-0 bg-transparent"
                                style={{color:'#19509C'}}
                            >
                                <Card.Body
                                className="font-weight-bold mb-0"
                                >
                                <Card.Title
                                    className="mb-2"
                                >
                                    <h4>
                                        <strong className="d-flex ">
                                            <h4 className="mx-2" style={{color:'#6AE184'}}><strong>&gt;</strong></h4>
                                            Validação de Documento
                                        </strong>
                                    </h4>
                                </Card.Title>
                                <Card.Text className="mt-4">Insira as informações da apostila</Card.Text>

                                </Card.Body>
                            </Card>


                            </Col>
                            <Col xs={12} sm={6} md={6}>
                            <Card
                                className="border-0 bg-transparent"
                                style={{ maxWidth: '100%', color:'#19509C'}}
                            >
                                <Card.Title className="mt-0 mt-md-5"><h4></h4></Card.Title>
                                <Card.Body
                                    className="font-weight-bold mb-4"
                                >

                                    <Card.Text>Os dados de validação podem ser encontrados abaixo do QR code no documento.</Card.Text>


                                </Card.Body>

                            </Card>
                            </Col>
                            </Row>
                            <Row>
                                <hr/>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6} md={6}>
                                    <Card
                                        className="border-0 bg-transparent"
                                        style={{color:'#19509C'}}
                                    >
                                        <FormValidate/>
                                        <Card.Title
                                            className="mb-1 mt-2"
                                        >
                                            <h6>
                                                <strong className="mx-2" style={{color:'#F80000'}}>ATENÇÃO: </strong>

                                            </h6>
                                        </Card.Title>
                                        <Card.Text className="lh-1"
                                            style={{fontSize: "0.7rem"}}
                                        >
                                            Observe que é de extrema importância verificar se as letras maiúsculas e minúsculas foram
                                            inseridas corretamente, de acordo com o que é mostrado no documento.
                                        </Card.Text>
                                        <Card.Text className="lh-1"
                                            style={{fontSize: "0.7rem"}}
                                        >
                                            Preencha todos os campos para a verificação de documentos.
                                        </Card.Text>
                                    </Card>
                                </Col>
                                <Col xs={12} sm={6} md={6}>
                                    <Card
                                        className="border-0 bg-transparent"
                                    >
                                        <Card.Body>
                                            <Container className="d-flex justify-center"
                                            >
                                                <div className="d-fekx flex-col justify-center">
                                                <MdOutlineQrCode2 size={150}/>
                                                <span className="mx-3 d-flex justify-center">Código:</span>
                                                <span className="mx-3 d-flex justify-center">XXXXX-XX</span>

                                                <span className="mx-3 d-flex justify-center">CRC:</span>
                                                <span className="mx-3 d-flex justify-center">XXXXX-XX</span>
                                                </div>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            {/*<Container className="d-flex justify-center"
                            >

                                <div className="d-block">
                                <MdOutlineQrCode2 size={150}/>
                                <span className="mx-3">Código: AzQR134</span>
                                <br />
                                <span className="mx-3">CRC: 9KJG34</span>
                                </div>

                            </Container>
                            <Container>
                                <FormValidate/>
                                <h3><strong>Atenção!</strong></h3>
                                <h6>
                                    Observe que é de extrema importância verificar se as letras maiúsculas e minúsculas foram
                                    inseridas corretamente, de acordo com o que é mostrado no documento.
                                </h6>
                                <h6>
                                    Preencha todos os campos para a verificação de documentos.
                                </h6>
                </Container>*/}


                        </Card.Body>

                        </Card>



                    </Row>


                    </Row>

                );
            }
