const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');
Database.then(async db => {
    await saveOrphanage(db,{
        lat: "-27.220002",
        lng: "-49.6691757",
        name: "Lar de Amor",
        about: "Presta assistencia a criancas de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"999999999",
        images:[
            "https://images.unsplash.com/photo-1582167410766-a90eea4787ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1573924436756-128cf1f6387a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciencia para dar",
        opening_hours: "Horario de visitas das 18h ate 8h",
        open_on_weekends:"1"
    })
        const selectedOrphanages = await db.all("SELECT * FROM orphanages")
        console.log(selectedOrphanages)
        
        const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="3"')
        console.log(orphanage)

        //deletar dado da tabela
        //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
        //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})