# brskt-dev.github.io

Site raiz do GitHub Pages desta conta. Só redireciona para o portfólio, que fica em
**https://brskt.dev/** (repositório [brskt-space](https://github.com/brskt-dev/brskt-space), com domínio próprio).

- `index.html`: a raiz (`/`) vai para `https://brskt.dev/`, que escolhe PT ou EN pelo idioma do navegador.
- `404.html`: qualquer outro caminho vai para o mesmo caminho em `https://brskt.dev`
  (ex.: `/pt/sobre/` → `https://brskt.dev/pt/sobre/`). Se não existir lá, o 404 do portfólio responde.
- `/brskt-space/…` (os links antigos do portfólio) não passa por aqui: o próprio GitHub redireciona para
  `https://brskt.dev/…`, porque o `brskt-space` tem domínio próprio.
- `.nojekyll`: publica os arquivos como estão, sem Jekyll.

Este repositório **não** tem domínio próprio, de propósito: assim os outros repositórios com Pages ativo
(`brskt-dev.github.io/<repo>/`) continuam no mesmo endereço.
