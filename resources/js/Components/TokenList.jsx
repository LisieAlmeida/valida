
import { Head } from "@inertiajs/react";
import api from "../services/api";

import { Container, Row, Col, Table, Button, Accordion, Card, Modal } from "react-bootstrap";



import { useEffect, useState } from "react";

import DataTable from "react-data-table-component";
import QRCode from "react-qr-code";
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { useForm, usePage } from "@inertiajs/react";




const columns = [
    {
        name: "Token",
        selector: (row) => row.token,
        sortable: true,
    },
    {
        name: "Tipo de Certidão",
        selector: (row) => row.certificate_type_id,
        sortable: true,
    },
    {
        name: "Data de Assinatua",
        selector: (row) => row.date_time_signature,
        sortable: true,
    }


];


export default function TokenList() {


    const [dataComplete, setDataComplete] = useState([null]);
    const [loading, setLoading] = useState([false]);
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    const { errors } = usePage().props;


    useEffect(() => {

        setLoading(true);
        setShowModal(false);

        $.ajax(
            {
                type: "GET",
                url: "/tokens",
                success: function(response) {
                setDataComplete(response.reverse());
                //console.log(dataComplete); // log the response to the console
                setLoading(false);

                },
                error: function(response, status, error)
                {
                // alert('erro');
                    console.clear();
                    console.log(response.responseJSON.data.certificate_type_id[0]); // log the error message to the console
                }
            });
    }, []);





    const handleModalOpen = () => {
        setShowModal(true);
      };

      const handleModalClose = () => {
        setShowModal(false);
      };

      const handleCopyQRCode = () => {
        html2canvas(modalRef.current).then((canvas) => {
          const qrCodeImage = canvas.toDataURL('image/svg');
          const newWindow = window.open();
          newWindow.document.write('<img src="' + qrCodeImage + '" />');
        });
      };



    const ExpandedComponent = ({ data }) => (
        <Row>
        <Card>

            <Card.Body>
                <Row>
                    <Col ref={modalRef} xs={12} sm={6} md={3}>
                        <QRCode value={`https:127.0.0.1:8000/certificate/${data.token}`} size={100}/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card.Text>Código: {data.code}</Card.Text>
                        <Card.Text>CRC: {data.crc}</Card.Text>
                    </Col>
                    <Col xs={12} sm={6} md={5}>
                        <Card.Text>Matrícula: {data.number}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <Button variant="primary" onClick={handleCopyQRCode}>Copiar QR Code</Button>
                    </Col>
                </Row>


        </Card>
        </Row>


    );


    return (
        <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Container style={{ width: "80vw" }}>
              <Row>
             <Container style={{ width: "80vw" }}>
                <Row>
                    <Col

                        className="position-relative"
                    >
                        <div
                            style={{
                                position: "relative",
                                marginTop: "10%",
                            }}
                        >
                            <DataTable
                                columns={columns}
                                data={dataComplete}
                                expandableRows
                                expandableRowsComponent={ExpandedComponent}
                                pagination={4}
                            ></DataTable>

                        </div>
                    </Col>

                </Row>
                        </Container>
              </Row>

            </Container>
        </div>
      )}
    </div>



    );
}
