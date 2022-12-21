import Houses from "../models/Houses";


class HouseController {

    //lista house por status
    async index(req, res) {
        const { status } = req.query;

        const indexHouse = await Houses.find({
            status
        })

        return res.json(indexHouse)
    }

    //adicionando
    async store(req, res) {
        const { filename } = req.file;
        const { description, price, location, status } = req.body;
        const { user_id } = req.headers;

        const house = await Houses.create({
            user: user_id,
            thumbnail: filename,
            description: description,
            price: price,
            location: location,
            status: status
        })

        return res.json(house)
    }

    //update house
    async update(req, res) {
        const { filename } = req.file;
        const { description, price, location, status } = req.body;
        const { user_id } = req.headers;
        const { house_id } = req.params;


        await Houses.updateMany({ _id: house_id }, {//_id é do banco house_id o params da rota
            user: user_id,
            thumbnail: filename,
            description: description,
            price: price,
            location: location,
            status: status
        })

        return res.json({
            sucess: "house atualizada!"
        })

    }
}

export default new HouseController();