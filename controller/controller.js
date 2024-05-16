const Student= require('../model/model')

exports.stuinsert=async(req,res)=>{
    try{
        const { stname, course, fee } = req.body;
        const newinsert = await Student.create({ stname,course,fee })
        res.status(500).json(newinsert );
    }
    catch(err){
        res.status(200).json({message:"Student Creation Failed"});
    }
}

exports.stuview=async(req,res)=>{
    try{
        const { stname, course, fee } = req.body;
        const stuview = await Student.findAll({ stname,course,fee })
        res.status(500).json(stuview );
    }
    catch(err){
        res.status(200).json({message:"Student Creation Failed"});
    }
}

exports.stusearch = async (req, res) => {
    try {
        
        const stuid = req.params.id;
        const stusearch = await Student.findByPk(stuid);

        if (stusearch) {
            res.status(200).json(stusearch);
        } else {
            res.status(404).json({ message: "Student not found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Student search failed", error: err.message });
    }
};




exports.stuupdate = async (req, res) => {
    try {
        const { id, stname, course, fee } = req.body;
        
       
        const student = await Student.findByPk(id);
        
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

      
        student.stname = stname;
        student.course = course;
        student.fee = fee;

       
        await student.save();

        res.status(200).json({ message: "Student updated successfully", student });
    } catch (err) {
        res.status(500).json({ message: "Student update failed", error: err.message });
    }
};


exports.studel = async (req, res) => {
    try {
        const  id  = req.params;
        const student = await Student.destroy({where:(id)});

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

       res.status(200).json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Student deletion failed", error: err.message });
    }
};
