import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Box } from '@mui/material';

// Esquema de validación con Yup
const ArticleSchema = Yup.object().shape({
  title: Yup.string()
    .required('El título es obligatorio')
    .min(5, 'El título debe tener al menos 5 caracteres'),
  content: Yup.string()
    .required('El contenido es obligatorio')
    .min(20, 'El contenido debe tener al menos 20 caracteres')
});

const ArticleForm = () => {
  return (
    <Formik
      initialValues={{
        title: '',
        content: ''
      }}
      validationSchema={ArticleSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box mb={2}>
            <Field as={TextField}
                   name="title"
                   label="Título"
                   helperText={touched.title ? errors.title : ""}
                   error={touched.title && Boolean(errors.title)}
                   fullWidth
            />
          </Box>
          <Box mb={2}>
            <Field as={TextField}
                   name="content"
                   label="Contenido"
                   helperText={touched.content ? errors.content : ""}
                   error={touched.content && Boolean(errors.content)}
                   fullWidth
                   multiline
                   rows={4}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Guardando...' : 'Guardar'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ArticleForm;
