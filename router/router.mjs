import express from "express";

const router = express.Router();

router.route('/').post((req, res) => {
    const { data } = req.body;
    const dataArr = [];
    const evenArr = [];
    const oddArr = [];
    const alpha = [];
    for (let i = 0; i < data.length; i++) {
        if (isNaN(data[i])) {
            alpha.push(data[i].toUpperCase());
        }
        else if (parseInt(data[i]) % 2 == 0) {
            evenArr.push(parseInt(data[i]));
        } 
        else {
            oddArr.push(parseInt(data[i]));
        }
    }

    const createData = {
        evenArr: evenArr,
        oddArr: oddArr,
        alpha: alpha
    }

    res.status(200).send(createData);
}) 

export default router