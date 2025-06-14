# Meu sistema Front-End


## Bibliotecas

- React-router-dom
- Axios
- Json-server
- React-bootstrap bootstrap
- React-icons
- React-input-mask

```bash
npm install react-router-dom axios json-server react-bootstrap bootstrap react-icons react-input-mask
```

### Lembre - se, é necessário importar o bootstrap no arquivo main.jsx

```js
import 'bootstrap/dict/css/bootstrap.min.css'
```

### Configuração do JSON-SERVER

- No package.json, insira um script novo:
```js
"server": "json-server --watch data/db.json"
```
- Crie uma pasta e arquivo: data/db.json (NA RAIZ)
- Dentro dela inicialize as tabelas do banco de dados

```js
{
    "Fornecedores": [],
    "Produtos": [],
    "Clientes": []
}
```