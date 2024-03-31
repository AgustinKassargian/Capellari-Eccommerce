import faker from 'faker';
import src from "../public/product.png"

// Función para generar datos de electrodomésticos
const generateElectrodomestico = (tipo) => {
    let categoria;
    switch(tipo) {
        case 'Televisores':
            categoria = 'Televisores';
            break;
        case 'Heladeras':
            categoria = 'Heladeras';
            break;
        case 'Microondas':
            categoria = 'Microondas';
            break;
        case 'Lavarropas':
            categoria = 'Lavarropas';
            break;
        default:
            categoria = 'Electrodomésticos';
    }
    return {
        title: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        slug: faker.helpers.slugify(faker.lorem.words(3)),
        imgs: Array.from({length: 3}, () => faker.image.imageUrl()),
        mainImg: src,
        price: faker.random.number({min: 100, max: 1000, precision: 0.01}),
        categories: ['Electrodomésticos', categoria],
        stock: faker.random.number({min: 0, max: 100})
    };
};

// Generar datos para televisores
const televisores = Array.from({length: 10}, () => generateElectrodomestico('Televisores'));

// Generar datos para heladeras
const heladeras = Array.from({length: 10}, () => generateElectrodomestico('Heladeras'));

// Generar datos para microondas
const microondas = Array.from({length: 10}, () => generateElectrodomestico('Microondas'));

// Generar datos para lavarropas
const lavarropas = Array.from({length: 10}, () => generateElectrodomestico('Lavarropas'));

// Combina todos los datos en una sola variable
const datosMockeados = [...televisores, ...heladeras, ...microondas, ...lavarropas];

module.exports = datosMockeados;