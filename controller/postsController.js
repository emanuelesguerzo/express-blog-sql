// Data
const connection = require('../data/db');

// Index
const index = (req, res) => {

    const sql = 'SELECT * FROM `posts`;';

    connection.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            return res.status(200).json({
                status: 'success',
                data: results,
            })
        }

    })

};

// Show
const show = (req, res) => {

    const id = req.params.id;
    const sql = 'SELECT * FROM `posts` WHERE id = ?;';

    connection.query(sql, [id], (err, results) => {

        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            })
        } else if (results.length === 0) {
            return res.status(404).json({
                message: 'Post Not Found'
            })
        } else {
            return res.status(200).json({
                status: 'success',
                data: results,
            })
        }

    })
    
};

// // Store
// const store = (req, res) => {

// };

// // Update
// const update = (req, res) => {

// };

// // Modify
// const modify = (req, res) => {

// };

// Destroy
const destroy = (req, res) => {

    const id = req.params.id;
    const sql = 'DELETE FROM `posts` WHERE id = ?;';

    connection.query(sql, [id], (err) => {

        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            return res.sendStatus(204);
        }

    })
};

// Export
module.exports = {
    index,
    show,
    // store,
    // update,
    // modify,
    destroy
};