const fileUploadsService = require('../services/fileuploads.service')
const apiPrefix = '/api/fileuploads';


module.exports ={
    signing
}


function signing(req, res) {
    fileUploadsService
        .signing(req.query)
        .then(data => {
            const returnData = {
                signedRequest: data,
                
                // url: `https://${process.env.S3_AWS_BUCKET}.s3.amazonaws.com/${req.query['file-name']}`,
                url: `https://${process.env.S3_AWS_BUCKET}.signin.aws.amazon.com/console/${req.query['file-name']}`,
            }

            res.send(JSON.stringify(returnData));

        })
        .catch(err => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        })
}