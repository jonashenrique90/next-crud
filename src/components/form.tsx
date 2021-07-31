import { FC, useState } from "react"
import { Client } from "../core/client";
import { Button } from "./button";
import { Input } from "./input"

interface FormProps {
    client: Client;
    clientChange?: (client: Client) => void;
    fnCancel?: () => void;
}

export const Form: FC<FormProps> = ({ client, fnCancel, clientChange }) => {
    const id = client?.id;
    const [name, setName] = useState(client.name ?? '');
    const [age, setAge] = useState(client.age ?? 0);

    return (
        <div>
            {id && (
                <Input text="Código" name="code" type="text" readonly value={id} className="mb-4" />
            )}
            <Input text="Nome" name="nome" type="text" value={name} onChange={setName} className="mb-4" />
            <Input text="Idade" name="idade" type="number" value={age} onChange={setAge} />
            <div className="mt-3 flex justify-end">
                <Button color="blue" className="mr-2" onClick={() => clientChange?.(new Client(name, +age, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={fnCancel}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}