import React from 'react';
import {getPrice, getWeight} from "../../../utils/Products";
import TableHeader from "../tableHeader/TableHeader";
import TableBody from "../tableBody/TableBody";


const SalesTable = ({sellProducts}) => {

    const columns = {
        productName: {
            path: 'productName',
            name: 'Product name',
        },
        store: {
            path: 'store',
            name: 'Store'
        },
        address: {
            path: 'address',
            name: 'Address'
        },
        category: {
            path: 'category',
            name: 'Category'
        },
        creationData: {
            path: 'creationData',
            name: 'Creation date',
        },
        price: {
            path: 'price',
            name: 'Price',
            component: (product) => getPrice(product.price)
        },
        quantity: {
            path: 'quantity',
            name: 'Sold items'
        },
        weight: {
            path: 'weight',
            name: 'Weight/Volume',
            component: (product) => getWeight(product.weight)
        },
        lastSale: {
            path: 'lastSale',
            name: 'Last sale',
        },
    }
    return(
        <table>
            <TableHeader columns={columns} />
            <TableBody columns={columns} items={sellProducts}/>
        </table>
    );
};

export default SalesTable;