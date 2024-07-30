import ArticleForm from 'components/material/ArticleForm';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function CreateArticlePage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Crear Artículo
      </Typography>
      <ArticleForm />
    </Container>
  );
}

export default CreateArticlePage;
