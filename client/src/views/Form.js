import React from "react";
import { Container, Button, Stack } from "@mui/material";
import { Col, Form, Row } from "react-bootstrap"

export default function FormPage({ navigation, props }) {
    return (
        <Container>
            <h3 className="title">Tambah Admin</h3>
            <Form onSubmit={handleSubmit()}>
                <Form.Group controlId="form.Category">
                    <Row>
                        <Form.Label column="sm" lg={2}>Kategori</Form.Label>
                        <Col>
                            <Form.Select column="sm" lg={2} aria-label="Default select example">
                                <option selected disabled hidden>Pilih Kategori Admin</option>
                                <option value="1">Admin 1</option>
                                <option value="2">Admin 2</option>
                                <option value="3">Admin 3</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>
                <br />
                <Form.Group controlId="form.Name">
                    <Row>
                        <Form.Label column="sm" lg={2}>Nama</Form.Label>
                        <Col>
                            <Form.Control size="sm" type="text" placeholder="Nama Admin" />
                        </Col>
                    </Row>
                </Form.Group>
                <br />
                <Form.Group controlId="form.Email">
                    <Row>
                        <Form.Label column="sm" lg={2}>Email</Form.Label>
                        <Col>
                            <Form.Control size="sm" type="email" placeholder="Alamat Email" />
                        </Col>
                    </Row>
                </Form.Group>
                <br />
                <Form.Group controlId="form.Phone">
                    <Row>
                        <Form.Label column="sm" lg={2}>Nomor Telepon</Form.Label>
                        <Col>
                            <Form.Control size="sm" type="text" placeholder="Nomor Telepon" />
                        </Col>
                    </Row>
                </Form.Group>
                <br />

            </Form>

            <Stack direction="horizontal" gap={1} className="d-flex justify-content-end">
                <Button variant="outlined">Batalkan</Button>
                <Button type="submit" variant="contained">Simpan</Button>
            </Stack>
        </Container>
    )
}