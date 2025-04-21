import fs from "fs"

const GET  = (req,res) => {
    
}
const POST  = (req,res) => {
    
}
const PUT  = (req,res) => {
    
}
const DELETE = (req, res) => {
    try {
        const { id } = req.params;        
        res.status(200).json({ message: `Item with id ${id} deleted successfully.` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


export default{
    GET,
    POST,
    PUT,
    DELETE
}