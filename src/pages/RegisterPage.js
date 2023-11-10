import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterPage = () => {
    const initialValues = {
        username: '',
        password: '',
        email: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    const handleRegister = (values) => {
        // Handle registration logic here (you can make API calls to the backend)
        console.log('Registering with:', values);
    };

    return (
        <div>
            <h2>Register</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleRegister}
            >
                <Form>
                    <div>
                        <Field type="text" name="username" placeholder="Username" />
                        <ErrorMessage name="username" />
                    </div>
                    <div>
                        <Field type="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" />
                    </div>
                    <div>
                        <Field type="email" name="email" placeholder="Email" />
                        <ErrorMessage name="email" />
                    </div>
                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    );
};

export default RegisterPage;