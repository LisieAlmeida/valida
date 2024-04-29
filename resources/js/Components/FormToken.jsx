import { useEffect, useState } from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import TextArea from "@/Components/TextArea";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";



export default function FormToken() {

    const { data, setData, post, processing, errors, reset } = useForm({
        certificate_type_id: "",
        number: "",
        code: "",
        crc: "",
        date_time_signature: "",
        document: "",
        signature: "",
        observation: "",
    });



    const [isLoading, setIsLoading] = useState(true);
    const [errorMessages, setErrorMessages] = useState({});
    const [phpValidationErrors, setPhpValidationErrors] = useState(false);

    useEffect(() => {
        setIsLoading(false);
  }, []);



    const submit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        //let dataTokens = $("#formCharge").serialize();

            {/*$.ajax(
            {
                type: "POST",
                url: "/tokens",
                data: dataTokens,
                success: function(response) {
                // alert("ok");
                console.log(response); // log the response to the console
                },
                error: function(response, status, error)
                {
                // alert('erro');
                    console.clear();
                    console.log(response.responseJSON.data.certificate_type_id[0]); // log the error message to the console
                }
            });


        return false;*/}

        try {
          const response = await post(route("login"));

          if (response && response.success === false && response.data) {
            setErrorMessages(response.data);
          } else {
            //goBack();
          }
        } catch (error) {
          //console.error("Xuxa:", error);
          // Trate o erro de acordo com a necessidade do seu aplicativo

        }
        //reset();

      setIsLoading(false);

    };

      const goBack = () => {
        window.history.go();
    }

    return (
        <div>
            {isLoading ? (
            <div>Loading...</div>
        ) : (
        <form
            id='formTokens'
            onSubmit={submit}
            style={{
                marginTop: "2%",
                padding: "5%"
            }}
        >
            <div className="mt-4">
                <InputLabel
                    htmlFor="certificate_type_id"
                    value="Tipo de Certidão"
                />

                <TextInput
                    id="certificate_type_id"
                    name="certificate_type_id"
                    value={data.certificate_type_id}
                    className="mt-1 block w-full"
                    //autoComplete="name_company"
                    onChange={(e) => setData("certificate_type_id", e.target.value)}
                    //required
                />
                {/*{!phpValidationErrors && errorMessages.certificate_type_id && (
                    <Input message={errorMessages.certificate_type_id[0]} className="mt-2" />
                )}*/}

            </div>

            <div className="mt-4">
                <InputLabel htmlFor="number" value="Matrícula" />

                <TextInput
                    id="number"
                    name="number"
                    value={data.number}
                    className="mt-1 block w-full"
                    //autoComplete="name"
                    onChange={(e) => setData("number", e.target.value)}
                    //required
                />

                {/*<InputError message={errors.name} className="mt-2" />*/}
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="code" value="Código" />

                <TextInput
                    id="code"
                    type="text"
                    name="code"
                    value={data.code}
                    className="mt-1 block w-full"
                    //autoComplete="username"
                    onChange={(e) => setData("code", e.target.value)}
                    //required
                />

                {/*<InputError message={errors.email} className="mt-2" />*/}
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="crc" value="CRC" />

                <TextInput
                    id="crc"
                    type="text"
                    name="crc"
                    value={data.crc}
                    className="mt-1 block w-full"
                    //autoComplete="username"
                    onChange={(e) => setData("crc", e.target.value)}
                    //required
                />

                {/*<InputError message={errors.email} className="mt-2" />*/}
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="date_time_signature" value="Data da assinatura" />
                <TextInput
                    id="date_time_signature"
                    type="date"
                    name="date_time_signature"
                    value={data.date_time_signature}
                    className="mt-1 block w-full"
                    //autoComplete="username"
                    onChange={(e) => setData("date_time_signature", e.target.value)}
                    //required
                />

                {/*<InputError message={errors.email} className="mt-2" />*/}
            </div>


            <div className="d-flex mt-4 justify-center">
                <Row
                    className="w-100 d-flex "
                >
                    <Col sm="6"
                        className="d-flex justify-content-center pt-2"
                    >
                        <Form.Group>
                          <InputLabel htmlFor="signature" value="Anexar Assinatura" />
                            <Form.Control
                                id="signature"
                                name="signature"
                                type="file"
                                onChange={(e) => setData("signature", e.target.files[0])}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm="6"
                        className="d-flex justify-content-center pt-2"
                 >
                        <Form.Group>
                            <InputLabel htmlFor="document" value="Anexar Documento"/>
                            <Form.Control
                                id="document"
                                name="document"
                                type="file"
                                onChange={(e) => setData("document", e.target.files[0])}

                    >

                    </Form.Control>
                </Form.Group>



                 </Col>
                 </Row>

                {/*<InputError message={errors.name} className="mt-2" />*/}
            </div>


            <div className="mt-4">
                <InputLabel htmlFor="observacao" value="Observação" />

                <TextArea
                    id="observation"
                    type="textarea"
                    rows="4"
                    name="observation"
                    value={data.observation}
                    className="mt-1 block w-full"
                    //autoComplete="username"
                    onChange={(e) => setData("observation", e.target.value)}
                    //required
                />

                {/*<InputError message={errors.email} className="mt-2" />*/}
            </div>





            <div className="flex items-center justify-end mt-4">

                <PrimaryButton className="ml-4" //disabled={processing}
                >
                    Cadastrar
                </PrimaryButton>
            </div>
        </form>
        )}
        </div>
    );
}
