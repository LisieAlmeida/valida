import { useEffect } from "react";
import FormValidate from "@/Components/FormValidate";
import PublicHeader from "@/Components/PublicHeader";
import { Navbar, Container, Nav, Image, Card, Button } from 'react-bootstrap';
import { FcCheckmark } from "react-icons/fc";
import { useForm, usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";







import React from "react";
import { useState } from "react";

export default function ConfirmationPage() {

    const { data } = usePage().props;
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (data !== null) {
            setLoading(false);
            console.log(data)
        }
      }, []);


    const goBack = () => {
        window.history.go();
    }

    const fileName = data[0].document;
    const downloadUrl = `/storage/${fileName}`;

    const handleDownload = () => {
        const fileName = data[0].document;
        Inertia.visit(`/storage/${fileName}`, { method: 'get', download: true });
        console.log(fileName)


      };

    return(
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
            <>
            <PublicHeader/>
            <Container fluid>
            <Container
                className="d-flex flex-column justify-center align-items-center pt-10 px-10 py-20 pb-20"
                style={{


                }}

            >
                 <Card
                    className="w-2/4 mt-20 "
                    style={{
                        maxWidth: "100%"

                    }}


                 >
                    <Card.Header
                        className="d-flex justify-center"
                        style={{
                            background: "white"

                        }}

                    >
                    <FcCheckmark size={100}  /> </Card.Header>
                    <Card.Body className="d-flex justify-center">
                    <Card.Title>Dados validados com sucesso
                    </Card.Title>
                    </Card.Body>
                </Card>
                <Container
                    className="d-flex flex-column justify-center align-items-center pt-10 px-10 py-20 pb-20"
                >
                    <Button
                        //onClick={handleDownload}
                        href={downloadUrl}
                        style={{
                            backgroundColor: "#09253B",

                        }}
                        download
                    >
                        Baixar Documento
                    </Button>
                    {/*<Button
                        //onClick={handleDownload}
                        href={downloadUrl}
                        style={{
                            backgroundColor: "#09253B",

                        }}
                        download
                    >
                        Voltar para a página anterior
                    </Button>*/}
                </Container>


            </Container>
        </Container>
        </>
        )}
        </div>

    );
}
