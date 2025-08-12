
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ActasList from "./components/actas_list"
import ActForm from "./components/actform"
import Header from "./components/header";


 
 function App() {

   return (
     <BrowserRouter>
       <div className="container mx-auto">
         <Header />
         <Routes>
           <Route path="/" element={<ActasList />} />
         <Route path="/nueva-acta/" element={<ActForm />} /> 
           <Route path="/editar-acta/:id" element={<ActForm />} />
         </Routes>
       </div>
     </BrowserRouter>
   );
 }
 
 export default App