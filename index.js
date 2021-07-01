const os = require("os");
const path = require("path");
const fs = require("fs");

console.log("Hackeando tu sistema operativo...");
setTimeout(() => {
  const sistema = process.platform;
  if (sistema === "linux") {
    console.log("Tú molas");
  } else if (sistema === "win32") {
    console.log("Tú no molas mucho");
  } else if (sistema === "darwin") {
    console.log(
      "Tú no molas nada. Bueno, excepto si eres Geraldine o Pol. En ese caso molas. Pero por ser tú, no por usar Mac"
    );
  }

  const memoria = os.freemem();
  const mb = Math.round(memoria / Math.pow(1024, 2), 2);
  console.log(`Cuidado, te quedan ${mb} MB de RAM libre`);

  const versio = os.version();
  console.log(`La versión de tu sistema operativo es ${versio}`);

  const info = os.userInfo();
  console.log(
    `Tu usuario del sistema operativo es ${info.username} y tu carpeta es ${info.homedir}`
  );

  const ruta = path.join(info.homedir);
  console.log(
    "\nÉstos son los archivos y carpetas de tu carpeta de usuario:\n"
  );

  fs.readdir(ruta, (err, arxius) => {
    if (err) {
      console.log(err.message);
      return;
    }
    arxius.map((arxiu) => {
      const rutaArxiu = path.join(ruta, arxiu);
      fs.stat(rutaArxiu, (err, dades) => {
        if (err) {
          console.log(err.message);
        }
        console.log(arxiu);
        dades.isDirectory()
          ? console.log("(directorio)")
          : console.log("(archivo)");
        console.log(`${dades.size} Bytes`);
        console.log("\n");
      });
    });
  });
}, 2000);
