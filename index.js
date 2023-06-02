const express = require('express');
const expressRoutes = require('./src/routes/expressRoutes')
const dotenv = require('dotenv')

dotenv.config()
const app = express();

const port = process.env.port


/*const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
*/



/*const upload = multer({ storage: storage });*/


/*


const dbURI =
  'mongodb+srv://HarryPotter:Harry123@cluster0.i7emufb.mongodb.net/user?retryWrites=true&w=majority';

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log('db connected'))
  .catch((err) => console.log(err));
*/

/*const fileSchema = new mongoose.Schema({
  filename: String,
  filepath: String,
});

const File = mongoose.model('File', fileSchema);*/


app.use(expressRoutes)


/*app.post('/upload', upload.array('files'), async (req, res) => {
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
});

*/
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
