import { useEffect, useState } from "react";
import { Client } from "../core/client";
import ClientRepository from "../core/client-repository";
import ClientCollection from "../db/client-collection";

export const useClients = () => {
    const repo: ClientRepository = new ClientCollection()

    const [client, setClient] = useState<Client>(Client.vazio())
    const [clients, setClients] = useState<Client[]>([])
    const [isVisible, setIsVisible] = useState<'table' | 'form'>('table');

    const getAllClients = () => {
        repo.list().then(clients => {
            setClients(clients);
            setIsVisible('table');
        })
    }

    useEffect(getAllClients, []);


    const selectedClient = (client: Client) => {
        setClient(client);
        setIsVisible('form');
    }

    const newClient = () => {
        setClient(Client.vazio());
        setIsVisible('form');
    }

    const deletedClient = async (client: Client) => {
        await repo.delete(client);
        getAllClients();
    }

    const saveClient = async (client: Client) => {
        await repo.save(client)
        getAllClients();
    }

    return {
        saveClient,
        newClient,
        deletedClient,
        selectedClient,
        getAllClients,
        setIsVisible,
        isVisible,
        clients,
        client
    }
}