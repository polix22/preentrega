const products = [{
        id:`1`,
        name:`Consola Sony Playstation 5 Edición Fisica (con lectora) Bundle GOW Digital PS5`,
        category:`consola`,
        img:`https://nextgames.com.ar/img/Public/1040-producto-ps-gow-9129.jpg`,
        stock:`30`,
        price:`60000`,
        description:`Experimentá una carga increíblemente rápida con un SSD de ultra alta velocidad, inmersión más profunda con soporte para retroalimentación háptica, disparadores adaptativos y audio 3D, y una nueva generación de increíbles juegos de PlayStation®.`
    },
    {
        id:`2`,name:`Consola Nintendo Switch Oled 64Gb Neon (JPN) NSW`,category:`consola`,img:`https://nextgames.com.ar/img/Public/1040-producto-switch-neon-2-1455.jpg`,stock:`23`,price:`60000`,description:`La consola Nintendo Switch está diseñada para cualquier estilo de vida, transformándose rápidamente de una consola casera a una consola portátil.`
    },
    {
        id:`3`,name:`Consola Playstation 4 Slim 500GB (JPN)`,category:`consola`,img:`https://nextgames.com.ar/img/Public/1040/62236-producto-61ffvkc3d3l-ac-sl1500.jpg`,stock:`1`,price:`60000s`,description:`La nueva PS4 Slim supone el mismo cambio que han supuesto otras generaciones al pasar del modelo inicial de la consola a uno más estilizado, ahorrando en energía y en espacio pero sin ofrecer ningún tipo de salto que vayamos a notar en los juegos.`
    },
    {
        id:`4`,name:`Consola Xbox Series X DIABLO IV BUNDLE`,category:`consola`,img:`https://nextgames.com.ar/img/Public/1040-producto-6193spgxzil-sl1500-3064.jpg`,stock:`12`,price:`60000`,description:`La Xbox mas potente del mundo.`
    },
    {
        id:`5`,name:`Juego Nintendo Switch Detective Pikachu Returns NSW`,category:`videojuego`,img:`https://nextgames.com.ar/img/Public/1040-producto-detective-pikachu-return-nsw-2711.jpg`,stock:`13`,price:`60000`,description:`¡Resuelve misterios con el carismático detective Pikachu!`
    },
    {
        id:`6`,name:`Juego Nintendo Switch Pokemon Scarlet NSW`,category:`videojuego`,img:`https://nextgames.com.ar/img/Public/1040/producto-716zacuzgl-sl1500-5638.jpg`,stock:`13`,price:`60000`,description:`Bienvenidop al mundo abierto de la región Paldea`
    },
    {
        id:`7`,name:`Juego Playstation 4 God of War Ragnarok PS4`,category:`videojuego`,img:`https://nextgames.com.ar/img/Public/1040-producto-gow-rag-ps4-4535.jpg`,stock:`12`,price:`60000`,description:``
    },
    {
        id:`8`,name:`Juego Playstation 5 The Last of us Part 2 (REMASTERED) PS5`,category:`videojuego`,img:`https://nextgames.com.ar/img/Public/1040/producto-818m9wgy0ll-sl1500-8694.jpg`,stock:`1`,price:`60000`,description:`¿De qué se trata The Last of Us Part II Remastered?
        Vive los conmovedores viajes de Ellie y Abby en esta remasterización para PS5.`
    },
    {
        id:`9`,name:`Juego Playstation 5 Call of Duty Modern Warfare 3 PS5`,category:`videojuego`,img:`https://nextgames.com.ar/img/Public/1040-producto-cod-mw3-ps5-7041.jpg`,stock:`23`,price:`60000`,description:`La guerra ha cambiado.
        Call of Duty regresa con una nueva campaña, versiones modernizadas de mapas clásicos para el modo multijugador y una experiencia de Zombis JcE en un mundo abierto.`
    },
    {
        id:`10`,name:`Juego Playstation 5 Horizon Forbidden West PS5`,category:`videojuego`,img:`https://nextgames.com.ar/img/Public/1040/21031-producto-81mkgl8czel-sl1500.jpg`,stock:`22`,price:`60000`,description:`Únete a Aloy mientras desafía el Oeste Prohibido, una frontera majestuosa, aunque peligrosa, en la que se ocultan nuevas y misteriosas amenazas.`
    },
    {
        id:`11`,name:`Juego Nintendo Switch Luigi's Mansion 3 NSW`,category:`videojuego`,img:`https://nextgames.com.ar/img/Public/1040/producto-81-fd3tzull-sl1500-6360.jpg`,stock:`0`,price:`60000`,description:`El hotel está encantado. Mario está desaparecido. Y la única esperanza es… ¿¡Luigi?!`
    },
    {
        id:`12`,name:`Joystick Inalámbrico Microsoft Xbox Series Elite 2 Azul Core`,category:`accesorio`,img:`https://nextgames.com.ar/img/Public/1040-producto-1920-1080-944062-9683.jpg`,stock:`0`,price:`60000`,description:`Experimenta el controlador inalámbrico Xbox Elite Series 2 Core con palillos de tensión ajustable, agarre de goma envolvente y bloqueos de gatillo más cortos.`
    },
    {
        id:`13`, name:`Joystick Sony Playstation 5 Dualsense Starlight Blue PS5`,category:`accesorio`,img:`https://nextgames.com.ar/img/Public/1040-producto-dualsense-starlight-1-1199.jpg`,stock:`0`,price:`60000`,description:`Descubre una experiencia de juego más intensa e inmersiva con el innovador control de PS5™`
    },
    {
        id:`14`,name:`Joystick Xbox Series Wireless Carbon Black (JPN)`,category:`accesorio`,img:`https://nextgames.com.ar/img/Public/1040-producto-joy-xbox-negro-253.jpg`,stock:`2`,price:`60000`,description:`Empareja rápidamente, juega y cambia entre dispositivos como Xbox Series X|S, Xbox One, PC Windows, Android e iOS.`
    }
]

export const getProducts = ()=> {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products)
        },500)
    })
} 

export const getProductsById =(productsId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
        resolve(products.find(prod => prod.id === productsId))
    },500)
});
}

export const getProductsByCategory = (productsByCategory)=> {
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === productsByCategory));
        }, 500);
    });
}