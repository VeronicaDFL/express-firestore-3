import express from 'express';
import cors  from 'cors'
import {addNewMovie, getAllMovies} from './src/movieLibrary.js'


const PORT = 3031



const app = express();
app.use(cors());
app.use(express.json());


app.get("/movies",getAllMovies)

app.post("/movies", addNewMovie)


app.listen(PORT, () => {
console.log(`Listening on http://localhost:${PORT}`)


});