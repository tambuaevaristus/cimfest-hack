import DB from 'lib/db'
import User from "models/User";

import { getSession } from 'next-auth/react'
export default async function login(req, res, next) {
    await DB()
    const session = await getSession({ req })
    const { email, password } = req.body;

    if (!(email && password)) {
        return next(
            res.status(400).json({
                status: 'Bad request!',
                message: 'Please enter your email and password'
            })
        )
    }

    let user = await User.findOne({ email }).select('+password');

    if (!(user && (await user.comparePassword(password)))) {
        return next(
            res.status(401).json({
                status: 'Unauthorized',
                message: "Incorrect email and password combination"
            })
        )
    }

    user = await User.findByIdAndUpdate(user.id, { lastLogin: Date.now() })
    session.user._id = user._id;
    session.user.profileImage = user.profileImage
    session.user.role = user.role

    return res.status(200).json({
        status: 'OK',
        data: user
    })
}