import styled from 'styled-components';
import { Product } from 'components/catalog-page/catalog-components/product.component';
import { Logo } from 'components/catalog-page/visual/logo.component';
import { Nav } from 'components/control/nav.component';
import { IProduct } from 'local-types/product.type';

export default function CatalogPage() : JSX.Element{

    const ProductDisplay = styled.div`
        display: grid;
        justify-content: space-between;
        align-items: center;
        grid-template-columns: repeat(3, 20rem);
        grid-auto-rows: auto;
        grid-gap: 1.2rem;
        border: 2.5px gray inset;
        border-radius: 10px;
        background-color: white;
        margin: 0.5rem;
        margin-top: 0;
        padding: 2em;
        box-shadow: 0px 0px 7px rgb(34, 34, 34);
        overflow: auto;

        @media screen and (max-width: 1180px) {
            grid-template-columns: repeat(2, 20rem);
            justify-content: center;
        }

        @media screen and (max-width: 768px) {
            grid-template-columns: 20rem;
            justify-content: center;
        } 
    `;

    const GridContainer = styled.div`
        padding: 3em;

        @media screen and (max-width:660px){
            padding-top: 10em;
        }
    `;

    const products : IProduct[] = [{
        id: 1,
        name: 'Аппарат для конвективной ИВЛ стационарный Zisline MV200 / MV300',
        price: 80000,
        description: "Универсальный  аппарат  для  проведения  ИВЛ  с  непрерыв-ным  мониторингом  газообмена  и  оценкой  метаболизма  в  отделениях реанимации, хирургии и интенсивной терапии, а также при транспортировке по клинике.",
        image: '/img/products/zisline.png'
    },
    {
        id: 2,
       name: 'Аппарат искусственной вентиляции легких высокочастотный струйный ИВЛ-ВЧ/100-«ЗисЛайн» (по Б.Д.Зислину)',
        price: 80000,
        description: "Универсальный  аппарат  для  проведения  ИВЛ  с  непрерыв-ным  мониторингом  газообмена  и  оценкой  метаболизма  в  отделениях реанимации, хирургии и интенсивной терапии, а также при транспортировке по клинике.",
        image: '/img/products/zisline.png'
    },
    {
        id: 3,
       name: 'Анестезиологические / операционные мониторы МПР6-03',
        price: 80000,
        description: "Универсальный  аппарат  для  проведения  ИВЛ  с  непрерыв-ным  мониторингом  газообмена  и  оценкой  метаболизма  в  отделениях реанимации, хирургии и интенсивной терапии, а также при транспортировке по клинике.",
        image: '/img/products/zisline.png' 
    },
    {
        id: 4,
       name: 'Транспортные / портативные мониторы МПР6-03',
        price: 80000,
        description: "Универсальный  аппарат  для  проведения  ИВЛ  с  непрерыв-ным  мониторингом  газообмена  и  оценкой  метаболизма  в  отделениях реанимации, хирургии и интенсивной терапии, а также при транспортировке по клинике.",
        image: '/img/products/zisline.png'
    },
    {
        id: 5,
       name: 'Монитор оценки глубины анестезии МГА-06',
        price: 80000,
        description: "Универсальный  аппарат  для  проведения  ИВЛ  с  непрерыв-ным  мониторингом  газообмена  и  оценкой  метаболизма  в  отделениях реанимации, хирургии и интенсивной терапии, а также при транспортировке по клинике.",
        image: '/img/products/anesthesia.png' 
    },
    {
        id: 6,
       name: 'Модульные мониторы пациента BeneView RUS',
        price: 80000,
        description: "Универсальный  аппарат  для  проведения  ИВЛ  с  непрерыв-ным  мониторингом  газообмена  и  оценкой  метаболизма  в  отделениях реанимации, хирургии и интенсивной терапии, а также при транспортировке по клинике.",
        image: '/imgproducts//BeneView.png' 
    },
    {
        id: 7,
       name: 'Центральная мониторная станция HYPERVISOR VI',
        price: 80000,
        description: "Универсальный  аппарат  для  проведения  ИВЛ  с  непрерыв-ным  мониторингом  газообмена  и  оценкой  метаболизма  в  отделениях реанимации, хирургии и интенсивной терапии, а также при транспортировке по клинике.",
        image: '/img/products/zisline.png' 
    },
    
    {
        id: 8,
       name: 'Измеритель инвазивный портативный электронный автономный центрального венозного давления и других низких давлений в различных полостях организма человека ИиНД 500/75',
        price: 80000,
        description: "Универсальный  аппарат  для  проведения  ИВЛ  с  непрерыв-ным  мониторингом  газообмена  и  оценкой  метаболизма  в  отделениях реанимации, хирургии и интенсивной терапии, а также при транспортировке по клинике.",
        image: '/img/products/zisline.png' 
    },
    {
        id: 9,
       name: 'Систентрализованного мониторинга СЦМ «Тритон»',
        price: 80000,
        description: "Универсальный  аппарат  для  проведения  ИВЛ  с  непрерыв-ным  мониторингом  газообмена  и  оценкой  метаболизма  в  отделениях реанимации, хирургии и интенсивной терапии, а также при транспортировке по клинике.",
        image: '/img/products/zisline.png' 
    },
    {
        id: 9,
       name: 'Аппарат Zisline MV200 / MV300',
        price: 80000,
        description: "Универсальный  аппарат  для  проведения  ИВЛ  с  непрерыв-ным  мониторингом  газообмена  и  оценкой  метаболизма  в  отделениях реанимации, хирургии и интенсивной терапии, а также при транспортировке по клинике.",
        image: '/img/products/zisline.png' 
    },
    {
        id: 10,
       name: 'Пyльсоксиметр ОП-31.1 ', 
        price: 80000,
        description: "Универсальный  аппарат  для  проведения  ИВЛ  с  непрерыв-ным  мониторингом  газообмена  и  оценкой  метаболизма  в  отделениях реанимации, хирургии и интенсивной терапии, а также при транспортировке по клинике.",
        image: '/img/products/OP311.png' 
    },
    {
        id: 11,
       name: 'Аппарат для конвективно ИВЛ стационарный Zisline MV200 / MV300',
        price: 80000,
        description: "Универсальный  аппарат  для  проведения  ИВЛ  с  непрерыв-ным  мониторингом  газообмена  и  оценкой  метаболизма  в  отделениях реанимации, хирургии и интенсивной терапии, а также при транспортировке по клинике.",
        image: '/img/products/zisline.png' 
    },
    {
        id: 12,
       name: 'Аппарат ИВЛ стационарный Zisline MV200 / MV300',
        price: 80000,
        description: "Универсальный  аппарат  для  проведения  ИВЛ  с  непрерыв-ным  мониторингом  газообмена  и  оценкой  метаболизма  в  отделениях реанимации, хирургии и интенсивной терапии, а также при транспортировке по клинике.",
        image: '/img/products/zisline.png' 
    }
    ];

    const product_array = products.map(product => <Product product={product} key={product.name}/>);

    
    return (
        <>
            <Nav/>
            <Logo/>
            <GridContainer>
                <ProductDisplay>
                    {product_array}
                </ProductDisplay>
            </GridContainer>
        </>
    );
}