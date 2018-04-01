const aws = require('aws-sdk');

module.exports = {
    signing
}


function signing(query) {
    const s3 = new aws.S3();
    const fileName = query['file-name'];
    const fileType = query['file-type'];
    //needs these 3 files
    const s3Params = {
        Bucket: process.env.S3_AWS_BUCKET,
        Key: "C46/" + fileName,
        Expires: 300,
        ContentType: fileType,
        ACL: 'public-read'
    };
    //returns promise so that signing can be done before upload begins
    return new Promise((resolve, reject) => {
        s3.getSignedUrl('putObject', s3Params, (err, data) => {
            if (err)
                return reject(err);
            resolve(data);
        })
    })
}