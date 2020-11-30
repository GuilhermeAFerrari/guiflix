import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://youtu.be/k7IPr-rhrPE',
    categoria: 'Front-End',

  });

    return(
      <PageDefault>
        <h1>Cadastro de vídeo.</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
          //alert('Video cadastrado com sucesso!!!');

          history.push('/');
        }}
        >
          <FormField
            label="Título do vídeo"
            type="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="URL do vídeo"
            type="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Categoria do vídeo"
            type="categoria"
            value={values.categoria}
            onChange={handleChange}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>

        <Link to="/cadastro/categoria">
          Cadastrar categoria
        </Link>
      </PageDefault>
    );
  }

  export default CadastroVideo;