const File = require('../model/mongoosemodel')


const post =  async (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('No files uploaded.');
    }
  
    try {
      const filePromises = req.files.map(async (file) => {
        const existingFile = await File.findOne({ filename: file.originalname });
  
        if (existingFile) {
          await File.deleteOne({ _id: existingFile._id });
        }
  
        const newFile = new File({
          filename: file.originalname,
          filepath: file.path,
        });
  
        await newFile.save(); 
  
        return newFile;
      });
  
      const savedFiles = await Promise.all(filePromises);
  
      res.send('Files uploaded successfully.');
    } catch (err) {
      console.error(err);
      res.status(500).send('Failed to save files to database.');
    }
  }

  module.exports = {
    post
  }
  