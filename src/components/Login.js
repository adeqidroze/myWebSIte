import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleLogin = (values) => {
        // Handle login logic here (you can make API calls to the backend)
        console.log('Logging in with:', values);
    };

    return (
        <div>
            <h2>Login</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
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
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;