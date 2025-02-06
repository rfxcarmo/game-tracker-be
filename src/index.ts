import app from "./app";
import Loaders from "./loaders/index"

Loaders.start();

const PORT:number = Number.parseInt(process.env.PORT || '3000');  

app.listen(PORT, () => console.log(`\n\nServer is running: PORT ${PORT}`));