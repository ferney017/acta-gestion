import { useEffect, useState } from "react";
import { getacts } from "../api/actas";
import { useNavigate } from "react-router-dom";


export default function ActasList() {
    const navigate = useNavigate()
  const [acts, setActs] = useState([]);

  const loadActs = async () => {
    try {
      const response = await getacts();
      setActs(response.data);
    } catch (error) {
      console.error("Error al cargar las actas:", error);
    }
  };

  useEffect(() => {
    loadActs();
  }, []);

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-sky-900">Actas</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
        {acts.map((act, index) => (
          <div
            key={act.id || index}
            className="bg-sky-900 p-4 rounded-lg shadow"
          >
            <p className="text-white">
              <span className="font-bold">Nombre:</span> {act.nombre}
            </p>
            <p className="text-white">
              <span className="font-bold">Descripción:</span> {act.descripcion}
            </p>
            <div className="mt-4">
              <button 
              className="bg-green-600 text-white px-3 py-1 rounded-lg"
              onClick={()=> navigate('/editar-acta/'+ act.id)}
              >
                editar
              </button>
              <button
               className="bg-red-600 text-white px-3 py-1 rounded-lg ml-2"
              
               >eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
