# brskt-dev.github.io

Site raiz do GitHub Pages desta conta. Só redireciona para o portfólio, que fica em
**https://brskt-dev.github.io/brskt-space/** (repositório [brskt-space](https://github.com/brskt-dev/brskt-space)).

- `index.html`: a raiz (`/`) vai para `/brskt-space/`, que escolhe PT ou EN pelo idioma do navegador.
- `404.html`: qualquer outro caminho vai para o mesmo caminho dentro de `/brskt-space/`
  (ex.: `/pt/sobre/` → `/brskt-space/pt/sobre/`). Se não existir lá, o 404 do portfólio responde.
- `.nojekyll`: publica os arquivos como estão, sem Jekyll.

Outros repositórios com Pages ativo (`/<repo>/`) continuam funcionando: o GitHub serve cada um pelo próprio repositório.
