import mercuryGeology from "./assets/geology-mercury.png";
import mercuryImg from "./assets/planet-mercury.svg";
import mercuryInternal from "./assets/planet-mercury-internal.svg";
import earthGeology from "./assets/geology-earth.png";
import earthImg from "./assets/planet-earth.svg";
import earthInternal from "./assets/planet-earth-internal.svg";
import marsImg from "./assets/planet-mars.svg";
import marsGeology from "./assets/geology-mars.png";
import marsInternal from "./assets/planet-mars-internal.svg";
import venusImg from "./assets/planet-venus.svg";
import venusGeology from "./assets/planet-venus-internal.svg";
import venusInternal from "./assets/planet-venus-internal.svg";
import jupiterImg from "./assets/planet-jupiter.svg";
import jupiterGeology from "./assets/geology-jupiter.png";
import jupiterInternal from "./assets/planet-jupiter-internal.svg";
import neptuneImg from "./assets/planet-neptune.svg";
import neptuneGeology from "./assets/geology-neptune.png";
import neptuneInternal from "./assets/planet-neptune-internal.svg";
import saturnImg from "./assets/planet-saturn.svg";
import saturnGeology from "./assets/geology-saturn.png";
import saturnInternal from "./assets/planet-saturn-internal.svg";
import uranusImg from "./assets/planet-uranus.svg";
import uranusGeology from "./assets/geology-uranus.png";
import uranusInternal from "./assets/planet-uranus-internal.svg";
const data = [
  {
    title: "mercury",
    rotationTime: "58.6 DAYS",
    revolutionTime: "87.97 DAYS",
    radius: "2,439.7 KM",
    averageTemp: "430 C",
    color: "#419EBB",
    overviewContent:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    structureContent:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    surfaceContent:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    overviewImg: [mercuryImg, "184px"],
    structureImg: mercuryInternal,
    surfaceImg: mercuryGeology,
  },
  {
    title: "venus",
    rotationTime: "243 DAYS",
    revolutionTime: "224.7 DAYS",
    radius: "651.8 KM",
    averageTemp: "571 C",
    color: "#EDA249",
    overviewContent:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    structureContent:
      "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
    surfaceContent:
      "venus's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    overviewImg: [venusImg, "184px"],
    structureImg: venusInternal,
    surfaceImg: venusGeology,
  },
  {
    title: "earth",
    rotationTime: "58.6 DAYS",
    revolutionTime: "87.97 DAYS",
    radius: "2,439.7 KM",
    averageTemp: "430 C",
    color: "#419EBB",
    overviewContent:
      "earth is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. earth is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    structureContent:
      "earth appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    surfaceContent:
      "earth's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    overviewImg: [earthImg, "184px"],
    structureImg: earthInternal,
    surfaceImg: earthGeology,
  },
  {
    title: "mars",
    rotationTime: "58.6 DAYS",
    revolutionTime: "87.97 DAYS",
    radius: "2,439.7 KM",
    averageTemp: "430 C",
    color: "#419EBB",
    overviewContent:
      "mars is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. mars is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    structureContent:
      "mars appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    surfaceContent:
      "mars's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    overviewImg: [marsImg, "184px"],
    structureImg: marsInternal,
    surfaceImg: marsGeology,
  },
  {
    title: "jupiter",
    rotationTime: "58.6 DAYS",
    revolutionTime: "87.97 DAYS",
    radius: "2,439.7 KM",
    averageTemp: "430 C",
    color: "#419EBB",
    overviewContent:
      "jupiter is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. jupiter is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    structureContent:
      "jupiter appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    surfaceContent:
      "jupiter's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    overviewImg: [jupiterImg, "184px"],
    structureImg: jupiterInternal,
    surfaceImg: jupiterGeology,
  },
  {
    title: "saturn",
    rotationTime: "58.6 DAYS",
    revolutionTime: "87.97 DAYS",
    radius: "2,439.7 KM",
    averageTemp: "430 C",
    color: "#419EBB",
    overviewContent:
      "saturn is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. saturn is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    structureContent:
      "saturn appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    surfaceContent:
      "saturn's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    overviewImg: [saturnImg, "184px"],
    structureImg: saturnInternal,
    surfaceImg: saturnGeology,
  },
  {
    title: "uranus",
    rotationTime: "58.6 DAYS",
    revolutionTime: "87.97 DAYS",
    radius: "2,439.7 KM",
    averageTemp: "430 C",
    color: "#419EBB",
    overviewContent:
      "uranus is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. uranus is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    structureContent:
      "uranus appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    surfaceContent:
      "uranus's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    overviewImg: [uranusImg, "184px"],
    structureImg: uranusInternal,
    surfaceImg: uranusGeology,
  },
  {
    title: "neptune",
    rotationTime: "58.6 DAYS",
    revolutionTime: "87.97 DAYS",
    radius: "2,439.7 KM",
    averageTemp: "430 C",
    color: "#419EBB",
    overviewContent:
      "neptune is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. neptune is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    structureContent:
      "neptune appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    surfaceContent:
      "neptune's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    overviewImg: [neptuneImg, "184px"],
    structureImg: neptuneInternal,
    surfaceImg: neptuneGeology,
  },
];

export default data;
