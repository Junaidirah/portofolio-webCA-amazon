const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 80;
const staticpath = path.join(__dirname, "/");

app.use(express.static(staticpath));
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.sendFile(staticpath + "/index.html");
  res.json([
    {
      id: 1,
      nama: "junaidi",
      provinsi: "sulawesi tengah",
      kabubaten: "parigi moutong",
      desa: "moubang",
    },
    {
      id: 2,
      nama: "Putra Alpa Omega Bangun",
      provinsi: "DKI jakarta",
      kabubaten: "Depok",
      kecamatan: "margonda",
      desa: "desa kami",
    },
    {
      id: 3,
      nama: "Rakha Fabianto",
      provinsi: "yogyakarta",
      kabubaten: "kulon progo",
      kecamatan: "wates",
      desa: "banyu wangi",
    },
    {
      id: 4,
      nama: "Ilham Sadewo Haryadi",
      provinsi: "jawa barat",
      kabubaten: "bandung",
      kecamatan: "Babakan Ciparay",
      desa: "Margasuka",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
