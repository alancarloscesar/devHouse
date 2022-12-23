import Reserve from "../models/Reserve";
import Houses from "../models/Houses";
import User from "../models/User";

class ReserveController {

    //criando reserva
    async store(req, res) {

        const { user_id } = req.headers;
        const { house_id } = req.params;
        const { date } = req.body;

        const house = await Houses.findById(house_id)
        if (house.status !== true) {
            return res.status(401).json({
                error: "Solicitação não permitida"
            })
        }


        if (!house) {
            return res.status(400).json({
                error: "Casa näo encontrada!"
            })
        }

        const user = await User.findById(user_id)
        if (String(user._id) === String(house.user)) {//user náo pode reservar sua propria casa
            return res.status(401).json({
                error: "Você não pode reservar sua própria casa."
            })
        }

        const reserveHouse = await Reserve.create({
            user: user_id,
            house: house_id,
            date
        })

        await (await reserveHouse.populate('house')).populate('user')

        return res.json(reserveHouse)
    }

    //listando reservas por user
    async index(req, res) {

        const { user_id } = req.headers;

        const houseInd = await Reserve.find({
            user: user_id
        }).populate('house')


        return res.status(200).json(houseInd)
    }

    async destroy(req, res) {

        const { reserve_id } = req.body;

        await Reserve.deleteOne({ _id: reserve_id })


        return res.json({Deleted: `Reserva ${reserve_id} deletada com sucesso!`})
    }


}

export default new ReserveController();