import { FC } from "react";
import { Client } from "../core/client";
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'

interface TableProps {
    clients: Client[];
    selectedClient?: (client: Client) => void;
    deletedClient?: (client: Client) => void;
}

export const Table: FC<TableProps> = ({ clients, selectedClient, deletedClient }) => {

    const showActions = selectedClient || deletedClient;

    const renderTableHeader = () => {
        return (
            <tr>
                <th className={`text-left p-4`}>Código</th>
                <th className={`text-left p-4`}>Nome</th>
                <th className={`text-left p-4`}>Idade</th>
                {showActions && (
                    <th className={`p-4`}>Ações</th>
                )}
            </tr>
        )
    }
    const renderDatas = () => {
        return clients?.map((client, idx) => {
            return (
                <tr key={idx} className={idx % 2 === 0 ? `bg-purple-200` : `bg-purple-100`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {showActions && renderActions(client)}
                </tr>
            )
        })
    }

    const renderActions = (client: Client) => {
        return (
            <td className="flex justify-center">
                {selectedClient && (
                    <button className={`
                    flex justify-center items-center
                    rounded-full p-2 m1
                    text-green-600 hover:bg-purple-50
                    `}
                        onClick={() => selectedClient?.(client)}

                    >
                        <BiEdit size="24" />
                    </button>
                )}
                {deletedClient && (
                    <button className={`
                    flex justify-center items-center
                    rounded-full p-2 m1
                    text-red-500 hover:bg-purple-50
                    `}
                        onClick={() => deletedClient?.(client)}
                    >
                        <RiDeleteBinLine size="24" color="red" />
                    </button>
                )
                }
            </td>
        )
    }
    return (
        <table className={`w-full`}>
            <thead className={`
            text-gray-50 bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderTableHeader()}
            </thead>
            <tbody>
                {renderDatas()}
            </tbody>
        </table>
    )
}