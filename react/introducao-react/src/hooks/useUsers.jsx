import { useState, useEffect } from "react";
import axios from "axios";

export function useUsers(){
    const [users, setUsers] = useState([]);

    const [user, setUser] = useState({
        name: "",
        lastName: "",
      });
    
    async function createUser() {
        const response = await axios.post(
          "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users",
          user
        );
        await fetchUsers();
      }

      function clearFields(){
        user.name = "";
        user.lastName = "";
      }
    
    async function deleteUser(id) {
        await axios.delete(
         `https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users/${id}`,
        );  
         await fetchUsers();
       }

    async function fetchUsers() {
        const response = await axios.get(
          "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users",
        );
        setUsers(response.data);
      }
    function handleSubmit(e) {
        e.preventDefault();
        if (user.name.length > 3 && user.lastName.length >= 3){
           createUser();
           clearFields();
           toast.success('🦄 Wow so easy!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            });
        }
       
      }
      
    function handleUser(e) {
        setUser((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }

      useEffect (() => {
        fetchUsers();
        
      }, []);

   return {user, users, handleSubmit, handleUser, deleteUser }
}


/**** Site para criar o botão /*****/
// https://fkhadra.github.io/react-toastify/introduction