import { Link } from "@inertiajs/react";
import { ButtonGroup, Button, NavLink } from "react-bootstrap";


export default function NavbarDashboard() {
    return (
        <ButtonGroup className="d-flex justify-content-center mb-2">
                <Button
                    variant="outline-black"
                    className="px-2 py-2 fs-5 mx-2"

                >
                    <Link className="btn btn-outline-black px-2 py-2 fs-5 mx-2" href={route('listToken')}>
                <i className="bi bi-plus"></i>
                Cadastrar Token
                </Link>
                </Button>
        </ButtonGroup>
    );
}
