import { useEffect, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import {  Container, Toast } from "react-bootstrap";
import { MdOutlineErrorOutline } from "react-icons/md";





export default function FormToken() {

    const { errors, dataResponse } = usePage().props;
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);


    const [dataResponse1, setDataResponse1] = useState(null);

    const { data, setData, post, processing, reset } = useForm({
        code: "",
        crc: "",

    });

    useEffect(() => {
            setShow(false);
            setIsLoading(false);
      }, [errors, dataResponse]);

    useEffect(() => {
        if (dataResponse !== null) {
            setDataResponse1(dataResponse);
        }
      }, []);


    const submit = async (e) => {
        e.preventDefault();
        try {
          const response = post(route("certificate.validate", {verify: dataResponse1.token } ));
        } catch (error) {
          console.error("Erro:", error);
        }
      };


    return (
        <div>
            {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container
            style={{
                marginTop: "1%",


        }}
        >
            <Container Style={{ marginBottom: "2%"}}>
                {errors && Object.keys(errors).length > 0 && (
                    <Toast bg="danger" onClose={() => setShow(false)} delay={3000} autohide>
                        <Toast.Body className="text-light fs-4">
                            <MdOutlineErrorOutline size={20}/>
                            <h6>{errors.field_name}</h6>
                        </Toast.Body>
                    </Toast>
                )}
            </Container>

            <form
                onSubmit={submit}
            >
                <div className="mt-2">

                    <TextInput
                        id="code"
                        type="text"
                        name="code"
                        value={data.code}
                        placeholder="Digite o código"
                        className="mt-1 block w-full"
                        onChange={(e) => setData("code", e.target.value)}
                    />
                </div>

                <div className="mt-3">

                    <TextInput
                        id="crc"
                        type="text"
                        name="crc"
                        value={data.crc}
                        className="mt-1 block w-full"
                        placeholder="Digite o CRC"
                        onChange={(e) => setData("crc", e.target.value)}

                    />


                </div>

                <div className="flex items-center justify-end mt-4">

                    <PrimaryButton className="ml-4"
                        style={{
                            backgroundColor: "#09253B",

                        }}
                    >
                        Validar
                    </PrimaryButton>
                </div>
            </form>
        </Container>
    )}
    </div>
    );
}
