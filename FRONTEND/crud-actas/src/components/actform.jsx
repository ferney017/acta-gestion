import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createact, getact, updateact } from "../api/actas";

export default function ActForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // Si existe, es edición
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: ""
  });

  // Si estamos en edición, cargar los datos del acta
  useEffect(() => {
    if (id) {
      const loadActa = async () => {
        try {
          const res = await getact(id);
          setFormData({
            nombre: res.data.nombre,
            descripcion: res.data.descripcion
          });
        } catch (error) {
          console.error("Error al cargar el acta:", error);
        }
      };
      loadActa();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Editar
        await updateact(id, formData);
      } else {
        // Crear
        await createact(formData);
      }
      navigate("/"); // Redirigir a lista
    } catch (error) {
      console.error("Error al guardar acta:", error);
    }
  };

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold text-sky-900">
        {id ? "Editar Acta" : "Nueva Acta"}
      </h1>
      <form onSubmit={handleSubmit} className="mt-4 bg-white p-4 rounded-lg shadow">
        <div className="mb-4">
          <label className="block font-bold">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold">Descripción:</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          {id ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  );
}
