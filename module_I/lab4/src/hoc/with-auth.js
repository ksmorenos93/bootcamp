// app/register/page.js

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState('');

  const router = useRouter(); // Initialize the useRouter hook

  // Load existing users from localStorage
  const getUsersFromLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    return users || [];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isEmailTaken = (email, users) => {
    return users.some((user) => user.email === email);
  };

  const isUsernameTaken = (username, users) => {
    return users.some((user) => user.username === username);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = getUsersFromLocalStorage();

    // Username validation: must be <= 20 characters
    if (formData.username.length > 20) {
      setShowError('El nombre de usuario debe tener un máximo de 20 caracteres.');
      return;
    }

    // Check for duplicate email
    if (isEmailTaken(formData.email, users)) {
      setShowError('El correo electrónico ya está en uso.');
      return;
    }

    // Check for duplicate username
    if (isUsernameTaken(formData.username, users)) {
      setShowError('El nombre de usuario ya está en uso.');
      return;
    }

    // Save new user to localStorage
    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    
    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Show success message
    setShowSuccess(true);
    setShowError('');
  };

  // Redirect to the login page
  const handleLoginRedirect = () => {
    router.push('/login'); // Redirect to the /login route
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Registrarse</h2>

              {showSuccess && (
                <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                  ¡Registro exitoso!
                </Alert>
              )}

              {showError && (
                <Alert variant="danger" onClose={() => setShowError('')} dismissible>
                  {showError}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Nombre de usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre de usuario"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    maxLength={20} // Limiting the input directly
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-between">
                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>

                  <Button variant="secondary" onClick={handleLoginRedirect}>
                    Ir a Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
