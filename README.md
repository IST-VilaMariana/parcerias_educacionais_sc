## Interface Programa Parcerias Educacionais - Senai SC 

Inteface do programa Parceriais Educacionais Senai Santa Catarina

## Demonstração
Visualização Web:

<img src="./public/interface.gif">

Visualização Mobile:

<img src="./public/mobile.gif">

## Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en)


## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/IST-VilaMariana/parcerias_educacionais_sc

```
2. Instale as dependências do projeto:

```bash
npm install
# ou
yarn
```
## Uso Em Ambiente de Desenvolvimento

1. Inicie o servidor: 

```bash
npm run dev
# ou
yarn dev
```

2. A aplicação estará disponível em http://localhost:3000

## Instruções para Ambiente de Produção
Após os procedimentos realizados no Item de [Instalação](#instalação):
1. Realize o processo de Build do código-fonte:
```bash
npm run build
# ou
yarn build
```
2. Inicie o servidor no ambiente de produção configurado:
```bash
npm run start
# ou
yarn start
```
3. A aplicação estará disponível em http://localhost:3000 já disponível o código no processo de build.
## Mais sobre o NextJS

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Adcionando Conteúdo estático

### Carrocel

1. Acesse a pasta src/components/Carousel/index.tsx

2. Procure a variável "questionsAnswers" e no final a adcione o seguinte objeto neste formato:
```js
const questionsAnswers = [
    ...,
    {
        question: 'Título',
        answer: 'descrição'
    }
]
```
### Modal

1. Acesse a pasta /public no script parceiros.json após a `quimica`, adcione o seguinte objeto:

```bash
    ,
    "area_tecnologica": [
        {
            "id": "d0295633-845a-4d7f-aa55-b518d76c0efd",
            "area": "Automotiva",
            "empresa":"Nome da Empresa",
            "icon_empresa":"url da imagem",
            "escola_responsavel":"código da escola - Nome Escola Senai - bairro "
        }
    ]
```
***Atenção***: O atributo `icon_empresa` é opcional e pode ser declarada `""` caso não tenha imagem.

2. Faça o download do icone do botão para a pasta /public/images/icons_parceiros

3. Acesse a pasta src/components/CardListEmpresas/index.tsx

4. Faça o import do icone baixado no item 3 nomeando da seguinte forma:

```js
    import nome_icon from "../../../public/images/icons_parceiros/icone_baixado.svg";
```

5. Adcione o seguinte script no retorno da função CardListEmpresas() o seguinte script:

```jsx
    <ModalRadixUI
        title={'titulo'}
        src={nome_icon}
        area={10}
    />
```
onde 
* titulo : substitua pelo que foi delarado no atributo area no item 1
* nome_icon : troque pelo nome decalarado no item 4
* identificador : declare um valor posterior aos já declarados anteriormente. Ex.: Se o último for area={9} o posterior deve ser declarado area={10} 

6. Acesse a pasta src/components/ContentModal/index.tsx

7. Após a variável `empresas_eletrica`, adcione o seguinte código: 
```jsx
    const empresas_nova_area_tecnologia = list_parceiros.area_tecnologica.map((item) => {
    return (
        <tr key={item.id}>
            <td className={styles.table_line_data}>
                { item.icon_empresa ? (
                    <img src={item.icon_empresa} className={styles.icon} />
                    ) : (
                    <FaIndustry className={styles.icon} />
                    )
                }
                <span className={styles.description_empresa}>{item.empresa}</span>
            </td>
            <td className={styles.description_empresa}>{item.escola_responsavel}</td>
        </tr>
    )
});
```
* area_tecnologia : substitua pelo que foi delarado no atributo "area_tecnologica" no item 1

8. Na função `verify_area( )` adcione o seguinte código antes de 'no_empresas':

```jsx
    function verify_area(area: number){
        return(
            ...
            area === novo_id_area_tecnologica ? empresas_nova_area_tecnologica :

        )
    }
```
* novo_id_area_tecnologica : deve ser um número sequencial que obdeceça os já declarados. Ex.: Se o último for area === 9 o próximo deve ser area === 10.

### SlideShow para vídeos
1. Acesse src/components/SliderShowVideo/index.tsx

2. Localize a variável `linkVideo` e adcione no final o seguinte objeto:
```bash
    {
        src : 'url_do_video',
        title : 'Senai SC – Depoimento de quem já faz parte da nossa rede | Nome da Empresa',
        company: 'Nome da Empresa'
    }
```
Para os vídeos que são provindos do Youtube não esquecer do `/embed/` para que o servidor tenha acesso de renderização.
```bash
    {
        src: 'https://www.youtube.com/embed/id_video'
    }
```
### Arquivos para Download
1. Acesse pages/index.tsx

2. Na linha 58 substitua todos os valor da variável "endereco_url" para a url do arquivo em pdf

```jsx
    <ButtonDownload endereco_url={"url_do_arquivo"}/>
```
### Formulário

O formulário é atualizado pela plataforma [Google Forms](https://workspace.google.com/intl/pt-BR/lp/forms/?utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-pt-dr-bkws-all-all-trial-e-dr-1707806-LUAC0011908&utm_content=text-ad-none-any-DEV_c-CRE_666246535618-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt-Forms-KWID_43700057676889044-kwd-10647024857&utm_term=KW_google%20forms-ST_google%20forms&gad_source=1&gclid=Cj0KCQiAire5BhCNARIsAM53K1hk9-O6AFlWyhcqe5CAngb4ejR5_oTQuwBgAvwOX9HKPUQIODbq8ZsaAj2REALw_wcB&gclsrc=aw.ds) realize o login pelo email : parcerias.educaionais@sc.senai.br
