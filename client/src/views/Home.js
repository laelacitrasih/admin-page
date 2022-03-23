import React from 'react';
import { Button, Grid, Container } from '@mui/material';
import BootstrapTable from 'react-bootstrap-table-next';
import { useHistory } from 'react-router-dom'

const admins = [{
    _id: 1,
    category: "tes 1",
    name: "tes 1",
    email: "tes 1",
    phone: "tes 1",
}];

const columns = [{
    dataField: 'name',
    text: 'Name',
}, {
    dataField: 'email',
    text: 'Email',
}, {
    dataField: 'category',
    text: 'Kategori',
}];


export default function Home({navigation}) {
    const history = useHistory()

    return (
        <Container>
            <h2>Administrator Database</h2>
            <Grid container justifyContent="space-between">
                <Grid item xs={11}>
                    <p>Pengaturan Administrator</p>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" onClick={()=> history.push(`/form`)}>Tambah</Button>
                </Grid>
            </Grid>

            <BootstrapTable
                keyField="id"
                data={admins}
                columns={columns}
                bordered={false}
            />
        </Container>
    )
}