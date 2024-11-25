const sendToken = (data, statusCode, res)=>{
    
    const token = data.getJWTToken()

    res.status(statusCode).json({
        success: true,
        data:{
            name:data.name,
            email:data.email,
            _id:data._id,
            isAdmin:data.isAdmin
        },
        token
    })
}

export default sendToken;