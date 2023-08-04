import DB from 'lib/db'
import User from "models/User";

import { getSession } from 'next-auth/react'
export default async function login(req, res, next) {
    await DB()
    const session = await getSession({ req })
    const { email, password } = JSON.parse(req.body);

    if (!(email && password)) {
        return next(
            res.status(400).json({
                status: 'Bad request!',
                message: 'Please enter your email and password'
            })
        )
    }

    let user = await User.findOne({ email }).select('+password').populate('role');

    if (!(user && (await user.comparePassword(password)))) {
        return next(
            res.status(401).json({
                status: 'Unauthorized',
                message: "Incorrect email and password combination"
            })
        )
    }

    user = await User.findByIdAndUpdate(user.id, { lastLogin: Date.now() })

    res.send({
        status: 'OK',
        data: {
            user,
            role: user.role
        }
    })
}