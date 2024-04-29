
// import NavbarLabel from "@/Components/NavbarLabel";
// import NavbarSystem from "@/Components/NavbarSystem";
import NavbarDashboard from "@/Components/NavbarDashboard";
import { Row, Col, Container, Card, Image } from "react-bootstrap";

export default function DashboardTemplate({ children }) {
    return (
        (
            <Row>
                <Col>
                    <NavbarDashboard/>
                </Col>
            </Row>
        ),
        (
            <Container>
                <Card bg="light" className="my-4">
                    <Card.Body>
                        <Row>
                            <Col md={2} className="d-flex align-items-center">

                                <div>
                                    <h5 style={{ color: "#141D4C" }}>
                                        Olá, Paula
                                    </h5>
                                    <p className="mb-0">
                                        Você tem 0 contas para esse mês
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <h4 className="mt-4 mb-3" style={{ color: "#141D4C" }}>
                            Agendar Cobrança
                        </h4>

                        <Row xs={1} md={3} className="g-4">
                            <Col className="my-3">
                                <Card
                                    className="text-center"
                                    style={{
                                        backgroundColor: "#2DC2A0",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Card.Body className="p-1">
                                        {/* <BiWallet2 className="mb-3 text-white" size="3em" />*/}
                                        <Card.Title className="mb-0 text-white">
                                            Pix
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="my-3">
                                <Card
                                    className="text-center"
                                    style={{
                                        backgroundColor: "#304E9C",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Card.Body className="p-1">
                                        {/*<BiCashCoin className="mb-3 text-white" size="3em" />*/}
                                        <Card.Title className="mb-0 text-white">
                                            Boleto
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="my-3">
                                <Card
                                    className="text-center"
                                    style={{
                                        backgroundColor: "#2E2F31",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Card.Body className="p-1">
                                        {/*<BiCalendarEvent className="mb-3 text-white" size="3em" />*/}
                                        <Card.Title className="mb-0 text-white">
                                            Agendamento personalizado
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                {children}
            </Container>
        )
    );
}
